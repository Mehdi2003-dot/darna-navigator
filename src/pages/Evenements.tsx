import { Calendar, Filter } from "lucide-react";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Evenements = () => {
  const [filterCity, setFilterCity] = useState<string>("all");
  const [filterMonth, setFilterMonth] = useState<string>("all");

  const events = [
    {
      title: "Festival International de Carthage",
      date: "15-25 Juillet 2024",
      location: "Carthage, Tunis",
      description: "Le plus prestigieux festival culturel de Tunisie avec concerts et spectacles",
      city: "tunis",
      month: "juillet",
    },
    {
      title: "Festival du Sahara",
      date: "20-23 Décembre 2024",
      location: "Douz",
      description: "Célébration des traditions sahariennes avec courses de dromadaires et folklore",
      city: "douz",
      month: "decembre",
    },
    {
      title: "Festival International de Hammamet",
      date: "10-20 Août 2024",
      location: "Hammamet",
      description: "Festival d'arts et de musique dans le cadre enchanteur de Hammamet",
      city: "hammamet",
      month: "aout",
    },
    {
      title: "Festival de Jazz de Tabarka",
      date: "5-12 Juillet 2024",
      location: "Tabarka",
      description: "Rencontres jazz internationales dans un cadre naturel exceptionnel",
      city: "tabarka",
      month: "juillet",
    },
    {
      title: "Festival Ulysses de Djerba",
      date: "1-7 Juin 2024",
      location: "Djerba",
      description: "Arts de la rue, spectacles vivants et concerts sur l'île de Djerba",
      city: "djerba",
      month: "juin",
    },
    {
      title: "Festival International de Sousse",
      date: "15-30 Juillet 2024",
      location: "Sousse",
      description: "Musique, théâtre et folklore dans la médina de Sousse",
      city: "sousse",
      month: "juillet",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const cityMatch = filterCity === "all" || event.city === filterCity;
    const monthMatch = filterMonth === "all" || event.month === filterMonth;
    return cityMatch && monthMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-20">
          <div className="container text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
              <Calendar className="h-8 w-8" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Événements & Festivals</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Vivez l'effervescence culturelle de la Tunisie toute l'année
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30 border-b">
          <div className="container">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Filtrer par :</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Select value={filterCity} onValueChange={setFilterCity}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Toutes les villes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les villes</SelectItem>
                    <SelectItem value="tunis">Tunis</SelectItem>
                    <SelectItem value="djerba">Djerba</SelectItem>
                    <SelectItem value="sousse">Sousse</SelectItem>
                    <SelectItem value="hammamet">Hammamet</SelectItem>
                    <SelectItem value="tabarka">Tabarka</SelectItem>
                    <SelectItem value="douz">Douz</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterMonth} onValueChange={setFilterMonth}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Tous les mois" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les mois</SelectItem>
                    <SelectItem value="juin">Juin</SelectItem>
                    <SelectItem value="juillet">Juillet</SelectItem>
                    <SelectItem value="aout">Août</SelectItem>
                    <SelectItem value="decembre">Décembre</SelectItem>
                  </SelectContent>
                </Select>

                {(filterCity !== "all" || filterMonth !== "all") && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFilterCity("all");
                      setFilterMonth("all");
                    }}
                  >
                    Réinitialiser
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20">
          <div className="container">
            {filteredEvents.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-8">
                  {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''} trouvé{filteredEvents.length > 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.title} {...event} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Aucun événement trouvé</h3>
                <p className="text-muted-foreground mb-6">
                  Essayez de modifier vos filtres de recherche
                </p>
                <Button
                  onClick={() => {
                    setFilterCity("all");
                    setFilterMonth("all");
                  }}
                >
                  Voir tous les événements
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Evenements;
