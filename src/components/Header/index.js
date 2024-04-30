import React from 'react'
import Logo from '../Logo/Logo'
import { GrSearch } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='h-20 shadow-md'>
      <div className='h-full container mx-auto flex items-center justify-between px-4'>
        {/* Logo container*/}
       <Link to={""} ><div>
          <Logo />
        </div>
        </Link>
        {/* SearchBox Container */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
          <input
            type='text'
            placeholder='Search products...'
            className='w-full outline-none'
          />
          <div className='text-lg min-w-[50px] h-8 bg-yellow-500 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        {/* Icons */}
        <div className='flex items-center gap-5'>
          <div className='text-2xl cursor-pointer'>
            <FaCircleUser />
          </div>
          <div className='text-2xl cursor-pointer relative'>
            <span><HiShoppingCart /></span>
            <div className='text-xs bg-yellow-400 w-5 h-5 flex items-center justify-center text-white rounded-full absolute -top-2 -right-2'><p>0</p></div>
          </div>

          {/* Login button */}
          <div>
           <Link to={"/login"}><button className='bg-yellow-400 w-16 h-8 rounded-full text-white hover:bg-yellow-700 '>Login</button></Link> 
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header