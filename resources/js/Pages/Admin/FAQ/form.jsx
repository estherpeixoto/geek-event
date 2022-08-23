import { Link } from '@inertiajs/inertia-react'
import Modal from '@/Components/Forms/Modal'

export default function Form(props) {
  const {
    modal,
    closeModal,
    handleSave,
    setQuestion,
    question,
    setAnswer,
    answer,
  } = props

  return (
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
  )
}
