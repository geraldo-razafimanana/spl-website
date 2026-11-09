const TBD = <span className="text-cyan">à renseigner</span>
export default function Legal() {
  const S = ({ t, children }: { t: string; children: React.ReactNode }) => <section className="mt-10"><h2 className="font-display text-2xl font-semibold text-white">{t}</h2><div className="mt-3 space-y-2 text-mist/80">{children}</div></section>
  return (
    <section className="bg-night py-16"><div className="mx-auto max-w-3xl px-5">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Informations légales</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-white">Mentions légales</h1>
      <S t="Éditeur du site"><p>SPL – Société de Personnalisation de Logiciels Informatiques</p>
        <p>Forme juridique : {TBD}</p><p>Siège social : {TBD}</p><p>Numéro d’identification (NIF / STAT / RCS) : {TBD}</p><p>Directeur de la publication : {TBD}</p><p>Contact : {TBD}</p></S>
      <S t="Hébergement"><p>Hébergeur : {TBD}</p></S>
      <S t="Propriété intellectuelle"><p>Le logo, les textes, les visuels et le code de ce site sont la propriété de SPL, sauf mention contraire. Toute reproduction sans autorisation écrite préalable est interdite.</p></S>
      <S t="Données personnelles"><p>Les informations saisies dans le formulaire de contact servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers. Pour demander l’accès, la correction ou la suppression de vos données, contactez SPL : {TBD}.</p></S>
      <p className="mt-10 border-l-2 border-electric pl-4 text-sm text-mist/60">Les champs marqués « à renseigner » doivent être complétés et validés par SPL avant la mise en ligne.</p>
    </div></section>
  )
}
