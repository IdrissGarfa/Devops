import { Link } from "react-router-dom";
import devopslogo from "/public/assets/logo-dark.png";

import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
      <div className="w-full py-20">
          <div className="w-[90%] mx-auto grid gap-10 lg:gap-0 lg:justify-items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
              <div className="flex flex-col gap-4 mb-4 md:mb-0 md:order-1 lg:order-1">
                <div className="flex items-center flex-wrap gap-6">
                  <img src={devopslogo} className='w-20 h-11 lg:w-24 lg:h-12' alt="Devops logo"/>
                  <h1 className="w-[200px] text-3xl text-white font-semibold">DevOps Community</h1>
                </div>
                <div>
                  <p className="text-gray-500 text-xl">Lorem ipsum, dolor sit amet consectetut.</p>
                </div>
              </div>
              <div className="md:order-3 lg:order-2">
                  <h2 className="text-[#686b7a] font-semibold text-2xl mb-6">Community</h2>
                  <ul className="flex flex-col gap-6">
                    <li><Link className="text-white text-xl">Our Story</Link></li>
                    <li><Link className="text-white text-xl">Events</Link></li>
                    <li><Link className="text-white text-xl">DevOps</Link></li>
                    <li><Link className="text-white text-xl">Blog</Link></li>
                  </ul>
              </div>
              <div className="md:order-4 lg:order-3">
                  <h2 className="text-[#686b7a] font-semibold text-2xl mb-6">Ressources</h2>
                  <ul className="flex flex-col gap-6">
                    <li><Link className="text-white text-xl">Apps</Link></li>
                    <li><Link className="text-white text-xl">Developer</Link></li>
                    <li><Link className="text-white text-xl">Integration</Link></li>
                    <li><Link className="text-white text-xl">Community</Link></li>
                  </ul>
              </div>
              <div className="md:order-2 lg:order-4">
                  <h2 className="text-[#686b7a] font-semibold text-2xl mb-6">Contact</h2>
                  <ul className="flex flex-col gap-6">
                    <li>
                      <Link className="text-white text-xl flex items-center gap-4">
                        <MdOutlineEmail className="text-gray-300 text-2xl"/>
                        devopsisima@gmail.com
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white text-xl flex items-center gap-4">
                        <FiPhoneCall  className="text-gray-300 text-2xl" />
                        54 902 901
                      </Link>
                    </li>
                    <li className="flex items-center gap-6">
                      <Link className="border-2 border-[#686b7a] rounded-full p-3 hover:bg-[#686b7a] transition duration-150">
                        <FaFacebookF className="text-white text-2xl"/>
                      </Link>
                      <Link className="border-2 border-[#686b7a] rounded-full p-3 hover:bg-[#686b7a] transition duration-150">
                        <AiOutlineTwitter className="text-white text-2xl"/>
                      </Link>
                      <Link className="border-2 border-[#686b7a] rounded-full p-3 hover:bg-[#686b7a] transition duration-150">
                        <BsInstagram className="text-white text-2xl"/>
                      </Link>
                    </li>
                  </ul>
              </div>
              
          </div>
      </div>
    )
}

export default Footer 