"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, BookOpen, Code2, Zap, Users, Target } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: "Cours Interactifs",
      description: "Apprenez les concepts fondamentaux de l'algorithmique avec des explications détaillées",
    },
    {
      icon: Code2,
      title: "Exercices Pratiques",
      description: "Pratiquez avec des exercices progressifs en langage C",
    },
    {
      icon: Zap,
      title: "Progression en Temps Réel",
      description: "Suivez votre avancement et visualisez vos progrès",
    },
    {
      icon: Users,
      title: "Communauté Active",
      description: "Échangez avec d'autres étudiants et enseignants",
    },
  ]

  const stats = [
    { label: "Étudiants", value: "5,000+" },
    { label: "Cours", value: "45" },
    { label: "Exercices", value: "500+" },
    { label: "Enseignants", value: "25" },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Bienvenue sur AlgoLearn</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Maîtrisez l'Algorithmique en{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Langage C</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                La plateforme complète pour apprendre l'algorithmique. Des cours structurés aux exercices pratiques,
                tout pour réussir vos études.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/courses">
                  <Button size="lg" className="gap-2">
                    Commencer les Cours
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/exercises">
                  <Button size="lg" variant="outline">
                    Explorer les Exercices
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Pourquoi AlgoLearn ?</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nous offrons une expérience d'apprentissage complète et interactive pour maîtriser l'algorithmique
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Rejoignez des milliers d'étudiants qui apprennent l'algorithmique sur AlgoLearn
            </p>
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="gap-2">
                Accéder aux Cours
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
