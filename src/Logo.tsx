// Logo officiel SPL (fichier fourni : public/Logo.png).
// `full` : logo complet (hero). Sinon : emblème seul, recadré (en-tête et pied de page).
const src = `${import.meta.env.BASE_URL}Logo.png`

// Réglages de l'emblème (à ajuster selon ton PNG)
const SIZE = 150 // largeur de l'image entière en px : baisse pour réduire le logo
const X = -12    // décalage horizontal : plus négatif = déplace vers la gauche
const Y = -18    // décalage vertical : plus négatif = déplace vers le haut

type Props = { full?: boolean; animated?: boolean; className?: string }

export default function Logo({ full = false, className = '' }: Props) {
  const alt = 'SPL – Société de Personnalisation de Logiciels Informatiques'

  if (full) {
    return (
      <img
        src={src}
        alt={alt}
        width={440}
        height={440}
        className={`object-contain mix-blend-lighten ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className="h-[72px] w-[150px] shrink-0 mix-blend-lighten"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `${SIZE}px auto`,
        backgroundPosition: `${X}px ${Y}px`,
        backgroundRepeat: 'no-repeat',
      }}
    />
  )
}