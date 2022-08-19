import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function FAQ(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          FAQ
        </h2>
      }
    >
      <Head title="FAQ" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          </div>
        </div>
      </div>
    </Authenticated>
  )
}