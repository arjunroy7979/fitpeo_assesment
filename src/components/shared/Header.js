import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const Header = () => {
  return (
    <div className='bg-neutral-100 h-16 px-4 flex justify-between items-center '>
      <div>
        <strong>Hello Arjun👋,</strong>
      </div>
      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
        <input type='search' placeholder=' Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[20rem] border border-gray-300 rounded-lg pl-11 pr-4 ' />
      </div>
    </div>
  )
}

export default Header;
