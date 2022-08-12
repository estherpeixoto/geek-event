import { ReactNode } from 'react'

export type AdminHeaderProps = {
  title?: string
  description?: ReactNode
  actions?: ReactNode
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
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          {props.header.description}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex lg:mt-0 lg:ml-4">{props.header.actions}</div>
    </div>
  )
}
