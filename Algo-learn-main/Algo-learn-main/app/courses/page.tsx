"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookOpen, Clock, Users, ArrowRight, Star } from "lucide-react"

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState("all")

  const courses = [
    {
      id: 1,
      title: "Introduction à l'Algorithmique",
      description: "Les concepts fondamentaux de l'algorithmique et de la programmation",
      level: "beginner",
      duration: "4 semaines",
      students: "2,500+",
      rating: 4.8,
      chapters: 8,
      instructor: "Dr. Martin Dupont",
      image: "/algorithm-basics-course.jpg",
    },
    {
      id: 2,
      title: "Structures de Données",
      description: "Tableaux, listes chaînées, piles, files et arbres binaires",
      level: "intermediate",
      duration: "6 semaines",
      students: "1,800+",
      rating: 4.9,
      chapters: 12,
      instructor: "Prof. Sarah Johnson",
      image: "/data-structures-course.png",
    },
    {
      id: 3,
      title: "Algorithmes de Tri et Recherche",
      description: "Maîtrisez les algorithmes classiques de tri et recherche",
      level: "intermediate",
      duration: "5 semaines",
      students: "1,500+",
      rating: 4.7,
      chapters: 10,
      instructor: "Prof. Jean-Pierre Leclerc",
      image: "/sorting-algorithms.png",
    },
    {
      id: 4,
      title: "Programmation Dynamique",
      description: "Résoudre les problèmes complexes avec la programmation dynamique",
      level: "advanced",
      duration: "7 semaines",
      students: "900+",
      rating: 4.9,
      chapters: 14,
      instructor: "Dr. Michel Bernard",
      image: "/dynamic-programming-concept.png",
    },
    {
      id: 5,
      title: "Graphes et Algorithmes de Graphes",
      description: "Comprendre les graphes et les algorithmes de parcours de graphes",
      level: "advanced",
      duration: "8 semaines",
      students: "750+",
      rating: 4.8,
      chapters: 16,
      instructor: "Prof. Anne Marie Guilbaud",
      image: "/graph-algorithms.png",
    },
    {
      id: 6,
      title: "Optimisation et Algorithmique Avancée",
      description: "Techniques avancées d'optimisation et résolution de problèmes NP-complets",
      level: "advanced",
      duration: "8 semaines",
      students: "600+",
      rating: 4.9,
      chapters: 18,
      instructor: "Dr. Laurent Moreau",
      image: "/advanced-algorithms.jpg",
    },
  ]

  const filteredCourses = selectedLevel === "all" ? courses : courses.filter((c) => c.level === selectedLevel)

  const levelLabels = {
    all: "Tous les niveaux",
    beginner: "Débutant",
    intermediate: "Intermédiaire",
    advanced: "Avancé",
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Nos Cours</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Explorez notre collection complète de cours sur l'algorithmique et la programmation en C. Du débutant à
                l'expert, nous avons un cours pour vous.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-semibold text-foreground mb-4">Filtrer par niveau</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(levelLabels).map(([key, label]) => (
                <Button
                  key={key}
                  variant={selectedLevel === key ? "default" : "outline"}
                  onClick={() => setSelectedLevel(key)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  {/* Course Image */}
                  <div className="h-40 bg-muted relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Course Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          course.level === "beginner"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : course.level === "intermediate"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        }`}
                      >
                        {course.level === "beginner"
                          ? "Débutant"
                          : course.level === "intermediate"
                            ? "Intermédiaire"
                            : "Avancé"}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{course.description}</p>

                    {/* Instructor */}
                    <p className="text-xs text-muted-foreground mb-4">Par {course.instructor}</p>

                    {/* Course Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center text-sm">
                      <div>
                        <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-muted-foreground">{course.duration}</p>
                      </div>
                      <div>
                        <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-muted-foreground">{course.students}</p>
                      </div>
                      <div>
                        <BookOpen className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-muted-foreground">{course.chapters} cours</p>
                      </div>
                    </div>

                    {/* Enroll Button */}
                    <Button className="w-full gap-2">
                      S'inscrire
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Aucun cours trouvé pour ce niveau.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
