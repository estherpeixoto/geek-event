import { NextPage } from 'next'

// Data
import { faq } from 'data/faq'
import { classNames } from 'utils/functions'

// Layout
import { Admin } from 'layouts/Admin'

// Components
import { Actions, actionsWidth } from 'components/Admin/Table/Actions'
import { CreateButton, Description } from 'components/commons'

const FAQ: NextPage = () => {
  const desiredActions = ['edit', 'delete']

  return (
    <Admin
      header={{
        title: 'FAQ',
        description: <Description />,
        actions: <CreateButton page="faq" />,
      }}
    >
      <table className="bg-white rounded-md shadow w-full">
        <thead>
          <tr className="border-b border-gray-200 text-md font-medium text-gray-900">
            <td className="p-4 w-14">#</td>

            {faq.columns.map((column) => {
              return (
                <td key={column} className="p-4">
                  {column}
                </td>
              )
            })}

            <td className={classNames('p-4 w-10', actionsWidth['1'])}>
              Options
            </td>
          </tr>
        </thead>

        <tbody>
          {faq.data.map((question) => {
            return (
              <tr key={question.id} className="text-gray-500">
                <td className="p-4">{question.id}</td>
                <td className="p-4">{question.question}</td>
                <td className="p-4">
                  <Actions
                    buttons={desiredActions}
                    baseUrl={'/admin/faq'}
                    id={question.id}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Admin>
  )
}

export default FAQ
