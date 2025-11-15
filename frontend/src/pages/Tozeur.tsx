import { Heart, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tozeurImage from "@/assets/tozeur.jpg"; // <-- replace with Tozeur image
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Tozeur = () => {
  const navigate = useNavigate();

  const places = [
    {
      name: "Oasis de Tozeur",
      description: "Grande oasis verdoyante au milieu du désert",
    },
    {
      name: "Medina de Tozeur",
      description: "Architecture traditionnelle avec ses ruelles étroites",
    },
    {
      name: "Chott El Jerid",
      description: "Grand lac salé impressionnant, célèbre pour ses mirages",
    },
    {
      name: "Musée Dar Cheraït",
      description: "Musée présentant l’histoire et la culture locale",
    },
    {
      name: "Palmeraie et marchés locaux",
      description: "Profitez des produits locaux et de l’artisanat",
    },
  ];

  const handleAddToFavorites = () => {
    toast.success("Tozeur ajoutée à vos favoris !");
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
              src={tozeurImage}
              alt="Tozeur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          <div className="relative z-10 w-full">
            <div className="container pb-12">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold text-white mb-4">Tozeur</h1>
                <div className="flex items-center text-white/90 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Tunisie, Gouvernorat de Tozeur</span>
                </div>
                <p className="text-xl text-white/90">
                  Porte du désert tunisien, Tozeur vous invite à découvrir ses oasis luxuriantes, ses architectures traditionnelles et ses paysages désertiques à couper le souffle.
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
                  <h2 className="text-3xl font-bold mb-4">À propos de Tozeur</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Tozeur, située au sud-ouest de la Tunisie, est une ville connue pour ses vastes palmeraies et son architecture unique en briques ocres.
                    </p>
                    <p>
                      La région est célèbre pour ses oasis et ses marchés traditionnels, offrant aux visiteurs un mélange fascinant de culture, de nature et d’histoire.
                    </p>
                    <p>
                      Les alentours de Tozeur, notamment le Chott El Jerid, offrent des paysages désertiques spectaculaires et des opportunités pour les excursions en 4x4 ou les balades à dos de chameau.
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
                        <dd className="text-foreground">~110 000 habitants</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Superficie</dt>
                        <dd className="text-foreground">474 km²</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Climat</dt>
                        <dd className="text-foreground">Désertique chaud et sec</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-muted-foreground">Meilleure période</dt>
                        <dd className="text-foreground">Octobre à Avril</dd>
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
                      Utilisez le hashtag #DarnaTozeur pour partager vos souvenirs
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

export default Tozeur;
