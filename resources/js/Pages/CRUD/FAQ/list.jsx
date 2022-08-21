import { useState, useEffect } from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import { PencilAltIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import Authenticated from '@/Layouts/Authenticated'
import Modal from '@/Components/Forms/Modal'
import axios from 'axios'

const closedModalState = {
  isOpen: false,
  title: '',
  action: { method: '', route: '' },
}

export default function FAQ(props) {
  const [list, setList] = useState([])

  // Base modal for alerts and form
  let [modal, setModal] = useState(closedModalState)

  // Form inputs
  let [id, setId] = useState('')
  let [question, setQuestion] = useState('')
  let [answer, setAnswer] = useState('')

  useEffect(async () => {
    const response = await axios.get(route('faq.index'))
    setList(response.data)
  }, [])

  function closeModal() {
    setModal(closedModalState)
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
    if (confirm('Confirm delete?')) {
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
                  className='overflow-hidden bg-white shadow-sm sm:rounded-lg'
                >
                  <div className='p-4'>
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

      <Modal
        isOpen={modal.isOpen}
        close={closeModal}
        title={modal.title}
      >
        <div className='mt-2'>
          <p className='px-6 pb-6 text-sm text-gray-500'>
            This question will be displayed publicly at{' '}
            <Link
              href='/faq'
              className='underline underline-offset-4'
            >
              /faq
            </Link>{' '}
            so be careful what you share.
          </p>
        </div>

        <div className='p-6 space-y-6 border-t border-gray-200'>
          <div>
            <label
              htmlFor='question'
              className='block text-sm font-medium text-gray-700'
            >
              Question
            </label>

            <input
              type='text'
              name='question'
              id='question'
              className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor='answer'
              className='block text-sm font-medium text-gray-700'
            >
              Answer
            </label>

            <div className='mt-1'>
              <textarea
                id='answer'
                name='answer'
                rows='3'
                className='block w-full mt-1 border-gray-300 rounded-md shadow-sm h-52 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
              ></textarea>
            </div>

            <p className='mt-2 text-sm text-gray-500'>
              Brief answer for your question.
            </p>
          </div>
        </div>

        <div className='flex justify-between px-6 pb-6'>
          <button
            type='button'
            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Close
          </button>

          <button
            type='button'
            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </Modal>
    </Authenticated>
  )
}
