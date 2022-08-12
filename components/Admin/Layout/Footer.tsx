// Data
import { event } from 'data/event'

export const Footer = () => {
  const footerLinks = [
    { title: 'Contact', href: `mailto:${event.administrator.email}` },
  ]

  return (
    <footer className="p-4 md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href={event.websiteLink} className="flex items-center mb-4 sm:mb-0">
          <img className="mr-4 h-8" src={event.logo.light} alt={event.name} />
        </a>

        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
          {footerLinks.map((link) => {
            return (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  {link.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href={event.websiteLink} target="_blank" className="hover:underline">
          {event.name}
        </a>
        ™. All Rights Reserved.
      </span>
    </footer>
  )
}
