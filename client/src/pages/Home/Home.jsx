import React from 'react'
import Header from '../../components/Header'

import devopsBackground from "../../../public/assets/devops-background.jpg"

const Home = () => {

  return (
    <div className='w-full min-h-screen bg-[#101820]'>
      <section className='w-full mx-auto'>
        
        <Header />
        
        <section className='px-4 lg:px-0 w-full h-auto min-h-[90%] flex lg:mt-20'>
          <div className='w-full flex gap-10 flex-wrap justify-center'>
            
            <div className='mt-16 relative'>
              <h1 className='text-[44px] font-bold text-white'>Devops community</h1>
              <p className='mt-8 text-[18px] max-w-[600px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni quia eligendi optio corporis sunt voluptatem voluptas aliquam nostrum ex!</p>
              <button className='mt-10 bg-gradient-to-br from-[#4bacfd] to-[#cb236d] hover:bg-gradient-to-bl text-sm text-white py-3 px-3 rounded-md font-semibold'>Join our community now!</button>
            
              <div className='hidden lg:block lg:absolute lg:bottom-0'>
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-md font-semibold'>Scroll down</p>
              </div>

            </div>

            <div className=' rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
              <img className='lg:ml-2 lg:mb-2 w-[600px] h-auto rounded-3xl opacity-[0.6]' src={devopsBackground} alt="Devops team" />
            </div>
          </div>
        </section>

      </section>

        <section className='w-full'>
            <div>
                
            </div>
        </section>

    </div>
  )
}

export default Home