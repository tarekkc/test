"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Code2, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/courses", label: "Cours" },
    { href: "/exercises", label: "Exercices" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">AlgoLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant={pathname === link.href ? "default" : "ghost"} className="text-sm">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Profile Button */}
          <Link href="/profile" className="hidden md:block">
            <Button variant="outline" size="sm">
              Mon Profil
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <Button variant={pathname === link.href ? "default" : "ghost"} className="w-full justify-start">
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/profile" onClick={() => setIsOpen(false)} className="block">
              <Button variant="outline" className="w-full bg-transparent">
                Mon Profil
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
