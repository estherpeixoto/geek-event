import { ReactNode, RefObject } from 'react'
import { AgGridReact } from 'ag-grid-react'
/* import { SearchIcon } from '@heroicons/react/outline' */

type SearchBarProps = {
  show: boolean
}

export type AdminHeaderProps = {
  title?: string
  description?: ReactNode
  actions?: ReactNode
  searchBar?: SearchBarProps
  gridRef: RefObject<AgGridReact<any>>
}

type HeaderProps = {
  header: AdminHeaderProps
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {props.header.title}
        </h2>

        {/* Descriptions */}
        <div className="flex flex-col mt-1 sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          {props.header.description}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 mt-5 lg:mt-0 lg:ml-4">
        {typeof props.header.searchBar != 'undefined' ? (
          props.header.searchBar.show ? (
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search..."
              className="border-gray-300 rounded-md shadow-sm sm:max-w-xs focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onInput={() => {
                props.header.gridRef.current!.api.setQuickFilter(
                  (document.getElementById('search') as HTMLInputElement).value
                )
              }}
            />
          ) : null
        ) : null}
        {props.header.actions}
      </div>
    </div>
  )
}
