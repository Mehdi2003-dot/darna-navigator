import { UtensilsCrossed } from "lucide-react";
import DishCard from "@/components/DishCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import couscousImage from "@/assets/couscous.jpg";
import brikImage from "@/assets/brik.jpg";

const Gastronomie = () => {
  const dishes = [
    {
      name: "Couscous",
      image: couscousImage,
      description: "Le plat national tunisien, semoule fine accompagnée de légumes et viande mijotés aux épices.",
      restaurant: "Restaurant Dar El Jeld, Tunis",
    },
    {
      name: "Brik à l'œuf",
      image: brikImage,
      description: "Feuille de brick croustillante farcie d'un œuf, thon, câpres et persil.",
      restaurant: "Chez Slah, La Marsa",
    },
    {
      name: "Lablabi",
      image: "/placeholder.svg",
      description: "Soupe de pois chiches relevée d'harissa, servie avec du pain rassis.",
      restaurant: "Lablabi de Driss, Tunis",
    },
    {
      name: "Mechouia",
      image: "/placeholder.svg",
      description: "Salade de légumes grillés (poivrons, tomates, oignons) avec thon et câpres.",
      restaurant: "Le Baroque, Sidi Bou Said",
    },
    {
      name: "Ojja aux fruits de mer",
      image: "/placeholder.svg",
      description: "Ragoût épicé de fruits de mer aux tomates et piments, servi avec du pain.",
      restaurant: "La Goulette, Tunis",
    },
    {
      name: "Makroudh",
      image: "/placeholder.svg",
      description: "Pâtisserie traditionnelle aux dattes et miel, parfumée à la fleur d'oranger.",
      restaurant: "Pâtisserie Ben Yedder, Kairouan",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-accent to-accent-dark text-accent-foreground py-20">
          <div className="container text-center">
            <div className="inline-flex items-center justify-center p-3 bg-background/10 rounded-full mb-6">
              <UtensilsCrossed className="h-8 w-8" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Gastronomie Tunisienne</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Un voyage culinaire entre Méditerranée et Sahara, où chaque plat raconte une histoire
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                La cuisine tunisienne est un savoureux mélange d'influences berbères, arabes, 
                turques, italiennes et françaises. Généreuse en saveurs et en couleurs, elle fait 
                la part belle aux épices (cumin, carvi, coriandre, harissa), à l'huile d'olive, 
                aux légumes frais et aux produits de la mer.
              </p>
            </div>
          </div>
        </section>

        {/* Dishes Grid */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Plats Typiques & Restaurants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dishes.map((dish) => (
                <DishCard key={dish.name} {...dish} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Envie de découvrir plus ?</h2>
            <p className="text-lg mb-6 opacity-90">
              Explorez nos destinations pour trouver les meilleurs restaurants locaux
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gastronomie;
