import React, { useState } from 'react'
import axios from "axios";

import { BsImageFill } from 'react-icons/bs';
import { CgPoll } from 'react-icons/cg';
import { IoCloseOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdLibraryAdd } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from '../../../../features/posts/postsSlice';
import { useStateContext } from '../../../../context/StateContext';

const Modal = ({ showModal, setShowModal, postData, setPostData, modalImage, setModalImage }) => {

    const { currentUser } = useStateContext();

    const dispatch = useDispatch();

    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const toggleModal = (e) => {
        if (e.target.id === "modalContainer") {
            setShowModal(!showModal);
        }
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleFileRead = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        setPostData({ ...postData, attached: base64 });
    };

    const handleChange = (event) => {
        setPostData({ ...postData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setAddRequestStatus('pending');
            dispatch(addNewPost({ body: postData })).unwrap();
            setPostData({
                ...postData,
                post: "",
                attached: ""
            })
            setModalImage(false);
            setShowModal(false);
        } catch (error) {
            console.error('Failed to save the post', error);
        } finally {
            setAddRequestStatus("idle");
        }

    };

    return (
        showModal ?
            (
                <div
                    className='bg-gray-100 w-full bg-opacity-30 fixed inset-0 z-50 h-screen'>
                    <div id='modalContainer' className='px-3 flex h-full justify-center items-center md:px-3' onClick={(e) => toggleModal(e)}>
                        <form className='w-full md:2/3 lg:w-[32%] bg-white rounded-lg p-4 shadow-md' onSubmit={handleSubmit}>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3'>
                                    <img className='w-11 h-11 rounded-full object-cover cursor-pointer' src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                                    <div className='flex flex-col gap-[2px]'>
                                        <div className='font-semibold text-sm text-gray-800 cursor-pointer'>{currentUser.user.name}</div>
                                        <div className='font-medium text-[12px] text-gray-500'>Editor</div>
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(!showModal)} className='bg-gray-50 rounded-full p-1 cursor-pointer'>
                                    <IoCloseOutline className='text-xl text-gray-800' />
                                </div>
                            </div>

                            <div className='my-2 flex'>
                                <textarea
                                    className='w-full py-2 px-0 border-0 outline-none focus:ring-0 resize-none'
                                    name="post"
                                    id="post"
                                    onChange={handleChange}
                                    value={postData.post}
                                    placeholder={`What's on your mind, ${currentUser.user.name.split(" ")[0]}`}
                                >
                                </textarea>
                            </div>

                            {
                                modalImage && (
                                    <div className='w-full rounded-md border border-dark-800 p-2'>
                                        {
                                            postData.attached ? (
                                                <div className='relative w-full h-full rounded-md'>
                                                    <div onClick={() => setPostData({ ...postData, attached: "" })} className='absolute right-3 top-3 bg-gray-50 rounded-full p-1 cursor-pointer'>
                                                        <IoCloseOutline className='text-xl text-gray-800' />
                                                    </div>
                                                    <img className='rounded-md w-full h-full' src={postData.attached} alt="Post image" />
                                                </div>
                                            ) : (
                                                <div className='relative w-full h-44 rounded-md bg-gray-50 p-1 flex flex-col justify-center items-center'>
                                                    <div className='bg-gray-200 rounded-full w-12 h-12 p-3'>
                                                        <MdLibraryAdd className='text-2xl text-gray-800' />
                                                    </div>
                                                    <div className='text-sm my-1'>
                                                        Ajouter des photos/vidéos
                                                    </div>
                                                    <input className='opacity-0 absolute cursor-pointer w-full h-full' type="file" onChange={handleFileRead} />
                                                </div>
                                            )
                                        }

                                    </div>
                                )
                            }

                            <div className='my-3 ml-1'>
                                <div className='flex gap-8 py-1'>
                                    <div onClick={() => {
                                        setModalImage(!modalImage)
                                        console.log(modalImage);
                                    }} className='flex gap-3 items-center cursor-pointer'>
                                        <BsImageFill className='text-md text-green-400' />
                                        <span className='text-sm font-medium text-gray-600'>Image</span>
                                    </div>
                                    <div onClick={() => setModalImage(!modalImage)} className='flex gap-3 items-center cursor-pointer'>
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
                                    className='w-full bg-blue-600 text-sm rounded-md py-2 text-white font-medium'
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