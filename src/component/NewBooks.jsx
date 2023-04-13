import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { UserContext } from '../usecontext/Wapper'

export const NewBooks = () => {
  const [user,setUser] = useContext(UserContext);
  const [book,setBookNo] = useState('')
  const [author,setAuthor] = useState('')
  const [bookName,setName] = useState('')
 
  const handleSubmit = (e)=> {
    e.preventDefault();
    // let obj = {
    //   bookNO : bookNO,
    //   author : author,
    //   name : name,
    // } 
    setUser((pre)=>{
      return [...pre,{book,author,bookName}]
    })
    setBookNo('')
    setAuthor('')
    setName('')
  }
  return (
    <div className='sm:w-[40%] p-5 bg-slate-500 mx-auto mb-10'>
       <div className=''>
       
       <form action="" onSubmit={handleSubmit}>

       <label className='text-white font-mono text-xl ' htmlFor="bookno">Book No:</label>
       <input type="number" 
       className='px-2 py-1 w-[100%]  mb-3 mt-2 rounded-sm focus:ring-4 ring-orange-400 outline-none'
       placeholder='Enter book no' 
       required
       id='bookno'
       value={book}
       onChange = {(e)=> setBookNo(e.target.value)}
       />

      <label className='text-white font-mono text-xl ' htmlFor="author">Author:</label>
       <input type="text" 
       className='px-2 py-1 w-[100%] mb-3 mt-2 rounded-sm focus:ring-4 ring-orange-400 outline-none'
       placeholder='Enter book no' 
       required
       id='author'
       value={author}
       onChange = {(e)=> setAuthor(e.target.value)}
       />
       <label className='text-white font-mono text-xl ' htmlFor="bookname">Book Name:</label>
       <input type="text" 
       className='px-2 py-1 w-[100%] mb-3 mt-2 rounded-sm focus:ring-4 ring-orange-400 outline-none'
       placeholder='Enter book no' 
       required
       id='bookname'
       value={bookName}
       onChange = {(e)=> setName(e.target.value)}
       />
       <button className='bg-black/60 w-[100%] sm:w-[100px] px-4 py-1 text-white font-semibold font-mono text-xl rounded-lg hover:bg-black transform duration-500'>Submit</button>
       </form>
       </div>
    </div>
  )
}
