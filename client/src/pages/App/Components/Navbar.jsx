import React from 'react'
import devopsLogo from "../../../../public/assets/logo.png";

import { FiSearch } from "react-icons/fi";
import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/Io';
import { IoVideocamOutline } from "react-icons/io5"
import { TbMinusVertical } from "react-icons/tb";

import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='w-full bg-white h-16 flex justify-between items-center shadow-sm'>
        <div className='ml-6 md:ml-12 lg:ml-16 flex items-center gap-8'>
            <div>
                <img src={devopsLogo} className='w-16 h-8' alt="Devops logo" />
            </div>
            <div className='hidden lg:flex items-center px-2 py-[2pxa] bg-gray-50 rounded-2xl w-[260px]'>   
                <FiSearch className='opacity-60 text-xl text-gray-700'/>
                <input className='bg-transparent border-0 text-gray-700 outline-none focus:ring-0 text-sm w-full' placeholder='Search something' type="text" name="search" />
            </div>
        </div>
        <div className='mr-6 md:mr-12 lg:mr-16 flex gap-4'>
            <ul className='flex items-center gap-8'>
                <li className='hidden md:block'>
                    <AiFillHome className='text-2xl text-blue-600 cursor-pointer'/> 
                </li>
                <li className='hidden md:block'>
                    <IoVideocamOutline className='text-2xl text-gray-600 cursor-pointer'/>
                </li>
                <li className='hidden md:block'>
                    <IoMdNotificationsOutline className='text-2xl text-gray-600 cursor-pointer'/>
                </li>
                <li className='hidden md:block'>
                    <AiOutlineMessage className='text-2xl text-gray-600 cursor-pointer'/>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                <div className='hidden md:block '>
                    <TbMinusVertical className='text-2xl text-gray-600 '/>
                </div>
                <div className='hidden md:flex items-center gap-4'>
                    <div >
                        <img className='w-10 h-10 rounded-full object-cover' src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/319998606_844532930209108_8427934400275975120_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=psADqyzzMOIAX8q3fyb&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBRSIB7G1GEYPm_2OW0Nap7yblL52UBqJ5Hz9iQjxQsXw&oe=63CFC6C6" alt="User" />
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='hidden lg:block font-semibold'>Rihab Naili</div>
                        <IoIosArrowDown className="text-md text-gray-900 cursor-pointer"/>
                    </div>
                </div>
                <div className='md:hidden'>
                    <CgMenuRight className="text-2xl text-gray-900 cursor-pointer"/>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar