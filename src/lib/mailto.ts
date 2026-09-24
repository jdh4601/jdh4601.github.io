export function buildMailto(to: string, subject: string, body: string): string {
  const params = [
    subject && `subject=${encodeURIComponent(subject)}`,
    body && `body=${encodeURIComponent(body)}`,
  ].filter(Boolean)
  return params.length ? `mailto:${to}?${params.join('&')}` : `mailto:${to}`
}
