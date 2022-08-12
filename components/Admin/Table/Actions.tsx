import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  LinkIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/outline'

// Utils
import { classNames } from 'utils/functions'

type ActionsProps = { baseUrl: string; id: string; buttons?: string[] }

const actionsWidth = { 1: 'md:w-24', 2: 'md:w-44', 3: 'md:w-72' }

const Actions = ({ baseUrl, id, buttons }: ActionsProps) => {
  const actionsList = [
    { description: 'View', segment: 'view', icon: LinkIcon },
    { description: 'Edit', segment: 'edit', icon: PencilIcon },
    { description: 'Delete', segment: 'delete', icon: TrashIcon },
  ]

  const desiredActions = !buttons ? ['view', 'edit', 'delete'] : buttons

  return (
    <>
      <div className="gap-1 hidden sm:flex">
        {actionsList.map((action) => {
          if (desiredActions.includes(action.segment)) {
            const Icon = action.icon

            return (
              <Link
                key={`${action.segment}/${id}`}
                href={`${baseUrl}/${action.segment}/${id}`}
                passHref
              >
                <a className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Icon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />

                  {action.description}
                </a>
              </Link>
            )
          }
        })}
      </div>

      {/* Dropdown */}
      <Menu as="div" className="relative sm:hidden">
        <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          More
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            {actionsList.map((action) => {
              if (desiredActions.includes(action.segment)) {
                return (
                  <Menu.Item key={`${action.segment}/${id}`}>
                    {({ active }) => (
                      <>
                        <Link
                          href={`${baseUrl}/${action.segment}/${id}`}
                          passHref
                        >
                          <a
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            {action.description}
                          </a>
                        </Link>
                      </>
                    )}
                  </Menu.Item>
                )
              }
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export { actionsWidth, Actions }
