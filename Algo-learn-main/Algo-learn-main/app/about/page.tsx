"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Lightbulb, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Nous nous efforçons de fournir le meilleur contenu éducatif et l'expérience d'apprentissage la plus efficace.",
    },
    {
      icon: Users,
      title: "Communauté",
      description:
        "Nous construisons une communauté bienveillante où les étudiants et les enseignants collaborent et s'entraident.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Nous innovons constamment pour rendre l'apprentissage de l'algorithmique plus accessible et engageant.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Nous avons la passion pour l'éducation et pour aider chaque étudiant à réussir dans son parcours.",
    },
  ]

  const team = [
    {
      name: "Dr. Martin Dupont",
      role: "Fondateur & PDG",
      bio: "Expert en algorithmique avec 15 ans d'expérience",
      image: "/placeholder.svg?key=d7q7q",
    },
    {
      name: "Prof. Sarah Johnson",
      role: "Directrice Pédagogique",
      bio: "Spécialiste en conception de curriculum et pédagogie interactive",
      image: "/placeholder.svg?key=n3gaa",
    },
    {
      name: "Jean-Pierre Leclerc",
      role: "Responsable Technique",
      bio: "Ingénieur logiciel passionné par l'éducation technologique",
      image: "/placeholder.svg?key=m9kka",
    },
    {
      name: "Anne Marie Guilbaud",
      role: "Responsable Communauté",
      bio: "Créatrice de contenu et animatrice de la communauté AlgoLearn",
      image: "/placeholder.svg?key=p7lla",
    },
  ]

  const milestones = [
    { year: "2020", event: "Fondation d'AlgoLearn" },
    { year: "2021", event: "Lancement de la première série de cours" },
    { year: "2022", event: "Atteinte de 10,000 utilisateurs" },
    { year: "2023", event: "Expansion internationale en 5 pays" },
    { year: "2024", event: "Déploiement des exercices interactifs" },
    { year: "2025", event: "Lancement du programme de certificats" },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 border-b border-border bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                À Propos d'AlgoLearn
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Nous sommes passionnés par l'éducation et nous sommes déterminés à démocratiser l'accès à
                l'apprentissage de l'algorithmique pour tous.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Notre Mission</h2>
                <p className="text-muted-foreground mb-4">
                  AlgoLearn a été créée avec une vision claire : rendre l'apprentissage de l'algorithmique accessible à
                  tous. Nous croyons que chacun a le potentiel d'exceller en programmation avec les bons outils et le
                  bon soutien.
                </p>
                <p className="text-muted-foreground mb-6">
                  Notre plateforme offre une expérience d'apprentissage complète, du débutant absolu au programmeur
                  avancé, avec des cours structurés, des exercices interactifs, et une communauté bienveillante.
                </p>
                <Link href="/courses">
                  <Button gap-2>
                    Explorer nos Cours
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-muted rounded-lg h-96" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Nos Valeurs</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ces quatre piliers guident chaque décision que nous prenons chez AlgoLearn
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Notre Équipe</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Une équipe d'experts passionnés par l'éducation et la technologie
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-muted mb-4 rounded-t-lg" />
                  <div className="p-6">
                    <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Notre Parcours</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Découvrez les étapes clés de notre évolution
            </p>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                    </div>
                  </div>
                  <Card className="flex-grow p-6">
                    <h3 className="font-bold text-foreground text-lg">{milestone.year}</h3>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Rejoignez Notre Communauté</h2>
            <p className="text-primary-foreground/90 mb-8 text-balance">
              Commencez votre voyage vers la maîtrise de l'algorithmique dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" variant="secondary" className="gap-2">
                  Voir les Cours
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
