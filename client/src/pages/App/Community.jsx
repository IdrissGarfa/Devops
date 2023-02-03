import React from 'react'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts/Posts'
import Form from './Components/Form/Form'
import { useEffect } from 'react'
import { useStateContext } from '../../context/StateContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Community = () => {

  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem("currentUser")) || null);
  }, [])

  return (
    loggedIn ? (
      <div className='w-full h-full bg-gray-50'>

        <Navbar />

        <div className='flex justify-center gap-10'>

          <div className='hidden lg:block lg:basis-1/5'>

          </div>

          <div className='md:2/5 lg:basis-2/5'>
            {
              loggedIn.user.isEditor && <Form />
            }
            <Posts />
          </div>

          <div className='hidden lg:block lg:basis-1/5'>

          </div>

        </div>

      </div>
    ) : (
      <div>
        Sign In now
      </div>
    )
  )
}

export default Community
