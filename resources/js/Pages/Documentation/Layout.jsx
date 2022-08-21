import React from 'react'

const categories = [
  {
    title: 'API',
    links: [{ text: 'Routes', href: '' }],
  },
]

export default function Layout(props) {
  return (
    <div className='py-12'>
      <div className='px-4 mx-auto max-w-7xl lg:px-8'>
        <div className='flex mx-auto'>
          <aside className='hidden w-64 space-y-4 shrink-0 lg:block lg:pr-8'>
            {categories.map((category, key) => {
              return (
                <div
                  key={key}
                  className='space-x-4 space-y-2 text-sm text-gray-500'
                >
                  <span className='font-semibold text-gray-900 '>
                    {category.title}
                  </span>

                  <div className='flex flex-col gap-2 font-medium'>
                    {category.links.map((link, key) => {
                      return (
                        <a
                          key={key}
                          href={link.href}
                          className='hover:text-gray-900 focus:outline-none'
                        >
                          {link.text}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </aside>

          <main className='w-full col-span-4 p-8 overflow-hidden bg-white rounded-lg shadow-sm'>
            <h1 className='text-xl font-semibold leading-tight text-gray-800'>
              {props.title}
            </h1>

            <div>{props.children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
