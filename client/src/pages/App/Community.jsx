import React from 'react'
import Navbar from './Components/Navbar'
import Posts from './Components/Posts/Posts'
import Form from './Components/Form/Form'

const Community = () => {
  return (
    <div className='w-full h-full bg-gray-50'>

      <Navbar />
      
      <div className='flex justify-center gap-10'>
      
        <div className='hidden lg:block lg:basis-1/5'>

        </div>
      
        <div className='md:2/5 lg:basis-2/5'>
          <Form />
          <Posts />
        </div>
      
        <div className='hidden lg:block lg:basis-1/5'>

        </div>
      
      </div>
    
    </div>
  )
}

export default Community
