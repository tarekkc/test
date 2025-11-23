"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Code2, CheckCircle, AlertCircle, ChevronRight } from "lucide-react"

export default function ExercisesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const exercises = [
    {
      id: 1,
      title: "Calculer la Somme de Deux Nombres",
      category: "basics",
      difficulty: "easy",
      description: "Écrivez un programme pour calculer la somme de deux nombres saisis par l'utilisateur",
      solved: 3420,
      attempts: 5120,
    },
    {
      id: 2,
      title: "Trouver le Plus Grand Nombre",
      category: "basics",
      difficulty: "easy",
      description: "Trouvez le plus grand parmi trois nombres",
      solved: 2890,
      attempts: 3950,
    },
    {
      id: 3,
      title: "Inverser un String",
      category: "strings",
      difficulty: "easy",
      description: "Écrivez un programme pour inverser une chaîne de caractères",
      solved: 2450,
      attempts: 3200,
    },
    {
      id: 4,
      title: "Vérifier si un Nombre est Palindrome",
      category: "numbers",
      difficulty: "medium",
      description: "Déterminez si un nombre est un palindrome",
      solved: 1850,
      attempts: 2780,
    },
    {
      id: 5,
      title: "Implémenter une Pile (Stack)",
      category: "data-structures",
      difficulty: "medium",
      description: "Implémentez une pile avec les opérations push, pop et peek",
      solved: 1620,
      attempts: 2450,
    },
    {
      id: 6,
      title: "Implémenter une Queue (File)",
      category: "data-structures",
      difficulty: "medium",
      description: "Implémentez une file d'attente avec les opérations enqueue et dequeue",
      solved: 1380,
      attempts: 2150,
    },
    {
      id: 7,
      title: "Tri à Bulles",
      category: "sorting",
      difficulty: "medium",
      description: "Implémentez l'algorithme de tri à bulles",
      solved: 1950,
      attempts: 2890,
    },
    {
      id: 8,
      title: "Recherche Binaire",
      category: "search",
      difficulty: "medium",
      description: "Implémentez l'algorithme de recherche binaire sur un tableau trié",
      solved: 1720,
      attempts: 2560,
    },
    {
      id: 9,
      title: "Problème du Sac à Dos (0/1 Knapsack)",
      category: "dynamic-programming",
      difficulty: "hard",
      description: "Résolvez le problème classique du sac à dos avec programmation dynamique",
      solved: 680,
      attempts: 1320,
    },
    {
      id: 10,
      title: "Arbre de Recherche Binaire",
      category: "trees",
      difficulty: "hard",
      description: "Implémentez un arbre de recherche binaire avec recherche et insertion",
      solved: 520,
      attempts: 980,
    },
    {
      id: 11,
      title: "Parcours de Graphe (DFS)",
      category: "graphs",
      difficulty: "hard",
      description: "Implémentez un parcours en profondeur d'un graphe",
      solved: 420,
      attempts: 850,
    },
    {
      id: 12,
      title: "Chemin le Plus Court (Dijkstra)",
      category: "graphs",
      difficulty: "hard",
      description: "Implémentez l'algorithme de Dijkstra pour trouver le chemin le plus court",
      solved: 250,
      attempts: 650,
    },
  ]

  const categories = [
    { value: "all", label: "Tous les types" },
    { value: "basics", label: "Bases" },
    { value: "strings", label: "Chaînes" },
    { value: "numbers", label: "Nombres" },
    { value: "data-structures", label: "Structures" },
    { value: "sorting", label: "Tri" },
    { value: "search", label: "Recherche" },
    { value: "dynamic-programming", label: "Programmation Dynamique" },
    { value: "trees", label: "Arbres" },
    { value: "graphs", label: "Graphes" },
  ]

  const difficulties = [
    { value: "all", label: "Tous les niveaux" },
    { value: "easy", label: "Facile" },
    { value: "medium", label: "Moyen" },
    { value: "hard", label: "Difficile" },
  ]

  const filteredExercises = exercises.filter((ex) => {
    const matchDifficulty = selectedDifficulty === "all" || ex.difficulty === selectedDifficulty
    const matchCategory = selectedCategory === "all" || ex.category === selectedCategory
    return matchDifficulty && matchCategory
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return ""
    }
  }

  const getDifficultyLabel = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "Facile"
      case "medium":
        return "Moyen"
      case "hard":
        return "Difficile"
      default:
        return ""
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Exercices Pratiques</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Entraînez-vous avec nos exercices progressifs. Du simple au complexe, maîtrisez l'algorithmique par la
                pratique.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {/* Difficulty Filter */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Filtrer par niveau</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((d) => (
                  <Button
                    key={d.value}
                    variant={selectedDifficulty === d.value ? "default" : "outline"}
                    onClick={() => setSelectedDifficulty(d.value)}
                    size="sm"
                  >
                    {d.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Filtrer par catégorie</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Button
                    key={c.value}
                    variant={selectedCategory === c.value ? "default" : "outline"}
                    onClick={() => setSelectedCategory(c.value)}
                    size="sm"
                  >
                    {c.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exercises List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {filteredExercises.map((exercise) => (
                <Card
                  key={exercise.id}
                  className="p-6 hover:shadow-md transition-shadow cursor-pointer hover:border-primary/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}
                        >
                          {getDifficultyLabel(exercise.difficulty)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{exercise.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{exercise.solved.toLocaleString()} résolus</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-blue-600" />
                          <span>{exercise.attempts.toLocaleString()} tentatives</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Action */}
                    <div className="flex-shrink-0">
                      <Button className="gap-2 whitespace-nowrap" variant="default">
                        Résoudre
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              {filteredExercises.length === 0 && (
                <div className="text-center py-12">
                  <Code2 className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">Aucun exercice ne correspond à vos filtres.</p>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                {filteredExercises.length} exercice{filteredExercises.length !== 1 ? "s" : ""} trouvé
                {filteredExercises.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
