const FAKE_LOCAL = /^(test|tests|testing|fake|faux|exemple|example|demo|abc|abcd|azerty|qwerty|asdf|asdfg|admin|noreply|no-reply|none|null)\d*$/i
const REPEAT = /(.)\1{3,}/ // 4 mêmes caractères à la suite : kkkkk, aaaa…
const FAKE_DOMAINS = ['example.com', 'example.org', 'test.com', 'test.fr', 'mailinator.com', 'yopmail.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com', 'trashmail.com', 'sharklasers.com', 'fakeinbox.com']

export function localCheck(email: string): string | null {
  const [local, domain] = email.toLowerCase().split('@')
  if (!local || !domain) return 'Adresse e-mail invalide.'
  if (FAKE_DOMAINS.includes(domain)) return 'Cette adresse semble temporaire ou fictive. Utilisez votre vraie adresse.'
  if (FAKE_LOCAL.test(local) || REPEAT.test(local)) return 'Cette adresse semble fictive. Utilisez votre vraie adresse.'
  return null
}

// Vérifie que le domaine peut recevoir des e-mails (enregistrement MX).
export async function domainReceivesMail(domain: string): Promise<boolean> {
  try {
    const r = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`, { headers: { accept: 'application/dns-json' } })
    const j = await r.json()
    return j.Status === 0 && Array.isArray(j.Answer) && j.Answer.length > 0
  } catch {
    return true // si la vérification échoue (réseau), on ne bloque pas le visiteur
  }
}