export const Categories = [
  {
    title: 'Getting Started',
    links: [
      {
        text: 'Introduction',
        href: route('dashboard.documentation', { page: 'introduction' }),
      },
      {
        text: 'Configuration',
        href: route('dashboard.documentation', { page: 'configuration' }),
      },
      {
        text: 'Release notes',
        href: route('dashboard.documentation', { page: 'release-notes' }),
      },
      {
        text: 'License',
        href: route('dashboard.documentation', { page: 'license' }),
      },
    ],
  },
  {
    title: 'Features',
    links: [
      {
        text: 'Event management',
        href: route('dashboard.documentation', { page: 'event-management' }),
      },
      {
        text: 'Landing page',
        href: route('dashboard.documentation', { page: 'landing-page' }),
      },
      {
        text: 'Line-up',
        href: route('dashboard.documentation', { page: 'line-up' }),
      },
      {
        text: 'Contests',
        href: route('dashboard.documentation', { page: 'contests' }),
      },
      {
        text: 'Caravans',
        href: route('dashboard.documentation', { page: 'caravans' }),
      },
      {
        text: 'Staffs',
        href: route('dashboard.documentation', { page: 'staffs' }),
      },
      {
        text: 'Security',
        href: route('dashboard.documentation', { page: 'security' }),
      },
    ],
  },
  {
    title: 'API',
    links: [
      {
        text: 'Routes',
        href: route('dashboard.documentation', { page: 'routes' }),
      },
    ],
  },
  {
    title: 'Database',
    links: [
      {
        text: 'Migrations',
        href: route('dashboard.documentation', { page: 'migrations' }),
      },
      {
        text: 'Seeders',
        href: route('dashboard.documentation', { page: 'seeders' }),
      },
      {
        text: 'Models',
        href: route('dashboard.documentation', { page: 'models' }),
      },
    ],
  },
  ,
  {
    title: 'Interface',
    links: [
      {
        text: 'Layouts',
        href: route('dashboard.documentation', { page: 'layouts' }),
      },
      {
        text: 'Components',
        href: route('dashboard.documentation', { page: 'components' }),
      },
      {
        text: 'Forms',
        href: route('dashboard.documentation', { page: 'forms' }),
      },
    ],
  },
]
