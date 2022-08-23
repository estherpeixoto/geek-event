import { useState, useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios'
import { PencilAltIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import Authenticated from '@/Layouts/Authenticated'
import Form from './form'

const closedDialogState = {
  isOpen: false,
  title: '',
  action: { method: '', route: '' },
}

export default function FAQ(props) {
  const [list, setList] = useState([])

  // Base modal for alerts and form
  let [modal, setModal] = useState(closedDialogState)

  // Form inputs
  let [id, setId] = useState('')
  let [question, setQuestion] = useState('')
  let [answer, setAnswer] = useState('')

  useEffect(async () => {
    const response = await axios.get(route('faq.index'))
    setList(response.data)
  }, [])

  function closeModal() {
    setModal(closedDialogState)
    setId('')
    setQuestion('')
    setAnswer('')
  }

  function handleCreate() {
    setModal({
      isOpen: true,
      title: 'Create question',
      action: {
        method: 'post',
        route: route('faq.store'),
      },
    })
  }

  function handleEdit(faqId) {
    const faq = list.find((item) => {
      if (item.id == faqId) {
        return item
      }
    })

    setId(faq.id)
    setQuestion(faq.question)
    setAnswer(faq.answer)

    setModal({
      isOpen: true,
      title: 'Edit question',
      action: {
        method: 'put',
        route: route('faq.update', { faq: faqId }),
      },
    })
  }

  async function handleSave() {
    const response = await axios[modal.action.method](modal.action.route, {
      question,
      answer,
    })

    alert(response.data.message)

    if (response.data.faq) {
      if (modal.action.method === 'post') {
        list.push(response.data.faq)
      } else if (modal.action.method === 'put') {
        list.find((item, key) => {
          if (item.id == id) {
            list[key] = response.data.faq
          }
        })
      }

      closeModal()
      return
    }
  }

  async function handleDelete(faqId) {
    if (confirm('Are you sure you want to delete this question?')) {
      const response = await axios.delete(route('faq.destroy', { faq: faqId }))

      if (response.status === 200) {
        const updatedList = list.filter((item) => {
          return item.id != faqId
        })

        setList(updatedList)
      }

      alert(response.data.message ?? 'Fail to delete')
    }
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold leading-tight text-gray-800'>
            FAQ
          </h2>

          <button
            type='button'
            className='inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            onClick={handleCreate}
          >
            <PlusIcon className='w-4 h-4' />
            Create
          </button>
        </div>
      }
    >
      <Head title='FAQ' />

      <div className='py-12'>
        <div className='px-4 mx-auto max-w-7xl lg:px-6'>
          <div className='grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4'>
            {list.map((faq) => {
              return (
                <div
                  key={faq.id}
                  className='flex flex-col overflow-hidden bg-white shadow-sm sm:rounded-lg'
                >
                  <div className='flex-1 p-4'>
                    <p className='font-medium text-gray-500'>Question:</p>

                    <p className='mt-1 text-gray-900'>{faq.question}</p>

                    <p className='mt-4 font-medium text-gray-500'>Answer:</p>

                    <p className='mt-1 text-gray-900 truncate'>{faq.answer}</p>
                  </div>

                  <div className='flex border-t'>
                    <button
                      onClick={() => handleEdit(faq.id)}
                      className='flex items-center justify-center flex-1 gap-1 p-4 text-gray-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none'
                    >
                      <PencilAltIcon className='w-5 h-5' />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(faq.id)}
                      className='flex items-center justify-center flex-1 gap-1 p-4 text-gray-500 hover:text-red-600 hover:bg-red-50 focus:outline-none'
                    >
                      <TrashIcon className='w-5 h-5' />
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Form
        modal={modal}
        closeModal={closeModal}
        setQuestion={setQuestion}
        question={question}
        setAnswer={setAnswer}
        answer={answer}
        handleSave={handleSave}
      />
    </Authenticated>
  )
}
