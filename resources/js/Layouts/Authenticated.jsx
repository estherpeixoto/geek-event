import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

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
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-gray-800 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="shrink-0 flex items-center mr-10">
                                <Link href="/">
                                    <ApplicationLogo className="block h-8 w-8 text-gray-500 dark:text-gray-200" />
                                </Link>
                            </div>

                            <div className="hidden lg:block">
                                <div className='flex items-baseline space-x-4'>
                                    {adminNavigation.map((item) => {
                                        return (
                                            <NavLink key={item.route} href={route(item.route)} active={route().current(item.route)}>
                                                {item.name}
                                            </NavLink>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="flex items-center rounded-md">
                                            <button
                                                type="button"
                                                className="h-8 w-8 inline-flex items-center focus:outline-none transition ease-in-out duration-150 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded-full bg-gray-800"
                                            >
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src='https://avatars.githubusercontent.com/u/37677602?v=4'
                                                    alt={auth.user.name}
                                                />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center lg:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' lg:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        {adminNavigation.map((item) => {
                            return (
                                <ResponsiveNavLink key={item.route} href={route(item.route)} active={route().current(item.route)}>
                                    {item.name}
                                </ResponsiveNavLink>
                            )
                        })}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-700">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-300">{auth.user.name}</div>
                            <div className="font-medium text-sm text-gray-400">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 lg:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
