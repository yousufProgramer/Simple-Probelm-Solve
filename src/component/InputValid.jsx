import React, { useState } from 'react'


const maxLength = 10;
export const InputValid = () => {
  const [name,setName] = useState('')
 
  return (
    <div className='py-10 px-10'>
      <input className='ring-2 px-3 py-1 rounded-lg focus:outline-none' type="text" placeholder='Enter your name' 
      value={name}
      maxLength = {maxLength}
      onChange = {(e)=>setName(e.target.value)}
      /><br/>
       {name.length <= 0  ? <i className='text-red-500'>Cannot Empty Name</i> : ''}
      {name.length >=maxLength ? <i className='text-red-500'>Typing over</i> : ''}
    </div>
  )
}
