import { Heart, Calendar, Settings, LogOut, MapPin, UtensilsCrossed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Profil = () => {
  const navigate = useNavigate();

  // Simulation de données utilisateur
  const user = {
    name: "Utilisateur",
    email: "utilisateur@darnatunisia.tn",
    memberSince: "Mars 2024",
  };

  const favorites = [
    { type: "destination", name: "Djerba", slug: "djerba" },
    { type: "dish", name: "Couscous" },
  ];

  const events = [
    { name: "Festival International de Carthage", date: "15-25 Juillet 2024" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                  <p className="text-muted-foreground mb-1">{user.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Membre depuis {user.memberSince}
                  </p>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <Button variant="outline" className="flex-1 md:flex-none">
                    <Settings className="h-4 w-4 mr-2" />
                    Paramètres
                  </Button>
                  <Link to="/logout" className="flex-1 md:flex-none">
                    <Button variant="outline" className="w-full">
                      <LogOut className="h-4 w-4 mr-2" />
                      Déconnexion
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="favorites" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="favorites">
                <Heart className="h-4 w-4 mr-2" />
                Mes Favoris
              </TabsTrigger>
              <TabsTrigger value="events">
                <Calendar className="h-4 w-4 mr-2" />
                Mes Événements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="favorites" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Destinations favorites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {favorites.filter(f => f.type === "destination").length > 0 ? (
                    <div className="space-y-3">
                      {favorites
                        .filter(f => f.type === "destination")
                        .map((fav, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Heart className="h-5 w-5 fill-secondary text-secondary" />
                              <span className="font-medium">{fav.name}</span>
                            </div>
                            <Link to={`/destinations/${fav.slug}`}>
                              <Button variant="ghost" size="sm">
                                Voir
                              </Button>
                            </Link>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Aucune destination favorite</p>
                      <Link to="/destinations">
                        <Button variant="link" className="mt-2">
                          Explorer les destinations
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UtensilsCrossed className="h-5 w-5 mr-2 text-primary" />
                    Plats favoris
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {favorites.filter(f => f.type === "dish").length > 0 ? (
                    <div className="space-y-3">
                      {favorites
                        .filter(f => f.type === "dish")
                        .map((fav, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Heart className="h-5 w-5 fill-secondary text-secondary" />
                              <span className="font-medium">{fav.name}</span>
                            </div>
                            <Link to="/gastronomie">
                              <Button variant="ghost" size="sm">
                                Voir
                              </Button>
                            </Link>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <UtensilsCrossed className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Aucun plat favori</p>
                      <Link to="/gastronomie">
                        <Button variant="link" className="mt-2">
                          Découvrir la gastronomie
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Événements auxquels je participe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {events.length > 0 ? (
                    <div className="space-y-3">
                      {events.map((event, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div>
                            <h3 className="font-medium mb-1">{event.name}</h3>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                          </div>
                          <Link to="/evenements">
                            <Button variant="ghost" size="sm">
                              Détails
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Aucun événement prévu</p>
                      <Link to="/evenements">
                        <Button variant="link" className="mt-2">
                          Découvrir les événements
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profil;
