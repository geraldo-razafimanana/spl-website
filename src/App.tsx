import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Check, Menu, X, Search, PencilRuler, LifeBuoy } from 'lucide-react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Legal from './Legal'
import { nav, services, steps, cats, works, why, projectTypes } from './data'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
const Eyebrow = ({ children }: { children: ReactNode }) => <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{children}</p>
const H2 = ({ children }: { children: ReactNode }) => <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-white md:text-4xl">{children}</h2>

function Header() {
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false)
  useEffect(() => { const f = () => setSolid(scrollY > 24); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? 'bg-night/95 shadow-[0_1px_0_#061A3A]' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <A href="/" aria-label="SPL – accueil"><Logo /></A>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {nav.map(([l, h]) => <A key={h} href={h} className="text-sm text-mist/80 transition-colors hover:text-cyan">{l}</A>)}
          <A href="/contact" className="rounded-sm bg-electric px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan hover:text-night active:scale-95">Discutons de votre projet</A>
        </nav>
        <button className="p-2 lg:hidden" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <nav className="min-h-0 overflow-hidden px-5">
          <div className="flex flex-col gap-1 pb-5">
            {nav.map(([l, h]) => <A key={h} href={h} onClick={() => setOpen(false)} className="border-b border-navy py-3 text-mist">{l}</A>)}
            <A href="/contact" onClick={() => setOpen(false)} className="mt-3 rounded-sm bg-electric px-4 py-3 text-center font-semibold text-white">Discutons de votre projet</A>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-night pt-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-24 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>Vos processus, notre solution</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl">Vos idées méritent des solutions informatiques sur mesure.</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/80">SPL accompagne les entreprises dans leur transformation numérique grâce à des solutions logicielles personnalisées, adaptées à leurs besoins et à leurs processus métiers.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <A href="/services" className="inline-flex items-center gap-2 rounded-sm bg-electric px-5 py-3 font-semibold text-white transition hover:bg-cyan hover:text-night active:scale-95">Découvrir nos solutions <ArrowRight size={18} /></A>
            <A href="/contact" className="rounded-sm border border-cyan px-5 py-3 font-semibold text-cyan transition hover:bg-cyan hover:text-night active:scale-95">Parlons de votre projet</A>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
          <Logo full animated className="relative h-full w-full" />
        </div>
      </div>
    </section>
  )
}

function About() {
  const p = [[Search, 'Comprendre', 'Analyser les besoins et les processus de chaque client.'], [PencilRuler, 'Concevoir', 'Imaginer des solutions adaptées aux réalités opérationnelles.'], [LifeBuoy, 'Accompagner', 'Assurer un suivi et faire évoluer les solutions.']] as const
  return (
    <section id="a-propos" className="bg-navy py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>À propos</Eyebrow><H2>Nous transformons vos besoins en solutions concrètes.</H2>
          <p className="mt-5 leading-relaxed text-mist/80">SPL est spécialisée dans la conception, le développement et la personnalisation de solutions informatiques. Nous adaptons le logiciel à l’organisation, et non l’inverse.</p>
        </Reveal>
        <ol className="space-y-0 border-l border-electric/60">
          {p.map(([I, t, d], i) => (
            <Reveal key={t}><li className="relative pb-8 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-cyan" />
              <div className="flex items-center gap-3"><I className="text-cyan" size={22} /><h3 className="font-display text-xl font-semibold text-white">{i + 1}. {t}</h3></div>
              <p className="mt-1 text-mist/75">{d}</p>
            </li></Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-night py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><Eyebrow>Nos services</Eyebrow><H2>Ce que nous réalisons pour vous.</H2></Reveal>
        <div className="mt-12 grid border-t border-navy md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: I, t, d, l }) => (
            <Reveal key={t}><article className="group h-full border-b border-navy p-7 transition-colors hover:bg-navy md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
              <I className="text-cyan transition-transform group-hover:-translate-y-0.5" size={30} strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{t}</h3>
              <p className="mt-1 text-sm text-mist/70">{d}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-mist/85">{l.map(x => <li key={x} className="flex gap-2"><span className="mt-2 h-1 w-3 shrink-0 bg-electric" />{x}</li>)}</ul>
            </article></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approche" className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><Eyebrow>Notre approche</Eyebrow><H2>Une solution pensée autour de votre réalité.</H2></Reveal>
        <ol className="relative mt-12 grid gap-8 lg:grid-cols-5 lg:gap-5">
          <span aria-hidden className="absolute left-[19px] top-2 h-full w-px bg-electric/50 lg:left-0 lg:top-[19px] lg:h-px lg:w-full" />
          {steps.map(([n, t, d]) => (
            <Reveal key={n}><li className="relative pl-14 lg:pl-0 lg:pt-14">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-night font-display text-lg font-bold text-cyan ring-1 ring-electric">{n}</span>
              <h3 className="font-display text-lg font-semibold text-white">{t}</h3>
              <p className="mt-1 text-sm text-mist/75">{d}</p>
            </li></Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Works() {
  const [f, setF] = useState<string>('Toutes')
  const list = works.filter(w => f === 'Toutes' || w.c === f)
  return (
    <section id="realisations" className="bg-night py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><Eyebrow>Nos réalisations</Eyebrow><H2>Des projets à votre image.</H2></Reveal>
        <div role="group" aria-label="Filtrer les réalisations" className="mt-8 flex flex-wrap gap-2">
          {cats.map(c => <button key={c} aria-pressed={f === c} onClick={() => setF(c)} className={`rounded-sm border px-3 py-1.5 text-sm transition active:scale-95 ${f === c ? 'border-cyan bg-cyan text-night' : 'border-navy text-mist/80 hover:border-electric'}`}>{c}</button>)}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map(w => (
            <article key={w.n} className="border border-navy bg-navy/40">
              <div className="flex aspect-[16/9] items-center justify-center border-b border-navy bg-navy text-xs uppercase tracking-widest text-mist/50">Capture à ajouter</div>
              <div className="p-5">
                <span className="inline-block bg-electric/15 px-2 py-0.5 text-xs font-semibold text-cyan">Contenu de démonstration</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{w.n}</h3>
                <p className="mt-1 text-sm text-mist/75">{w.d}</p>
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm"><dt className="text-mist/50">Domaine</dt><dd>{w.dom}</dd><dt className="text-mist/50">Technologies</dt><dd>{w.tech}</dd></dl>
              </div>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="mt-8 text-mist/70">Aucune réalisation dans cette catégorie pour le moment.</p>}
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal><Eyebrow>Pourquoi choisir SPL ?</Eyebrow><H2>Ce qui guide notre façon de travailler.</H2></Reveal>
        <ul className="mt-10 divide-y divide-night border-y border-night">
          {why.map(([t, d]) => <Reveal key={t}><li className="grid gap-1 py-5 md:grid-cols-[1fr_1.4fr] md:gap-8"><h3 className="flex items-center gap-3 font-display text-xl font-semibold text-white"><Check className="text-cyan" size={20} />{t}</h3><p className="text-mist/75">{d}</p></li></Reveal>)}
        </ul>
      </div>
    </section>
  )
}

type F = { nom: string; email: string; tel: string; ent: string; type: string; msg: string }
function Contact() {
  const [v, setV] = useState<F>({ nom: '', email: '', tel: '', ent: '', type: '', msg: '' })
  const [err, setErr] = useState<Partial<Record<keyof F, string>>>({})
  const [st, setSt] = useState<'idle' | 'loading' | 'ok' | 'fail'>('idle')
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
  const set = (k: keyof F) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value })
  async function submit(e: FormEvent) {
    e.preventDefault()
    const x: typeof err = {}
    if (v.nom.trim().length < 2) x.nom = 'Indiquez votre nom complet.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) x.email = 'Indiquez une adresse e-mail valide.'
    if (v.tel && !/^[+\d\s().-]{6,20}$/.test(v.tel)) x.tel = 'Numéro de téléphone invalide.'
    if (!v.type) x.type = 'Choisissez un type de projet.'
    if (v.msg.trim().length < 20) x.msg = 'Décrivez votre besoin en quelques phrases (20 caractères minimum).'
    setErr(x); if (Object.keys(x).length) return
    if (!endpoint) { setSt('fail'); return }
    setSt('loading')
    try {
      const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ nom: v.nom, email: v.email, telephone: v.tel, entreprise: v.ent, type_projet: v.type, message: v.msg }) })
      if (!r.ok) throw new Error(); setSt('ok')
    } catch { setSt('fail') }
  }
  const field = 'mt-1 w-full rounded-sm border border-navy bg-night px-3 py-2.5 text-white placeholder:text-mist/40 focus:border-cyan focus:outline-none'
  const E = ({ k }: { k: keyof F }) => err[k] ? <p id={`e-${k}`} role="alert" className="mt-1 text-sm text-[#FF8A8A]">{err[k]}</p> : null
  return (
    <section id="contact" className="bg-night py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Eyebrow>Contact</Eyebrow><H2>Donnons vie à votre prochain projet.</H2>
          <dl className="mt-8 space-y-4 text-sm">
            {[['Adresse', 'À renseigner'], ['Téléphone', 'À renseigner'], ['E-mail', 'À renseigner'], ['Réseaux sociaux', 'À renseigner']].map(([a, b]) => <div key={a} className="flex gap-4 border-b border-navy pb-3"><dt className="w-32 text-mist/50">{a}</dt><dd>{b}</dd></div>)}
          </dl>
        </Reveal>
        {st === 'ok' ? (
          <div role="status" className="self-start border border-cyan p-8"><Check className="text-cyan" /><h3 className="mt-3 font-display text-2xl font-semibold text-white">Message envoyé</h3><p className="mt-2 text-mist/80">Merci {v.nom.split(' ')[0]}, nous vous répondrons dans les meilleurs délais.</p></div>
        ) : (
          <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">Nom complet *<input className={field} value={v.nom} onChange={set('nom')} autoComplete="name" aria-invalid={!!err.nom} aria-describedby="e-nom" /><E k="nom" /></label>
            <label>Adresse e-mail *<input type="email" className={field} value={v.email} onChange={set('email')} autoComplete="email" aria-invalid={!!err.email} aria-describedby="e-email" /><E k="email" /></label>
            <label>Téléphone (facultatif)<input type="tel" className={field} value={v.tel} onChange={set('tel')} autoComplete="tel" aria-describedby="e-tel" /><E k="tel" /></label>
            <label>Entreprise (facultatif)<input className={field} value={v.ent} onChange={set('ent')} autoComplete="organization" /></label>
            <label>Type de projet *<select className={field} value={v.type} onChange={set('type')} aria-invalid={!!err.type} aria-describedby="e-type"><option value="">Sélectionner…</option>{projectTypes.map(t => <option key={t}>{t}</option>)}</select><E k="type" /></label>
            <label className="sm:col-span-2">Description du besoin *<textarea rows={5} className={field} value={v.msg} onChange={set('msg')} aria-invalid={!!err.msg} aria-describedby="e-msg" /><E k="msg" /></label>
            <div className="sm:col-span-2">
              <button disabled={st === 'loading'} className="rounded-sm bg-electric px-6 py-3 font-semibold text-white transition hover:bg-cyan hover:text-night active:scale-95 disabled:opacity-60">{st === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}</button>
              {st === 'fail' && <p role="alert" className="mt-3 text-sm text-[#FF8A8A]">{endpoint ? 'L’envoi a échoué. Réessayez dans un instant.' : 'Le service d’envoi n’est pas configuré (variable VITE_FORM_ENDPOINT).'}</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-navy bg-night pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4">
        <div className="md:col-span-1"><Logo /><p className="mt-3 text-sm text-mist/70">Société de Personnalisation de Logiciels Informatiques. Nous concevons des solutions adaptées à vos processus.</p></div>
        <div><h3 className="font-display text-lg text-white">Navigation</h3><ul className="mt-3 space-y-2 text-sm text-mist/75">{nav.map(([l, h]) => <li key={h}><A href={h} className="hover:text-cyan">{l}</A></li>)}</ul></div>
        <div><h3 className="font-display text-lg text-white">Services</h3><ul className="mt-3 space-y-2 text-sm text-mist/75">{services.map(s => <li key={s.t}><A href="/services" className="hover:text-cyan">{s.t}</A></li>)}</ul></div>
        <div><h3 className="font-display text-lg text-white">Coordonnées</h3><p className="mt-3 text-sm text-mist/75">Adresse, téléphone, e-mail et réseaux sociaux : à renseigner.</p></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-navy px-5 py-6 text-sm text-mist/60 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} SPL. Tous droits réservés. · <A href="/mentions-legales" className="underline hover:text-cyan">Mentions légales</A></p>
        <p className="font-display tracking-wide text-cyan">Vos processus, notre solution</p>
      </div>
    </footer>
  )
}

function A({ href = '', ...p }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { pathname } = useLocation()
  return href.startsWith('/') ? <Link to={href} aria-current={pathname === href ? 'page' : undefined} {...(p as object)} /> : <a href={href} {...p} />
}
const titles: Record<string, string> = { '/': 'SPL – Solutions logicielles sur mesure', '/a-propos': 'À propos – SPL', '/services': 'Nos services – SPL', '/realisations': 'Nos réalisations – SPL', '/approche': 'Notre approche – SPL', '/contact': 'Contact – SPL', '/mentions-legales': 'Mentions légales – SPL' }
function Route_() { const { pathname } = useLocation(); useEffect(() => { scrollTo(0, 0); document.title = titles[pathname] ?? 'SPL' }, [pathname]); return null }
const Page = ({ children }: { children: ReactNode }) => <div className="pt-[72px]">{children}</div>
function Cta() {
  return <section className="bg-navy py-16"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
    <h2 className="max-w-xl font-display text-2xl font-bold text-white md:text-3xl">Un processus à simplifier ? Parlons-en.</h2>
    <A href="/contact" className="inline-flex items-center gap-2 rounded-sm bg-electric px-5 py-3 font-semibold text-white transition hover:bg-cyan hover:text-night active:scale-95">Discutons de votre projet <ArrowRight size={18} /></A></div></section>
}
export default function App() {
  return (
    <BrowserRouter><Route_ /><Header />
      <main><Routes>
        <Route path="/" element={<><Hero /><Services /><Cta /></>} />
        <Route path="/a-propos" element={<Page><About /><Why /></Page>} />
        <Route path="/services" element={<Page><Services /><Cta /></Page>} />
        <Route path="/realisations" element={<Page><Works /><Cta /></Page>} />
        <Route path="/approche" element={<Page><Approach /><Cta /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="/mentions-legales" element={<Page><Legal /></Page>} />
        <Route path="*" element={<Page><section className="py-24 text-center"><h1 className="font-display text-4xl text-white">Page introuvable</h1><A href="/" className="mt-6 inline-block text-cyan underline">Retour à l’accueil</A></section></Page>} />
      </Routes></main><Footer /></BrowserRouter>
  )
}
