import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Verify = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
  });

  // Update state when user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.code) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/accounts/verify/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: formData.name.trim(),
          code: formData.code,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Code éronné");
        return;
      }

      toast.success("Le compte est crée avec succée");
      setFormData({ name: "", code: "" });

      // Redirect to verification page
      setTimeout(() => navigate("/login"), 1000);

    } catch (error) {
      console.error("Error:", error);
      toast.error("Erreur réseau. Réessayez.");
    } finally {
    setLoading(false);
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
            <CardTitle className="text-2xl">Validation du compte</CardTitle>
            <CardDescription>Rejoignez la communauté Darna Tunisia</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="code">name</Label>
                <Input
                id="name"
                type="text"
                placeholder="Username"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>

            {/* Code */}
            <div className="space-y-2">
              <Label htmlFor="code">Code</Label>
              <Input
                id="code"
                type="number"
                placeholder="code"
                value={formData.code}
                onChange={handleChange}
                required
              />
            </div>

            

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? "Vérification..." : "Verifier le compte"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Se connecter
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

export default Verify;
