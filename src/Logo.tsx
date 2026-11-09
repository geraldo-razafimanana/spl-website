// Logo officiel SPL (fichier fourni). `full` : logo complet ; sinon : emblème seul (recadrage).
export default function Logo({ full = false, className = '' }: { full?: boolean; animated?: boolean; className?: string }) {
  const alt = 'SPL – Société de Personnalisation de Logiciels Informatiques'
  if (full) return <img src="/logo.jpg" alt={alt} width={440} height={440} className={`object-contain mix-blend-lighten ${className}`} />
  return <div role="img" aria-label={alt} className="h-[72px] w-[150px] shrink-0 mix-blend-lighten" style={{ backgroundImage: 'url(/logo.jpg)', backgroundSize: '188px 188px', backgroundPosition: '-17px -27px' }} />
}
