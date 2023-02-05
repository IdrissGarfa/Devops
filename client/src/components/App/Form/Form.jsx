import React, { useState } from 'react'
import { BsImageFill } from 'react-icons/bs'
import { CgPoll } from 'react-icons/cg'
import { IoVideocamOutline } from 'react-icons/io5'
import Modal from './Modal'

import { useStateContext } from '../../../context/StateContext'

const Form = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(false);

    const { currentUser } = useStateContext(); 

    console.log(currentUser);

    const toggleShowModal = () =>  setShowModal(!showModal);

    const [postData, setPostData] = useState({
        author: {
            id: currentUser.user.id,
            author: currentUser.user.name,
            image: currentUser.user.image
        },
        post: "",
        attached: ""
    })

    return (
        <div className='w-full mt-8 px-3 md:px-3'>

            <Modal
                postData={postData}
                setPostData={setPostData} 
                showModal={showModal}
                setShowModal={setShowModal}
                modalImage={modalImage}
                setModalImage={setModalImage}
            />

            <div className='w-full bg-white rounded-lg p-4'>
                <div className='flex gap-4 pt-2 pb-3 items-center'>
                    <img className='w-11 h-11 rounded-full object-cover' src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                    <div className='w-full'>
                        <input
                            onClick={toggleShowModal}
                            className='w-full border-0 outline-none p-4 rounded-xl bg-gray-50 text-gray-800 focus:ring-0 text-sm'
                            type="text"
                            value={postData.post}
                            placeholder="Post something" />
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