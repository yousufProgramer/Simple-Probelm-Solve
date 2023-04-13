import React from 'react'

export const Header = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center py-5 font-serif'>
      <h1 className = 'text-4xl sm:text-5xl font-bold tracking-wide text-black/90 mb-3'>BookList App</h1>
      <p className = 'text-xl sm:text-2xl font-semibold text-black/60'>Add your new book </p>
      </div>
    </div>
  )
}
