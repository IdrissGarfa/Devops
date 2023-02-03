import React from 'react'

import { parseISO, formatDistanceToNow } from "date-fns";

import { AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineShare } from 'react-icons/hi'

import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";


import { useStateContext } from '../../../../context/StateContext';
import { useState } from 'react';


const Post = ({ post }) => {

    const [postMenu, setPostMenu] = useState({
        status: false,
        postId: null
    });

    const { currentUser } = useStateContext();

    const formatPostDate = (timestamp) => {
        let timeAgo = ''
        if (timestamp) {
            const date = parseISO(timestamp)
            const timePeriod = formatDistanceToNow(date)
            timeAgo = `${timePeriod} ago`
        }
        return timeAgo;
    }

    const date = formatPostDate(post.createdAt);


    return (
        <div className='w-full bg-white rounded-lg p-4'>
            {/* Post header  */}
            <div className='relative flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img className='w-10 h-10 rounded-full object-cover cursor-pointer' src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                    <div className='flex flex-col gap-[2px]'>
                        <div className='font-semibold text-sm text-gray-800 cursor-pointer'>{post.author.author}</div>
                        <div className='font-normal text-[12px] text-gray-400'>{date}</div>
                    </div>
                </div>

                {/* {
                    currentUser.user.id === post.author.id &&
                    <div onClick={() => setPostMenu({ status: !postMenu.status, postId: post._id})}>
                        <FiMoreHorizontal className='text-xl text-gray-800 cursor-pointer' />
                    </div>
                }
                {
                    postMenu && (
                        <div className='hidden absolute md:flex flex-col  w-[150px] right-0 top-8 bg-white rounded-lg shadow-md'>
                            <div className='flex items-center gap-2 p-3 hover:bg-gray-50 rounded-t-lg cursor-pointer'>
                                <BiEdit className='text-gray-700' />
                                <div className='text-sm  text-gray-800 font-semibold'>Update post</div>
                            </div>
                            <div className='flex items-center   p-3 gap-2 hover:bg-gray-50 rounded-b-lg cursor-pointer'>
                                <RiDeleteBin6Line className='text-gray-700' />
                                <div className='text-sm  text-gray-800 font-semibold '>Delete post</div>
                            </div>
                        </div>
                    )
                } */}

            </div>
            {/* Post body  */}
            {
                post.post && (
                    <div className='my-2 mx-2'>
                        <p className='leading-6 text-[15px]'>
                            {post.post}
                        </p>
                    </div>
                )
            }
            {
                post.attached && (
                    <div className='my-2'>
                        <img className='rounded-lg w-full max-w-full h-auto max-h-[500px]' src={post.attached} alt="Post" />
                    </div>
                )
            }

            {/* Post footer  */}
            <div className='flex gap-5 p-2'>
                <div>
                    <AiFillHeart className='text-xl text-red-500 cursor-pointer' />
                </div>
                <div>
                    <FaRegComment className='text-xl text-gray-800 cursor-pointer' />
                </div>
                <div>
                    <HiOutlineShare className='text-xl text-gray-800 cursor-pointer' />
                </div>
            </div>


            <div>


            </div>

        </div>

    )
}

export default Post