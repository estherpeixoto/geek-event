import { useRef } from 'react'
import { NextPage } from 'next'
import { FirstDataRenderedEvent } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'

// Data
import { faq, FAQType } from 'data/faq'

// Layout
import { Admin } from 'layouts/Admin'

// Components
import { CreateButton, Description } from 'components/commons'
import { Actions, ActionsProps } from 'components/Admin/Table/Actions'

interface ListType extends FAQType {
  options: ActionsProps
}

const FAQ: NextPage = () => {
  const gridRef = useRef<AgGridReact>(null)

  let data: ListType[] = []

  faq.map((item) => {
    data.push({
      id: item.id,
      question: item.question,
      answer: item.answer,
      options: {
        id: item.id,
        buttons: ['edit', 'delete'],
        baseUrl: '/admin/faq',
      },
    })
  })

  const columns = [
    { headerName: '#', field: 'id' },
    { field: 'question' },
    {
      field: 'options',
      cellRenderer: ({ value }: any) => {
        return (
          <Actions
            id={value.id}
            buttons={value.buttons}
            baseUrl={value.baseUrl}
          />
        )
      },
    },
  ]

  return (
    <Admin
      header={{
        gridRef,
        title: 'FAQ',
        description: <Description />,
        actions: <CreateButton page="faq" />,
        searchBar: {
          show: true,
        },
      }}
    >
      <div className="ag-theme-alpine h-full w-full">
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columns}
          defaultColDef={{
            flex: 1,
            editable: false,
            suppressMovable: true,
          }}
          cacheQuickFilter={true}
          pagination={true}
          paginationPageSize={5}
          domLayout={'autoHeight'}
          onFirstDataRendered={(params: FirstDataRenderedEvent) => {
            gridRef.current!.api.sizeColumnsToFit()
          }}
        ></AgGridReact>
      </div>
    </Admin>
  )
}

export default FAQ
