// Logo officiel SPL (fichier fourni). `full` : logo complet ; sinon : emblème seul (recadrage).
const src = `${import.meta.env.BASE_URL}Logo.png`

export default function Logo({ full = false, className = '' }: { full?: boolean; animated?: boolean; className?: string }) {
  const alt = 'SPL – Société de Personnalisation de Logiciels Informatiques'
  if (full) return <img src={src} alt={alt} width={440} height={440} className={`object-contain mix-blend-lighten ${className}`} />
  return <div role="img" aria-label={alt} className="h-[72px] w-[150px] shrink-0 mix-blend-lighten" style={{ backgroundImage: `url(${src})`, backgroundSize: '188px 188px', backgroundPosition: '-17px -27px' }} />
}