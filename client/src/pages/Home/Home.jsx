import React from 'react'
import Header from "../../components/Home/Header";

import devopsBackground from "/public/assets/devops-background.jpg";
import devopsDark from "/public/assets/devops-dark.png";

import Card from '../../components/Home/Card';

const Home = () => {

  const staff = [

    {
      id: 1,
      name: 'Farah Miladi',
      title: 'Human Ressources',
      image: '/assets/team/farah-miladi.jpeg'
    },
    {
      id: 2,
      name: 'Arij Hakkouna',
      title: 'Treasurer',
      image: '/assets/team/arij-hakkouna.jpeg'
    },
    {
      id: 3,
      name: 'Idriss Garfa',
      title: 'Web Manager',
      image: '/assets/team/idriss-garfa.jpg'
    },
    {
      id: 4,
      name: 'Oussema Bardi',
      title: 'Organization',
      image: '/assets/team/oussema-bardi.jpeg'
    },
    {
      id: 5,
      name: 'Arij Cheikhrouhou',
      title: 'General Secretary',
      image: '/assets/team/arij-cheikhrouhou.jpeg'
    }
  ];



  return (
    <div className='w-full min-h-screen h-fit bg-[#101820]'>
      <section className='w-full mx-auto'>

        <Header />

        <section id='home' className='px-4 lg:px-0 w-full h-[calc(100vh-90px)]'>
          <div className='w-full flex gap-10 flex-wrap h-full justify-center items-center'>

            <div className='self-center -mt-20 relative'>
              <h1 className='text-4xl lg:text-[44px] font-bold text-white'>Devops community</h1>
              <p className='mt-8 text-md leading-normal md:text-lg max-w-[600px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni quia eligendi optio corporis sunt voluptatem voluptas aliquam nostrum ex!</p>
              <button className='mt-10 bg-gradient-to-br from-[#4bacfd] to-[#cb236d] hover:bg-gradient-to-bl text-sm text-white py-3 px-3 rounded-md font-semibold'>Join our community now!</button>

              <div className='hidden lg:block -bottom-[54%] lg:absolute'>
                <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:bg-gradient-to-l text-md font-semibold'>Scroll down</p>
              </div>

            </div>

            <div className='rounded-3xl bg-gradient-to-bl hover:bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500'>
              <img className='lg:ml-2 lg:mb-2 w-[600px] h-auto rounded-3xl opacity-[0.6]' src={devopsBackground} alt="Devops team" />
            </div>
          </div>
        </section>

        <section id='ourStory' className='px-4 lg:px-0 w-full h-screen bg-red-500'>
          <div className='w-full flex flex-col items-center'>
            <h1 className='text-2xl lg:text-[48px] font-bold text-white mt-10 title'>Our Story</h1>
            <p className='mt-10 lg:mt-14 leading-normal text-md md:text-lg max-w-[600px] lg:max-w-[800px] text-center text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore facere quibusdam modi eius necessitatibus nesciunt minima consequatur incidunt ipsum magni.
            </p>
            <div className='mt-10 lg:mt-20 rounded-3xl bg-gradient-to-bl hover:bg-gradient-to-tl from-pink-500 via-purple-500 to-indigo-500 '>
              <img className='lg:ml-2 lg:mb-2 w-[600px] h-auto rounded-3xl opacity-[0.6]' src={devopsBackground} alt="DevOps team" />
            </div>

          </div>
        </section>

        <section id='devops' className='px-4 lg:px-0 w-full h-screen'>
          <div className='w-full flex gap-10 flex-wrap justify-center items-center h-auto'>

            <div className='mt-8 relative'>
              <h1 className='text-4xl w-fit lg:text-[48px] font-bold text-white title'>What is DevOps</h1>
              <p className='mt-16 text-md leading-normal md:text-lg max-w-[600px] text-white'>
              DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams. It emphasizes team empowerment, cross team communication and collaboration, and technology automation.
              </p>


            </div>

            <div className='rounded-3xl'>
              <img className='lg:ml-2 lg:mb-2 w-[600px] h-auto' src={devopsDark} alt="Devops team" />
            </div>
          </div>
        </section>

        {/* <section id='ourTeam' className='px-4 lg:px-0 w-full flex xl:pt-[160px]'>
          <div className='w-full flex flex-col items-center'>
            <h1 className='text-2xl lg:text-[48px] font-bold text-white mt-10 title'>Meet Our Team</h1>
            <p className='mt-10 lg:mt-14 leading-normal text-md md:text-lg max-w-[600px] lg:max-w-[800px] text-center text-white'>
                Meet Our talanted staff members at DevOps Isima Club.
            </p>
            
            <div className='w-[80%] flex justify-center md:block mt-14 lg:mt-20'>
            {
              
              <Card card={staff[0]}/>
              
            
            }
            </div>
               
          </div>
        </section> */}

      </section>


      <footer >

      </footer>


    </div>
  )
}

export default Home