const adminNavigation = [
  { name: 'Dashboard', href: '/admin', current: true },
  { name: 'Calendar', href: '/admin/calendar', current: false },
  { name: 'Tickets', href: '/admin/tickets', current: false },
  { name: 'Line-up', href: '/admin/line-up', current: false },
  { name: 'Contests', href: '/admin/contests', current: false },
  { name: 'Caravans', href: '/admin/caravans', current: false },
  { name: 'About', href: '/admin/about', current: false },
  { name: 'FAQ', href: '/admin/faq', current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '/admin/your-profile' },
  { name: 'Settings', href: '/admin/settings' },
  { name: 'Sign out', href: '/admin/sign-out' },
]

export { adminNavigation, userNavigation }
