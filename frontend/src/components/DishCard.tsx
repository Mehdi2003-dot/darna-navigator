import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface DishCardProps {
  name: string;
  image: string;
  description: string;
  restaurant?: string;
}

const DishCard = ({ name, image, description, restaurant }: DishCardProps) => {
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    toast.success(`${name} ajouté aux favoris`);
    setTimeout(() => navigate("/profil"), 1000);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          {restaurant && (
            <p className="text-sm text-primary">{restaurant}</p>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button
          onClick={handleAddToFavorites}
          variant="outline"
          className="w-full"
          size="sm"
        >
          <Heart className="h-4 w-4 mr-2" />
          Ajouter aux favoris
        </Button>
      </CardContent>
    </Card>
  );
};

export default DishCard;
