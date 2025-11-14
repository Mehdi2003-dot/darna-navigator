import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulation de déconnexion après 2 secondes
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-center space-x-2 mx-auto">
            <Heart className="h-8 w-8 fill-secondary text-secondary" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Darna Tunisia
            </span>
          </div>
          <div className="flex justify-center">
            <div className="rounded-full bg-muted p-4">
              <LogOut className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl">Déconnexion réussie</CardTitle>
            <CardDescription>
              À bientôt sur Darna Tunisia !
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Vous allez être redirigé vers l'accueil...
          </p>
          <Link to="/">
            <Button variant="outline" className="w-full">
              Retourner à l'accueil maintenant
            </Button>
          </Link>
          <Link to="/login">
            <Button className="w-full">
              Se reconnecter
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
