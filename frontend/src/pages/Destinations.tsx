import { MapPin } from "lucide-react";
import CityCard from "@/components/CityCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tunisImage from "@/assets/tunis.jpg";
import sousseImage from "@/assets/sousse.jpg";
import djerbaImage from "@/assets/djerba.jpg";
import tozeurImage from "@/assets/tozeur.jpg";
import kairouanImage from "@/assets/kairouan.jpg";

const Destinations = () => {
  const cities = [
    {
      name: "Tunis",
      image: tunisImage,
      description: "Capitale vibrante mêlant histoire millénaire et modernité, avec sa médina classée UNESCO.",
      slug: "tunis",
    },
    {
      name: "Sousse",
      image: sousseImage,
      description: "La perle du Sahel avec ses plages dorées et sa médina fortifiée.",
      slug: "sousse",
    },
    {
      name: "Djerba",
      image: djerbaImage,
      description: "L'île aux mille palmiers, paradis méditerranéen aux eaux turquoise.",
      slug: "djerba",
    },
    {
      name: "Tozeur",
      image: tozeurImage,
      description: "Oasis du désert avec ses palmeraies luxuriantes et architecture unique.",
      slug: "tozeur",
    },
    {
      name: "Kairouan",
      image: kairouanImage,
      description: "Ville sainte de l'Islam avec la Grande Mosquée, patrimoine UNESCO.",
      slug: "kairouan",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground py-20">
          <div className="container text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
              <MapPin className="h-8 w-8" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Destinations</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Explorez les trésors de la Tunisie, de la Méditerranée au Sahara
            </p>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <CityCard key={city.slug} {...city} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
