import React, { useState } from 'react'
import { BsImageFill } from 'react-icons/bs';
import { CgPoll } from 'react-icons/cg';
import { IoCloseOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdLibraryAdd } from "react-icons/md";

const Modal = ({ showModal, setShowModal }) => {

    const toggleModal = (e) => {
        console.log(e)
        if (e.target.id === "modalContainer") {
            setShowModal(!showModal);
        }
    }

    const [modalImage, setModalImage ] = useState(false);

    return (
        showModal ?
            (
                <div
                    className='bg-gray-100 w-full bg-opacity-30 fixed inset-0 z-50 h-screen'>
                    <div id='modalContainer' className='px-3 flex h-full justify-center items-center md:px-3' onClick={(e) => toggleModal(e)}>
                        <form className='w-full md:2/3 lg:w-[32%] bg-white rounded-lg p-4 shadow-md'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3'>
                                    <img className='w-11 h-11 rounded-full object-cover cursor-pointer' src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/319998606_844532930209108_8427934400275975120_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=psADqyzzMOIAX8q3fyb&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBRSIB7G1GEYPm_2OW0Nap7yblL52UBqJ5Hz9iQjxQsXw&oe=63CFC6C6" alt="User" />
                                    <div className='flex flex-col gap-[2px]'>
                                        <div className='font-semibold text-sm text-gray-800 cursor-pointer'>Rihab Naili</div>
                                        <div className='font-medium text-[12px] text-gray-500'>Oraganizer</div>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className='bg-gray-50 rounded-full p-1 cursor-pointer'>
                                    <IoCloseOutline className='text-xl text-gray-800'/>
                                </div>
                            </div>

                            <div className='my-2 flex'>
                                <textarea
                                    className='w-full py-2 px-0 border-0 outline-none focus:ring-0 resize-none'
                                    name="post"
                                    id="post"
                                    placeholder="What's on your mind, Rihab"
                                >
                                </textarea>
                            </div>

                            {
                                modalImage && (
                                    <div className='w-full rounded-md border border-dark-800 p-2'>
                                        <div className='w-full h-44 rounded-md bg-gray-50 p-1 flex flex-col justify-center items-center cursor-pointer'>
                                                <div className='bg-gray-200 rounded-full w-12 h-12 p-3'>
                                                    <MdLibraryAdd className='text-2xl text-gray-800'/>
                                                </div>
                                                <div className='text-sm my-1'>
                                                    Ajouter des photos/vidéos
                                                </div>
                                        </div>
                                    </div>
                                )
                            }

                            <div className='my-3 ml-1'>
                                <div className='flex gap-8 py-1'>
                                    <div onClick={() => setModalImage(!modalImage)} className='flex gap-3 items-center cursor-pointer'>
                                        <BsImageFill className='text-md text-green-400' />
                                        <span className='text-sm font-medium text-gray-600'>Image</span>
                                    </div>
                                    <div className='flex gap-3 items-center cursor-pointer'>
                                        <IoVideocamOutline className='text-md text-red-600' />
                                        <span className='text-sm font-medium text-gray-600'>Video<span className='hidden md:inline-block'>/ Gif</span></span>
                                    </div>
                                    <div className='flex gap-3 items-center cursor-pointer'>
                                        <CgPoll className='text-md text-orange-400' />
                                        <span className='text-sm font-medium text-gray-600'>Activity<span className='hidden md:inline-block'>/ Poll</span></span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    className='w-full bg-indigo-600 text-sm rounded-md py-2 text-white font-medium'
                                >Publier
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null
    )
}

export default Modal