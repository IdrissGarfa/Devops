import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineShare } from 'react-icons/hi'

const Post = () => {
  return (
    <div className='w-full bg-white rounded-lg p-4'>
        {/* Post header  */}
        <div className='flex justify-between items-center'>
            <div className='flex gap-3'>
                <img className='w-10 h-10 rounded-full object-cover cursor-pointer' src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/319998606_844532930209108_8427934400275975120_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=psADqyzzMOIAX8q3fyb&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBRSIB7G1GEYPm_2OW0Nap7yblL52UBqJ5Hz9iQjxQsXw&oe=63CFC6C6" alt="User" />
                <div className='flex flex-col gap-[2px]'>
                    <div className='font-semibold text-sm text-gray-800 cursor-pointer'>Rihab Naili</div>
                    <div className='font-normal text-[12px] text-gray-400'>20 junuary 2023</div>
                </div>
            </div>

            <div>
                <FiMoreHorizontal className='text-xl text-gray-800 cursor-pointer' />
            </div>
        </div>
        {/* Post body  */}
        <div className='my-2 mx-2'>
            <p className='leading-6 text-[15px]'>Don't forget to bring your laptops with you 💜 <br />
            On sunday´s training-session at 9 a.m 💜
            </p>
        </div>

        <div className='my-2'>
            <img className='rounded-lg w-full max-w-full h-auto max-h-[500px]' src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/317434811_196155779592794_2654069850526733748_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=9AS-1PdzdTUAX-5WIg4&_nc_ht=scontent.ftun16-1.fna&oh=00_AfB3VnMmMsdhT47PSEITBAiZTqE2udtK8jiFI3V_dvlu0Q&oe=63D06644" alt="Post" />
        </div>
        {/* Post footer  */}
        <div className='flex gap-5 p-2'>
            <div>
                <AiFillHeart className='text-xl text-red-500 cursor-pointer'/>
            </div>
            <div>
                <FaRegComment className='text-xl text-gray-800 cursor-pointer'/>
            </div>
            <div>
                <HiOutlineShare className='text-xl text-gray-800 cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Post