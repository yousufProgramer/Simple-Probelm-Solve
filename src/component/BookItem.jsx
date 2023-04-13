import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../usecontext/Wapper'
import { BiTrash } from 'react-icons/bi';
import { BookItems } from './BookItems'

export const BookItem = () => {
    const [user,setUser] = useContext(UserContext)

    const handleRemove= (id)=> {
        setUser((preUser)=>{
            const filterUser = preUser.filter((user)=> user.id != id);
             return filterUser
           })
        
    }
  return (
    <div className=' flex flex-col items-center  sm:w-[70%] mx-auto pb-9'>
      <table className='table-auto py-5'>
      <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              
                <th scope="col" class="sm:px-10 sm:py-3  px-3 py-6">
                    Book NO
                </th>
               
                <th scope="col" class="sm:px-10 sm:py-3  px-3 py-6">
                    Author
                </th>
                <th scope="col" class="sm:px-6 sm:py-3 px-3 py-6 ">
                    Book Name
                </th>
                <th scope="col" class="sm:px-6 sm:py-3 px-3 py-6 sm:text-sm">
                   Action
                </th>
            </tr>
        </thead>

        {user.map((book,id)=>{
            return <tbody key={id}>
              <tr class="bg-white border-b ">
                <th scope="row" class="sm:px-6 sm:py-4 font-sm text-gray-900 whitespace-nowrap ">
                   <p className='font-normal font-mono'>{book.book}</p>
                </th>
                
                <td class="sm:px-6 sm:py-4 px-2 py-4">
                <p className='font-normal font-mono'>{book.author}</p>
                </td>
                <td class="sm:px-6 sm:py-4 px-2 py-2">
                <p className='font-normal font-mono'>{book.bookName}</p>
                </td>
                <td class="sm:px-6 sm:py-4 px-2 py-2">
                   <button className='bg-black/90 ring-4 ring-orange-200 px-2 py-1  text-white rounded-full font-semibold'
                   onClick={()=>{handleRemove(id)}}
                   ><BiTrash /></button>
                </td>
            </tr>
            </tbody>
        })}
        </table> 
    </div>
  )
}
