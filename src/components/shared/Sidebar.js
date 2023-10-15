import React from 'react'
import { TbSettings2 } from 'react-icons/tb'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation.js';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiChevronDown } from 'react-icons/hi';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-indigo-800 hover:no-underline active:bg-neutral-600 rounded-lg text-base'
const Sidebar = () => {
  return (
    <div className='bg-indigo-900 w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <TbSettings2 fontSize={24} />
        <span className='text-white text-lg'>Dashboard</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => {
          return (
            <SidebarLink key={item.key} item={item} />
          )
        })}
      </div>
      <div className='flex flex-col gap-0.5 pt-2 '>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => {
          return (
            <SidebarBottomLink key={item.key} item={item} />
          )
        })}
      </div>
    </div>
  )
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-indigo-800 text-white' : 'text-indigo-100', linkClasses)}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}
function SidebarBottomLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link to={item.path} className={classNames('bg-indigo-800', pathname === item.path ? 'bg-indigo-800 text-white' : 'text-indigo-100', linkClasses)}>
      <img src={item.img} alt='avatar' className='h-[2.1rem] rounded-full' />
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='text-xs'><strong>{item.label}</strong></div>
          <div className='text-xs text-gray-400'>{item.degination}</div>
        </div>
        <HiChevronDown className='items-center ml-11 mt-2' />
      </div>
    </Link>
  )
}

export default Sidebar;

