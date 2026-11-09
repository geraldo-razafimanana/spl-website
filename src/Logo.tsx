// Logos officiels SPL (fichiers dans public/, noms en minuscules).
// `full` : logo complet (logo.png), utilisé dans le hero.
// Sinon : logo de la barre du haut et du pied de page (logo1.png).
const base = import.meta.env.BASE_URL
const fullSrc = `${base}logo.png`
const barSrc = `${base}logo1.png`

type Props = { full?: boolean; animated?: boolean; className?: string }

export default function Logo({ full = false, className = '' }: Props) {
  const alt = 'SPL – Société de Personnalisation de Logiciels Informatiques'

  if (full) {
    return (
      <img
        src={fullSrc}
        alt={alt}
        width={400}
        height={400}
        className={`object-contain mix-blend-lighten ${className}`}
      />
    )
  }

  return (
    <img
      src={barSrc}
      alt={alt}
      className={`h-12 w-auto shrink-0 mix-blend-lighten ${className}`}
    />
  )
}