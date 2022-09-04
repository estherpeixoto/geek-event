import { ClipboardCopyIcon, ClipboardIcon } from '@heroicons/react/outline'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Docs({ markdown }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, children }) => {
          const id = node.children[0].value.replaceAll(' ', '-')

          return (
            <h1
              id={id}
              className='mb-4 text-xl font-semibold leading-tight text-gray-800'
            >
              <a href={`#${id}`}>#</a> {children}
            </h1>
          )
        },
        h2: ({ node, children }) => {
          const id = node.children[0].value.replaceAll(' ', '-')

          return (
            <h1
              id={id}
              className='my-4 text-lg font-semibold leading-tight text-gray-800'
            >
              <a href={`#${id}`}>#</a> {children}
            </h1>
          )
        },
        h3: ({ node, children }) => {
          const id = node.children[0].value.replaceAll(' ', '-')

          return (
            <h1
              id={id}
              className='my-4 text-base font-semibold leading-tight text-gray-800'
            >
              <a href={`#${id}`}>#</a> {children}
            </h1>
          )
        },
        ol({ node, children }) {
          return (
            <ol className='list-decimal list-inside'>
              {children}
            </ol>
          )
        },
        code({ node, children }) {
          return (
            <code className='relative inline-block py-3 pl-3 pr-8 my-2 text-xs font-normal leading-tight text-gray-300 bg-gray-800 rounded-lg'>
              {children}
              <span className='absolute top-0 right-0 flex items-center justify-center mr-2'>
                <ClipboardIcon className='w-4 h-4' />
              </span>
            </code>
          )
        },
      }}
      children={markdown}
      remarkPlugins={[remarkGfm]}
    />
  )
}
