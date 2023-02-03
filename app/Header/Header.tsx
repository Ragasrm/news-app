import React from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import "./Header.css"
import Navlink from '../NavLinks/Navlink';
import SearchBar from '../SearchBar/SearchBar';
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn';


function Header() {
  return (
    <header>
      <div className='flex p-2'>
        <Bars3Icon className='h-8 w-8 cursor-pointer align-middle' />
        <Link className='items-center grow mt-1 sm: text-center' href={"/"} prefetch={false}>
          <h1 className='font-serif text-2xl text-center'>Ragave <span className='underline decoration-6 decoration-orange-400'>News</span> Forum</h1>
        </Link>
        <div className='flex items-center justify-end space-x-2'>
          {/* <h2>Ragva</h2> */}
          <DarkModeBtn/>
        <button className='hidden 
        md:block bg-slate-900 text-white px-4 items-end lg:px-8 py-1  lg:py-2 rounded-full dark:bg-slate-800'>
          subcribe now
        </button>
        </div>
      </div>
      <Navlink />
      <SearchBar/>
    </header>
  )
}

export default Header