import { useEffect, useState } from 'react'
import { NextPage } from 'next'

// Data
import { faq, FAQType } from 'data/faq'
import { classNames } from 'utils/functions'

// Layout
import { Admin } from 'layouts/Admin'

// Components
import { CreateButton, Description } from 'components/commons'
import { Actions, actionsWidth } from 'components/Admin/Table/Actions'

const FAQ: NextPage = () => {
  const [list, setList] = useState<FAQType[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setList(faq.data)
  }, [])

  useEffect(() => {
    const filteredData = faq.data.filter((item) => {
      return Object.values(item)
        .join('')
        .toLowerCase()
        .includes(search.toLowerCase())
    })

    setList(filteredData)
  }, [search])

  return (
    <Admin
      header={{
        title: 'FAQ',
        description: <Description />,
        actions: <CreateButton page="faq" />,
        searchBar: {
          show: true,
          value: search,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value)
          },
        },
      }}
    >
      <table className="w-full bg-white rounded-md shadow">
        <thead>
          <tr className="font-medium text-gray-900 border-b border-gray-200 text-md">
            <td className="p-4 w-14">#</td>

            {faq.columns.map((column, index) => {
              return (
                <td key={index} className="p-4">
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
          {list.map((question, index) => {
            return (
              <tr key={index} className="text-gray-500">
                <td className="p-4">{question.id}</td>
                <td className="p-4">{question.question}</td>
                <td className="p-4">
                  <Actions
                    id={question.id}
                    buttons={['edit', 'delete']}
                    baseUrl={'/admin/faq'}
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
