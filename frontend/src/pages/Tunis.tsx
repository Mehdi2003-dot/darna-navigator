import { Heart, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tunisImage from "@/assets/tunis.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Tunis = () => {
  const navigate = useNavigate();

  const places = [
    {
      name: "Plage de Gammarth",
      description: "Plage de sable fin et eaux cristallines",
    },
    {
      name: "Medina de Tunis",
      description: "Centre historique et marché traditionnel",
    },
    {
      name: "Musée Bardo",
      description: "Musée national avec riche collection archéologique",
    },
    {
      name: "Cathédrale Saint-Vincent-de-Paul",
      description: "Église emblématique de Tunis",
    },
    {
      name: "Parc du Belvédère",
      description: "Grand parc urbain avec zoo et espaces verts",
    },
  ];

  const handleAddToFavorites = () => {
    toast.success("Tunis ajoutée à vos favoris !");
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
              src={tunisImage}
              alt="Tunis"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          <div className="relative z-10 w-full">
            <div className="container pb-12">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold text-white mb-4">Tunis</h1>
                <div className="flex items-center text-white/90 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Tunisie, Gouvernorat de Tunis</span>
                </div>
                <p className="text-xl text-white/90">
                  Tunis vous accueille avec ses plages, son patrimoine culturel unique, 
                  et son art de vivre méditerranéen.
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
                  <h2 className="text-3xl font-bold mb-4">À propos de Tunis</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Tunis, capitale de la Tunisie, offre un mélange unique de cultures 
                      arabes, berbères et méditerranéennes. Son centre historique, la Medina, 
                      est inscrit au patrimoine mondial de l'UNESCO.
                    </p>
                    <p>
                      Vous y trouverez des plages magnifiques, des parcs verdoyants et des musées 
                      fascinants, comme le Musée Bardo et le musée de la Ville.
                    </p>
                    <p>
                      L'île est également célèbre pour son artisanat traditionnel et sa gastronomie 
                      riche, avec des spécialités locales comme le couscous, le brik et les pâtisseries tunisiennes.
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
                        <dd className="text-foreground">~2 700 000 habitants</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Superficie</dt>
                        <dd className="text-foreground">212 km²</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Climat</dt>
                        <dd className="text-foreground">Méditerranéen chaud</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Meilleure période</dt>
                        <dd className="text-foreground">Avril à Octobre</dd>
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
                      Utilisez le hashtag #DarnaTunis pour partager vos souvenirs
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

export default Tunis;
