import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'

// Data
import { faq, FAQType } from 'data/faq'

// Utils
import { isActionValid, uppercaseFirstLetter } from 'utils/functions'

// Layout
import { Admin } from 'layouts/Admin'

// Components
import { BackButton, Description } from 'components/commons'

interface Props {
  action: string
  faq: FAQType
}

const Form: NextPage<Props> = ({ action, faq }) => {
  return (
    <Admin
      header={{
        title: 'FAQ',
        description: <Description />,
        actions: <BackButton page="faq" />,
      }}
    >
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {uppercaseFirstLetter(action)} a question
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            This question will be displayed publicly at{' '}
            <Link href="/faq" passHref>
              <a className="underline underline-offset-4">/faq</a>
            </Link>{' '}
            so be careful what you share.
          </p>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow rounded-md overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Question
                  </label>

                  <input
                    id="question"
                    name="question"
                    type="text"
                    placeholder="Your question title"
                    className="mt-1 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full sm:text-sm border-gray-300"
                    value={faq.question ?? ''}
                  />
                </div>

                <div>
                  <label
                    htmlFor="answer"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Answer
                  </label>

                  <div className="mt-1">
                    <textarea
                      id="answer"
                      name="answer"
                      rows={3}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="A good answer for the question above"
                      value={faq.answer ?? ''}
                    />
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    Can be a brief answer or a long one
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {uppercaseFirstLetter(action)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Admin>
  )
}

export async function getServerSideProps({ query }: NextPageContext) {
  const action = query.action as string
  const id = query.id as string

  if (!action) {
    return { notFound: true }
  }

  if (!isActionValid(action)) {
    return { notFound: true }
  }

  if (action === 'create' && !id) {
    return { props: { action, faq: {} } }
  }

  if (!id) {
    return { notFound: true }
  }

  const isRequiredFAQ = (faq: FAQType) => {
    return faq.id == id
  }

  const requiredFAQ = faq.data.find(isRequiredFAQ)

  if (!requiredFAQ) {
    return { notFound: true }
  }

  return { props: { action, faq: requiredFAQ } }
}

export default Form
