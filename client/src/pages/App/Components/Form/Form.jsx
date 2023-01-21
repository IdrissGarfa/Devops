import React, { useState } from 'react'
import { BsImageFill } from 'react-icons/bs'
import { CgPoll } from 'react-icons/cg'
import { IoVideocamOutline } from 'react-icons/io5'
import Modal from './Modal'

const Form = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () =>  setShowModal(!showModal);

    return (
        <div className='w-full mt-8 px-3 md:px-3'>

            <Modal showModal={showModal} setShowModal={setShowModal} />

            <div className='w-full bg-white rounded-lg p-4'>
                <div className='flex gap-4 pt-2 pb-3 items-center'>
                    <img className='w-11 h-11 rounded-full' src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/319998606_844532930209108_8427934400275975120_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=psADqyzzMOIAX8q3fyb&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBRSIB7G1GEYPm_2OW0Nap7yblL52UBqJ5Hz9iQjxQsXw&oe=63CFC6C6" alt="User" />
                    <div className='w-full'>
                        <input onClick={toggleShowModal} className='w-full border-0 outline-none p-4 rounded-xl bg-gray-50 text-gray-800 focus:ring-0 text-sm' type="text" placeholder="Post something" />
                    </div>
                </div>
                
                <div className='ml-16'>
                    <div className='flex gap-8 py-1'>
                        <div onClick={toggleShowModal} className='flex gap-3 items-center cursor-pointer'>
                            <BsImageFill className='text-md text-green-400' />
                            <span className='text-sm font-medium text-gray-600'>Image</span>
                        </div>
                        <div onClick={toggleShowModal} className='flex gap-3 items-center cursor-pointer'>
                            <IoVideocamOutline className='text-md text-red-600' />
                            <span className='text-sm font-medium text-gray-600'>Video<span className='hidden md:inline-block'>/ Gif</span></span>
                        </div>
                        <div onClick={toggleShowModal} className='flex gap-3 items-center cursor-pointer'>
                            <CgPoll className='text-md text-orange-400' />
                            <span className='text-sm font-medium text-gray-600'>Activity<span className='hidden md:inline-block'>/ Poll</span></span>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Form