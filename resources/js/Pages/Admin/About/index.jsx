import { useState, useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios'
import { CloudUploadIcon } from '@heroicons/react/outline'
import Authenticated from '@/Layouts/Authenticated'

export default function About(props) {
  // Form inputs
  let [id, setId] = useState('')
  let [text, setText] = useState('')
  let [uploadedFile, setUploadedFile] = useState(null)

  useEffect(async () => {
    const response = await axios.get(route('about.index'))
    setId(response.data.id)
    setText(response.data.text)
  }, [])

  async function handleSave() {
    const response = await axios.post(
      route('about.update', { id }),
      { text, image: uploadedFile },
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )

    alert(response.data.message)
  }

  function dragOverHandler(event) {
    event.stopPropagation()
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  function dropHandler(event) {
    event.preventDefault()

    if (event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0]

      if (file.type.match(/image.*/)) {
        const reader = new FileReader()
        reader.onload = function (dataURL) {
          setUploadedFile(file)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold leading-tight text-gray-800'>
            About
          </h2>
        </div>
      }
    >
      <Head title='About' />

      <div className='lg:py-12'>
        <div className='px-4 mx-auto max-w-7xl lg:px-6'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-6'>
            <div className='mt-5 lg:mt-0 lg:col-start-2 lg:col-span-2'>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 space-y-6 bg-white sm:p-6'>
                  <div>
                    <label
                      htmlFor='text'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Text
                    </label>

                    <div className='mt-1'>
                      <textarea
                        id='text'
                        name='text'
                        rows='3'
                        className='block w-full mt-1 border border-gray-300 rounded-md shadow-sm h-36 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value)
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Cover photo
                    </label>

                    <div
                      onDrop={dropHandler}
                      onDragOver={dragOverHandler}
                      className='flex flex-col items-center justify-center h-64 gap-3 mt-1 border-2 border-gray-300 border-dashed rounded-md'
                    >
                      <CloudUploadIcon className='w-10 h-10 text-blue-100' />
                      <p className='font-semibold'>
                        Drop your image here, or{' '}
                        <label className='text-blue-600 cursor-pointer'>
                          browse
                          <input
                            id='image'
                            name='image'
                            type='file'
                            className='sr-only'
                          />
                        </label>
                      </p>
                      <p className='text-xs text-gray-400'>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className='px-4 py-3 text-right bg-gray-50 sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md shadow-sm hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}
