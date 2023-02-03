import React, { useState } from 'react'
import devopslogo from "../../public/assets/logo-dark.png";

import { Link } from 'react-router-dom';

const Header = () => {

    const [toggleNavbar, setToggleNavbar] = useState(false);

    const handleToggleNavbar = () => {
        setToggleNavbar(!toggleNavbar);
    }

    return (
        <header className='w-[90%] mx-auto '>
            <div className='min-h-[90px] w-full flex justify-between items-center pt-2'>
                <div>
                    <img src={devopslogo} className='w-16 h-10 lg:w-24 lg:h-11' alt="Devops logo" />
                </div>
                <nav className='hidden lg:block'>
                    <ul className='flex gap-8 text-[14px] text-white uppercase font-normal tracking-widest relative'>
                        <li className='relative'><Link className="activeNavLink font-semibold" to="#">Home</Link></li>
                        <li className='relative'><Link className="navLink" to="#">Our story</Link></li>
                        <li className='relative'><Link className="navLink" to="#">DevOps</Link></li>
                        <li className='relative'><Link className="navLink" to="#" >Our Team</Link></li>
                        <li className='mx-2'>
                            <Link to="/signin" className='bg-gradient-to-br from-[#4bacfd] to-[#cb236d] hover:bg-gradient-to-bl text-white py-3 text-[12px] px-3 rounded-md font-semibold'>Join us</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={handleToggleNavbar} className='lg:hidden'>
                    {
                        !toggleNavbar ? (
                            // <HiMenu className='text-gray-50 text-5xl cursor-pointer' />
                            <div className='relative flex flex-col gap-[6px]'>
                                <span className='right-0 relative w-10 h-[5px] bg-white rounded-md'></span>
                                <span className='right-0 relative w-10 h-[5px] bg-white rounded-md'></span>
                                <span className='right-0 relative w-10 h-[5px] bg-white rounded-md'></span>
                            </div>
                        ) : (
                            // <MdClose className='text-gray-50 text-5xl cursor-pointer' />
                            <div className='relative flex flex-col gap-[6px]'>
                                <div className='hamburger absolute right-0 top-0 w-10 h-[5px] bg-white rounded-md rotate-45'></div>
                                <div className='hamburger absolute right-0 top-0 w-10 h-[5px] bg-white rounded-md -rotate-45'></div>
                            </div>
                        )
                    }
                </div>
            </div>

            {toggleNavbar && (
                <div className='w-full h-auto'>
                    <nav className='lg:hidden flex justify-center mt-10'>
                            <ul className=' flex flex-col gap-8 text-sm text-center text-white uppercase font-normal tracking-widest relative'>
                            <li className='relative'><Link className="activeNavLink font-semibold" to="#">Home</Link></li>
                            <li className='relative'><Link className="navLink" to="#">Our story</Link></li>
                            <li className='relative'><Link className="navLink" to="#">DevOps</Link></li>
                            <li className='relative'><Link className="navLink" to="#" >Our Team</Link></li>
                            <li><Link to="/signin" className='navLink'>Join us</Link></li>
                        </ul>
                    </nav>
                </div>
            )
            }
        </header>
    )
}

export default Header