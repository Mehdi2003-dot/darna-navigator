import { Heart, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import kairouanImage from "@/assets/kairouan.jpg"; // <-- replace with Kairouan image
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Kairouan = () => {
  const navigate = useNavigate();

  const places = [
    {
      name: "Grande Mosquée de Kairouan",
      description: "Monument historique et symbole religieux majeur",
    },
    {
      name: "Médina de Kairouan",
      description: "Centre historique avec ses souks et artisanats traditionnels",
    },
    {
      name: "Bassin Aghlabides",
      description: "Ancien réservoir d'eau datant du 9ème siècle",
    },
    {
      name: "Mosquée des Trois Portes",
      description: "Mosquée ancienne célèbre pour ses portes ornées",
    },
    {
      name: "Marché local",
      description: "Artisanat, tapis et spécialités culinaires locales",
    },
  ];

  const handleAddToFavorites = () => {
    toast.success("Kairouan ajoutée à vos favoris !");
    setTimeout(() => navigate("/profil"), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={kairouanImage}
              alt="Kairouan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          <div className="relative z-10 w-full">
            <div className="container pb-12">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold text-white mb-4">Kairouan</h1>
                <div className="flex items-center text-white/90 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Tunisie, Gouvernorat de Kairouan</span>
                </div>
                <p className="text-xl text-white/90">
                  Ville historique et religieuse de Tunisie, Kairouan vous offre un mélange unique de culture, architecture et artisanat traditionnel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">À propos de Kairouan</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Kairouan, fondée au 7ème siècle, est considérée comme la quatrième ville sainte de l'islam. Son architecture et ses monuments reflètent des siècles d’histoire et de traditions.
                    </p>
                    <p>
                      La ville est réputée pour ses souks animés, son artisanat unique (tapis, poterie, bijoux) et ses sites religieux impressionnants.
                    </p>
                    <p>
                      Ne manquez pas de visiter la Grande Mosquée, les mosquées anciennes et de goûter aux spécialités locales dans les marchés traditionnels.
                    </p>
                  </div>
                </div>

                <div>
                  <Button onClick={handleAddToFavorites} size="lg" className="w-full sm:w-auto">
                    <Heart className="mr-2 h-5 w-5" />
                    Ajouter aux favoris
                  </Button>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Informations pratiques</h3>
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="font-medium text-muted-foreground">Population</dt>
                        <dd className="text-foreground">~186 000 habitants</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Superficie</dt>
                        <dd className="text-foreground">150 km²</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Climat</dt>
                        <dd className="text-foreground">Méditerranéen semi-aride</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Meilleure période</dt>
                        <dd className="text-foreground">Septembre à Mai</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>

                <Card className="bg-accent">
                  <CardContent className="p-6">
                    <Camera className="h-8 w-8 text-accent-foreground mb-3" />
                    <h3 className="font-semibold text-lg mb-2 text-accent-foreground">
                      Partagez vos photos
                    </h3>
                    <p className="text-sm text-accent-foreground/80">
                      Utilisez le hashtag #DarnaKairouan pour partager vos souvenirs
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Places to Visit */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Lieux à visiter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{place.name}</h3>
                        <p className="text-sm text-muted-foreground">{place.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kairouan;
