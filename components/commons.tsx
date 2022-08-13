import Link from 'next/link'
import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/outline'

interface CommonsTypes {
  page: string
}

const Description = () => {
  return (
    <p className="mt-2 text-sm text-gray-500">Frequently Asked Questions</p>
  )
}

const CreateButton = (props: CommonsTypes) => {
  return (
    <Link href={`/admin/${props.page}/create`} passHref>
      <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm sm:ml-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <PlusIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
        Create a question
      </a>
    </Link>
  )
}

const BackButton = (props: CommonsTypes) => {
  return (
    <Link href={`/admin/${props.page}`} passHref>
      <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md shadow-sm sm:ml-3 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <ChevronLeftIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
        Back
      </a>
    </Link>
  )
}

export { Description, CreateButton, BackButton }
