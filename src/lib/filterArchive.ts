import type { ArchiveTag, TagFilter } from '../data/archive'

export function filterArchive<T extends { tag: ArchiveTag }>(
  items: readonly T[],
  filter: TagFilter,
): T[] {
  if (filter === 'all') return [...items]
  return items.filter((item) => item.tag === filter)
}
