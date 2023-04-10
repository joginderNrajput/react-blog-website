import React from 'react'

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100">
      <div className="spinner"></div>
      <div className="mt-4 text-gray-700 font-bold">Loading...</div>
    </div>
  )
}

export default Spinner;
