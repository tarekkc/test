"use client"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">AlgoLearn</h3>
            <p className="text-sm text-muted-foreground">
              Plateforme éducative pour apprendre l'algorithmique en langage C
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-primary">
                  Cours
                </a>
              </li>
              <li>
                <a href="/exercises" className="hover:text-primary">
                  Exercices
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-primary">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AlgoLearn. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
