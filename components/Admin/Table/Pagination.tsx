import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

type PaginationProps = {
  rowsPerPage: number
  currentPage: number
  contentLength: number
}

const classes = {
  default: 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
  current: 'z-10 bg-blue-50 border-blue-500 text-blue-600',
}

export const Pagination = ({
  rowsPerPage,
  currentPage,
  contentLength,
}: PaginationProps) => {
  const maxPages = Math.ceil(contentLength / rowsPerPage)
  const minPages = 1

  const renderLinks = () => {
    let linkClass = ''
    let links = []

    for (let i = 1; i <= maxPages; i++) {
      linkClass = classes.default

      if (i === currentPage) {
        linkClass = classes.current
      }

      links.push(
        <Link key={i} href={`?p=${i}`} passHref>
          <a
            aria-current="page"
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border ${linkClass}`}
          >
            {i}
          </a>
        </Link>
      )
    }

    return links
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <Link href={`?p=${currentPage - 1}`} passHref>
          <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Previous
          </a>
        </Link>

        <Link href={`?p=${currentPage + 1}`} passHref>
          <a className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Next
          </a>
        </Link>
      </div>

      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of{' '}
            <span className="font-medium">{maxPages}</span> |{' '}
            <span className="font-medium">{contentLength}</span> results
          </p>
        </div>

        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link href={`?p=${currentPage - 1}`} passHref>
              <a
                className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-l-md hover:bg-gray-50 ${
                  currentPage <= minPages
                    ? 'bg-gray-200 pointer-events-none'
                    : 'bg-white'
                }`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </a>
            </Link>

            {renderLinks()}

            <Link href={`?p=${currentPage + 1}`} passHref>
              <a
                className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-r-md hover:bg-gray-50 ${
                  currentPage >= maxPages
                    ? 'bg-gray-200 pointer-events-none'
                    : 'bg-white'
                }`}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
