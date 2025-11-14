import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, UtensilsCrossed, Calendar, MapPin } from "lucide-react";
import CityCard from "@/components/CityCard";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tunisia.jpg";
import tunisImage from "@/assets/tunis.jpg";
import sousseImage from "@/assets/sousse.jpg";
import djerbaImage from "@/assets/djerba.jpg";

const Home = () => {
  const featuredCities = [
    {
      name: "Djerba",
      image: djerbaImage,
      description: "L'île aux mille palmiers et ses plages de rêve",
      slug: "djerba",
    },
    {
      name: "Tunis",
      image: tunisImage,
      description: "La capitale vibrante entre tradition et modernité",
      slug: "tunis",
    },
    {
      name: "Sousse",
      image: sousseImage,
      description: "La perle du Sahel et ses médinas historiques",
      slug: "sousse",
    },
  ];

  const upcomingEvents = [
    {
      title: "Festival International de Carthage",
      date: "15-25 Juillet 2024",
      location: "Carthage, Tunis",
      description: "Le plus grand festival culturel de Tunisie",
    },
    {
      title: "Festival du Sahara",
      date: "20-23 Décembre 2024",
      location: "Douz",
      description: "Célébration de la culture saharienne",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Tunisia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Bienvenue chez vous en Tunisie
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Découvrez la magie méditerranéenne, entre histoire millénaire et traditions vivantes
            </p>
            <Link to="/destinations">
              <Button size="lg" className="text-lg">
                Explorer les destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Villes à découvrir</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des destinations authentiques qui vous feront vivre l'âme de la Tunisie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredCities.map((city) => (
                <CityCard key={city.slug} {...city} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/destinations">
                <Button variant="outline" size="lg">
                  Voir toutes les destinations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gastronomie Preview */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center p-3 bg-accent rounded-full mb-6">
                  <UtensilsCrossed className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Saveurs de la Tunisie</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Découvrez une cuisine riche en saveurs, où les épices méditerranéennes 
                  rencontrent les traditions culinaires ancestrales. Du couscous parfumé 
                  aux pâtisseries au miel, chaque plat raconte une histoire.
                </p>
                <Link to="/gastronomie">
                  <Button size="lg">
                    Découvrir la gastronomie
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Cuisine tunisienne"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/placeholder.svg"
                  alt="Pâtisserie tunisienne"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-6">
                <Calendar className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Événements à venir</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Participez aux festivals et événements qui célèbrent la culture tunisienne
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.title} {...event} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/evenements">
                <Button variant="outline" size="lg">
                  Voir tous les événements
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
