"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Mail, Calendar, Award, BookOpen, CheckCircle, TrendingUp, Settings } from "lucide-react"

export default function ProfilePage() {
  const student = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    joinDate: "15 Mars 2023",
    avatar: "/student-avatar.jpg",
    coursesEnrolled: 12,
    coursesCompleted: 5,
    exercisesAttempted: 145,
    exercisesSolved: 89,
    totalPoints: 3450,
  }

  const progressData = [
    { month: "Jan", exercises: 12, courses: 2 },
    { month: "Fév", exercises: 19, courses: 3 },
    { month: "Mar", exercises: 15, courses: 1 },
    { month: "Avr", exercises: 28, courses: 4 },
    { month: "Mai", exercises: 35, courses: 5 },
    { month: "Juin", exercises: 42, courses: 6 },
  ]

  const enrolledCourses = [
    { id: 1, title: "Introduction à l'Algorithmique", progress: 100, status: "completed" },
    { id: 2, title: "Structures de Données", progress: 75, status: "in-progress" },
    { id: 3, title: "Algorithmes de Tri et Recherche", progress: 60, status: "in-progress" },
    { id: 4, title: "Programmation Dynamique", progress: 40, status: "in-progress" },
    { id: 5, title: "Graphes et Algorithmes", progress: 25, status: "in-progress" },
  ]

  const badges = [
    { icon: "⭐", title: "Débutant", description: "Complétez votre premier cours" },
    { icon: "🏆", title: "Maître Algorithmique", description: "Complétez 5 cours" },
    { icon: "🔥", title: "Streak de 30 Jours", description: "Praquez 30 jours consécutifs" },
    { icon: "💡", title: "Solutionneur", description: "Résolvez 50 exercices" },
    { icon: "🚀", title: "Expert", description: "Atteindre 1000 points" },
    { icon: "📊", title: "Analyste", description: "Analyser vos progrès régulièrement" },
  ]

  const achievements = badges.slice(0, 4)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header Section with Profile */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Profile Card */}
              <Card className="md:col-span-1 p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src={student.avatar || "/placeholder.svg"}
                    alt={student.name}
                    className="w-24 h-24 rounded-full bg-muted"
                  />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">{student.name}</h1>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{student.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Membre depuis {student.joinDate}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6 gap-2 bg-transparent">
                  <Settings className="w-4 h-4" />
                  Paramètres
                </Button>
              </Card>

              {/* Stats Grid */}
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{student.coursesCompleted}</p>
                  <p className="text-sm text-muted-foreground">Cours Complétés</p>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{student.exercisesSolved}</p>
                  <p className="text-sm text-muted-foreground">Exercices Résolus</p>
                </Card>
                <Card className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{student.totalPoints}</p>
                  <p className="text-sm text-muted-foreground">Points Totaux</p>
                </Card>
                <Card className="p-6 text-center">
                  <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">4</p>
                  <p className="text-sm text-muted-foreground">Badges Obtenus</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Charts Section */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Votre Progression</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Exercise Progress */}
              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-6">Exercices Résolus par Mois</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="exercises" fill="var(--color-primary)" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Course Enrollment Progress */}
              <Card className="p-6">
                <h3 className="font-bold text-foreground mb-6">Activité Mensuelle</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="courses" stroke="var(--color-accent)" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Courses */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Mes Cours</h2>

            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex-grow">
                      <h3 className="font-bold text-foreground">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {course.status === "completed" ? "Complété" : "En cours"}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-2xl font-bold text-primary">{course.progress}%</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Réalisations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((badge, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{badge.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">Voir Tous les Badges</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
