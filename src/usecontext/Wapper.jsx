import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext()
export const Wapper = (props) => {

    const [user,setUser] = useState([
        {
            id : 1,
            book : '0283',
            author : 'Yousuf ahmed',
            bookName : 'web Development'
        },

        {
            id : 2,
            book : '0283',
            author : 'Sumon ahmed',
            bookName : 'Php Development'
        },
        
    ])
  return (
    <div>
        <UserContext.Provider value={[user,setUser]}>
          {props.children}
        </UserContext.Provider>
    </div>
  )
}
