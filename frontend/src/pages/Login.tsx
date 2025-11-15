import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { set } from "date-fns";

interface AuthTokens {
  access: string;
  refresh: string;
}

interface ProfileUser {
  username: string;
  email: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(null);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);

  // ✅ useEffect must be HERE — top level of component
  // useEffect(() => {
  //   console.log("Updated authTokens:", authTokens);
  // }, [authTokens]);

  // useEffect(() => {
  //   console.log("Updated user:", user);
  //   console.log("Name from token:", user?.username);
  //   console.log("Email from token:", user?.email);


  // }, [user]);

  useEffect(() => {
    console.log("Updated profileUser:", profileUser);
  }, [profileUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/accounts/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim(), password }),
      });

      const data = await response.json();

      if (data.tokens?.access && data.tokens?.refresh) {

      const decoded: any = jwtDecode(data.tokens.access);

      const decodedUser = {
        username: decoded.username,
        email: decoded.email,
      };

      setProfileUser(decodedUser);

      localStorage.setItem("authTokens", JSON.stringify(data.tokens));

      toast.success("Connexion réussie !");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/profil", {
          state: { profileUser: decodedUser },
        });
      }, 1000);
      } else {
        toast.error("Email ou mot de passe incorrect");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Erreur réseau ou identifiants invalides");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mx-auto">
            <Heart className="h-8 w-8 fill-secondary text-secondary" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Darna Tunisia
            </span>
          </Link>
          <div>
            <CardTitle className="text-2xl">Connexion</CardTitle>
            <CardDescription>Connectez-vous pour accéder à votre espace personnel</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link to="/signup" className="text-primary hover:underline font-medium">
                Créer un compte
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
              Retour à l'accueil
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

























