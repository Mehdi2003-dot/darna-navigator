import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
}

const EventCard = ({ title, date, location, description, image }: EventCardProps) => {
  const navigate = useNavigate();

  const handleJoinEvent = () => {
    toast.success(`Vous participez à : ${title}`);
    setTimeout(() => navigate("/profil"), 1000);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <CardContent className="p-4 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button
          onClick={handleJoinEvent}
          className="w-full"
          size="sm"
        >
          Je veux y aller
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
