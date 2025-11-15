from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.core.cache import cache
from django.conf import settings
from django.contrib.auth import authenticate, get_user_model
from .serializers import SignupSerializer, MyTokenObtainPairSerializer
import secrets


@api_view(['POST'])
def signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.is_active = False
        user.save()

        # Secure 6-digit code
        code = str(secrets.randbelow(900000) + 100000)
        cache.set(f"verify:{user.username}", code, timeout=600)

        send_mail(
            subject='Verify your email',
            message=f'Your verification code is: {code}',
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[user.email],
        )

        return Response({"message": "Verification code sent to email."}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def verify_email(request):
    username = request.data.get("username")
    code = request.data.get("code")

    if not username or not code:
        return Response({"error": "Username and code are required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = get_user_model().objects.get(username=username)
        real_code = cache.get(f"verify:{username}")

        if real_code is None:
            return Response({"error": "Verification code expired."}, status=status.HTTP_400_BAD_REQUEST)
        if real_code != code:
            return Response({"error": "Invalid verification code."}, status=status.HTTP_400_BAD_REQUEST)

        user.is_active = True
        user.save()
        cache.delete(f"verify:{username}")

        return Response({"message": "Email verified successfully."}, status=status.HTTP_200_OK)

    except get_user_model().DoesNotExist:
        return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def signin(request):
    email = request.data.get('email').lower()
    password = request.data.get('password')

    if not email or not password:
        return Response({"error": "Email and password are required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user_obj = get_user_model().objects.get(email=email)
    except get_user_model().DoesNotExist:
        return Response({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)

    user = authenticate(username=user_obj.username, password=password)
    if not user:
        
        return Response({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)

    if not user.is_active:
        return Response({"error": "Please verify your email before signing in."}, status=status.HTTP_403_FORBIDDEN)

    serializer = MyTokenObtainPairSerializer(data={
        "username": user.username,
        "password": password
    })
    serializer.is_valid(raise_exception=True)

    return Response({
        "message": "Login successful",
        "tokens": serializer.validated_data,
    }, status=status.HTTP_200_OK)
