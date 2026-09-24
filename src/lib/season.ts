const YEAR_MONTH = /^(\d{4})-(0[1-9]|1[0-2])$/

// House rule: Jan–Jun ships as Spring/Summer, Jul–Dec as Fall/Winter.
export function toSeason(yearMonth: string): string {
  const match = YEAR_MONTH.exec(yearMonth)
  if (!match) {
    throw new Error(`toSeason: expected "YYYY-MM", received "${yearMonth}"`)
  }
  const [, year, month] = match
  const half = Number(month) <= 6 ? 'SS' : 'FW'
  return `${half}${year.slice(2)}`
}
