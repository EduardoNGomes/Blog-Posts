import { PostProps } from '@/interfaces'

export function paginate(
  items: PostProps[],
  pageNumber: number,
  pageSize: number,
) {
  const startIndex = (pageNumber - 1) * pageSize
  return items.slice(startIndex, startIndex + pageSize)
}
