import { UlPagination } from '@/styles/components/Pagination'

export default function Pagination({
  items,
  currentPage,
  pageSize,
  onPageChange,
}: any) {
  const pagesCount = Math.ceil(items / pageSize)

  if (pagesCount === 1) return null

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)
  function handleChangePage(page: number) {
    onPageChange(page)
    window.scroll({
      top: 0,
    })
  }

  return (
    <div>
      <UlPagination>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'pageItemActive' : 'pageItem'}
            onClick={() => handleChangePage(page)}
          >
            <a className="pageLink">{page}</a>
          </li>
        ))}
      </UlPagination>
    </div>
  )
}
