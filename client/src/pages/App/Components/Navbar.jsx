import React, { useEffect, useState } from 'react'
import devopsLogo from "../../../../public/assets/logo.png";

import { FiSearch } from "react-icons/fi";
import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/Io';
import { IoVideocamOutline } from "react-icons/io5"
import { TbMinusVertical } from "react-icons/tb";

import { CgMenuRight } from "react-icons/cg";
import { useStateContext } from '../../../context/StateContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { currentUser, setCurrentUser, } = useStateContext();

    const [navbarMenu, setNavbarMenu] = useState(false);

    const navigate = useNavigate();

    const navMenuEventListener = (e) => {
        if (e.target.id === "navbarMenu") {
            setNavbarMenu(!navbarMenu)
        } else if (navbarMenu) {
            setNavbarMenu(!navbarMenu);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', navMenuEventListener);
        return () => {
            document.body.removeEventListener('click', navMenuEventListener);
        }
    }, [navbarMenu])

    const logOut = () => {
        localStorage.removeItem("currentUser");
        navigate("/signin");
    }

    return (
        <div className='w-full bg-white h-16 flex justify-between items-center shadow-sm'>
            <div className='ml-6 md:ml-12 lg:ml-16 flex items-center gap-8'>
                <div>
                    <img src={devopsLogo} className='w-16 h-8' alt="Devops logo" />
                </div>
                <div className='hidden lg:flex items-center px-2 py-[2pxa] bg-gray-50 rounded-2xl w-[260px]'>
                    <FiSearch className='opacity-60 text-xl text-gray-700' />
                    <input className='bg-transparent border-0 text-gray-700 outline-none focus:ring-0 text-sm w-full' placeholder='Search something' type="text" name="search" />
                </div>
            </div>
            <div className='mr-6 md:mr-12 lg:mr-16 flex gap-4'>
                <ul className='flex items-center gap-8'>
                    <li className='hidden md:block cursor-pointer'>
                        <AiFillHome className='text-2xl text-blue-600' />
                    </li>
                    <li className='hidden md:block hover:bg-gray-100 p-2 rounded-full cursor-pointer'>
                        <IoVideocamOutline className='text-2xl text-gray-600' />
                    </li>
                    <li className='hidden md:block hover:bg-gray-100 p-2 rounded-full cursor-pointer'>
                        <IoMdNotificationsOutline className='text-2xl text-gray-600' />
                    </li>
                    <li className='hidden md:block hover:bg-gray-100 p-2 rounded-full cursor-pointer'>
                        <AiOutlineMessage className='text-2xl text-gray-600' />
                    </li>
                </ul>
                <div className='flex relative items-center gap-4'>
                    <div className='hidden md:block '>
                        <TbMinusVertical className='text-2xl text-gray-600 ' />
                    </div>
                    <div className='hidden md:flex items-center gap-4'>
                        <div >
                            <img className='w-10 h-10 rounded-full object-cover' src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000" alt="User" />
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='hidden lg:block font-semibold'>{currentUser?.user?.name}</div>
                            <IoIosArrowDown id='navbarMenu' className="text-md text-gray-900 cursor-pointer" />
                        </div>
                    </div>
                    {
                        navbarMenu && (
                            <div className='hidden absolute md:flex flex-col  w-[150px] right-0 top-10 bg-white rounded-lg shadow-md'>
                                <div className='text-sm p-3 text-gray-800 font-normal hover:bg-gray-50 rounded-t-lg'>Profile</div>
                                <div onClick={logOut} className='text-sm p-3 text-gray-800 font-normal hover:bg-gray-50 rounded-b-lg'>Logout</div>
                            </div>
                        )
                    }

                    <div className='md:hidden'>
                        <CgMenuRight className="text-2xl text-gray-900 cursor-pointer" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar