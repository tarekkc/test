"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "general",
        message: "",
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Envoyez-nous un email",
      contact: "support@algolearn.com",
      href: "mailto:support@algolearn.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "Appelez-nous du lundi au vendredi",
      contact: "+33 (0)1 23 45 67 89",
      href: "tel:+33123456789",
    },
    {
      icon: MapPin,
      title: "Adresse",
      description: "Visitez notre bureau",
      contact: "123 Rue de l'Algorithmique, Paris",
      href: "#",
    },
  ]

  const categories = ["Feedback Général", "Problème Technique", "Demande de Cours", "Collaboration", "Autre"]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Nous Contacter</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Vous avez une question ou un feedback ? Nous aimerions vous entendre. Contactez-nous aujourd'hui.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                    <a href={info.href} className="text-primary font-semibold hover:underline">
                      {info.contact}
                    </a>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Message */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Merci !</h3>
                      <p className="text-muted-foreground">
                        Votre message a été reçu. Nous vous répondrons dès que possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          Nom Complet
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom"
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre.email@example.com"
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                          Sujet
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Le sujet de votre message"
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      {/* Category Field */}
                      <div>
                        <label htmlFor="category" className="block text-sm font-semibold text-foreground mb-2">
                          Catégorie
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat.toLowerCase()}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tapez votre message ici..."
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button className="w-full gap-2" size="lg">
                        <Send className="w-4 h-4" />
                        Envoyer le Message
                      </Button>
                    </form>
                  )}
                </Card>
              </div>

              {/* FAQ & Info */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex gap-3">
                    <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Temps de Réponse</h3>
                      <p className="text-sm text-muted-foreground">
                        Nous répondons généralement dans les 24 heures pendant les jours ouvrables.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4">Questions Fréquentes</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        Comment créer un compte ?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        Comment s'inscrire à un cours ?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        Comment obtenir un certificat ?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">
                        Politique de remboursement
                      </a>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-accent/5 border-accent/20">
                  <h3 className="font-bold text-foreground mb-2">Horaires d'Ouverture</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Lun - Ven: 9h00 - 18h00</p>
                    <p>Sam: 10h00 - 16h00</p>
                    <p>Dim: Fermé</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
