import React from 'react'

export default function Checkbox({ name, value, handleChange }) {
  return (
    <input
      type='checkbox'
      name={name}
      value={value}
      className='text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
      onChange={(e) => handleChange(e)}
    />
  )
}
