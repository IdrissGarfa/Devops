import React, { useState } from 'react'
import devopslogo from "/public/assets/logo-dark.png";

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
                    <Link to="#"><img src={devopslogo} className='w-20 h-11 lg:w-24 lg:h-12' alt="Devops logo" /></Link>
                </div>
                <nav className='hidden lg:block'>
                    <ul className='flex gap-8 text-[14px] text-white uppercase font-normal tracking-widest relative'>
                        <li className='relative'><a className="activeNavLink font-semibold" href="#home">Home</a></li>
                        <li className='relative'><a className="navLink" href="#ourStory">Our story</a></li>
                        <li className='relative'><a className="navLink" href="#">DevOps</a></li>
                        <li className='relative'><a className="navLink" href="#ourTeam" >Our Team</a></li>
                        <li className='mx-2'>
                            <Link to="/signin" className='bg-gradient-to-br from-[#4bacfd] to-[#cb236d] hover:bg-gradient-to-bl text-white py-3 text-[12px] px-3 rounded-md font-semibold'>Join us</Link>
                        </li>
                    </ul>
                </nav>
                <div className='lg:hidden'>
                    <button
                        onClick={handleToggleNavbar}
                        className={`${toggleNavbar ? 'toggleMenu' : ''} text-3xl relative w-8 h-8 cursor-pointer`}
                    >
                        <div
                            className='bg-white w-8 h-1 rounded
                        absolute top-4 -mt-0.5 transition-all
                        duration-500 before:content-[""]
                        before:bg-white before:w-8 before:h-1
                        before:rounded before:absolute
                        before:-translate-x-4
                        before:-translate-y-3
                        before:transition-all
                        before:duration-500

                        after:content-[""]
                        after:bg-white after:w-8 after:h-1
                        after:rounded after:absolute
                        after:-translate-x-4
                        after:translate-y-3
                        after:transition-all
                        after:duration-500

                        '
                        ></div>
            </button>
        </div>
            </div >

    <div className={`w-full h-auto ${toggleNavbar ? 'block' : 'hidden'}`}>
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
        </header >
    )
}

export default Header