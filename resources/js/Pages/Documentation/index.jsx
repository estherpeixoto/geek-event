import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated'
import Layout from './Layout'

export default function Documentation(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className='text-xl font-semibold leading-tight text-gray-800'>
          Documentation
        </h2>
      }
    >
      <Head title='Documentation' />

      <Layout title='Getting started'>
        <p className='mt-4'>These are for developers 😉</p>
      </Layout>
    </Authenticated>
  )
}
