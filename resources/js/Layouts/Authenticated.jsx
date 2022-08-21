import React, { useState } from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import { Link } from '@inertiajs/inertia-react'

const adminNavigation = [
  { name: 'Dashboard', route: 'dashboard' },
  { name: 'Calendar', route: 'dashboard.calendar' },
  { name: 'Tickets', route: 'dashboard.tickets' },
  { name: 'Line-up', route: 'dashboard.lineup' },
  { name: 'Contests', route: 'dashboard.contests' },
  { name: 'Caravans', route: 'dashboard.caravans' },
  { name: 'About', route: 'dashboard.about' },
  { name: 'FAQ', route: 'dashboard.faq' },
]

export default function Authenticated({ auth, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false)

  return (
    <div className='min-h-screen bg-gray-100'>
      <nav className='bg-gray-800 border-b border-gray-100'>
        <div className='px-4 mx-auto max-w-7xl lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex items-center mr-10 shrink-0'>
                <Link href='/'>
                  <ApplicationLogo className='block w-8 h-8 text-gray-500 dark:text-gray-200' />
                </Link>
              </div>

              <div className='hidden lg:block'>
                <div className='flex items-baseline space-x-4'>
                  {adminNavigation.map((item) => {
                    return (
                      <NavLink
                        key={item.route}
                        href={route(item.route)}
                        active={route().current(item.route)}
                      >
                        {item.name}
                      </NavLink>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className='hidden lg:flex lg:items-center lg:ml-6'>
              <div className='relative ml-3'>
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className='flex items-center rounded-md'>
                      <button
                        type='button'
                        className='inline-flex items-center w-8 h-8 transition duration-150 ease-in-out bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      >
                        <img
                          className='w-8 h-8 rounded-full'
                          src='https://avatars.githubusercontent.com/u/37677602?v=4'
                          alt={auth.user.name}
                        />
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link
                      href={route('dashboard.documentation')}
                      method='get'
                      as='button'
                    >
                      Documentation
                    </Dropdown.Link>

                    <Dropdown.Link
                      href={route('logout')}
                      method='post'
                      as='button'
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

            <div className='flex items-center -mr-2 lg:hidden'>
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState
                  )
                }
                className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <svg
                  className='w-6 h-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    className={
                      !showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                  <path
                    className={
                      showingNavigationDropdown ? 'inline-flex' : 'hidden'
                    }
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? 'block' : 'hidden') + ' lg:hidden'
          }
        >
          <div className='pt-2 pb-3 space-y-1'>
            {adminNavigation.map((item) => {
              return (
                <ResponsiveNavLink
                  key={item.route}
                  href={route(item.route)}
                  active={route().current(item.route)}
                >
                  {item.name}
                </ResponsiveNavLink>
              )
            })}
          </div>

          <div className='pt-4 pb-1 border-t border-gray-700'>
            <div className='px-4'>
              <div className='text-base font-medium text-gray-300'>
                {auth.user.name}
              </div>
              <div className='text-sm font-medium text-gray-400'>
                {auth.user.email}
              </div>
            </div>

            <div className='mt-3 space-y-1'>
              <ResponsiveNavLink
                href={route('dashboard.documentation')}
                method='get'
                as='button'
              >
                Documentation
              </ResponsiveNavLink>

              <ResponsiveNavLink
                method='post'
                href={route('logout')}
                as='button'
              >
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className='bg-white shadow'>
          <div className='px-4 py-6 mx-auto max-w-7xl lg:px-8'>{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  )
}
