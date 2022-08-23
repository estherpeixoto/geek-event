import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated'
import Layout from './Layout'
import Docs from '@/Components/Docs'

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

      <Layout>
        <Docs markdown={props.markdown} />
      </Layout>
    </Authenticated>
  )
}
