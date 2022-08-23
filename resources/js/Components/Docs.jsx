import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Docs({ markdown }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => {
          return (
            <h1 className='text-xl font-semibold leading-tight text-gray-800 mb-4'>{props.children.join('')}</h1>
          )
        },
      }}
      children={markdown}
      remarkPlugins={[remarkGfm]}
    />
  )
}
