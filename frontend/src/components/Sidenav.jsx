import React, { useState } from 'react';

export default function Sidenav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='fixed w-32 lg:w-48 flex flex-col justify-between text-neutral-200 h-full z-10 bg-[#1C7C54]'>
      <button
        className='lg:hidden p-2 text-white absolute right-0 mr-4 mt-4'
        onClick={toggleSidebar}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          )}
        </svg>
      </button>
      <h2 className='hidden lg:block fixed w-30 m-9 text-xl font-bold text-neutral-200'>
        Dashboard
      </h2>
      <div
        className={`lg:relative mt-14 pl-4 pt-10 flex flex-col flex-1 ${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <button className='flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700'>
          <span className='text-neutral-200 text-sm ml:2 lg:text-lg font-bold lg:ml-4'>Home</span>
        </button>
        <button className='flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700'>
          <span className='text-neutral-200 text-sm ml:2 lg:text-lg font-bold lg:ml-4'>History</span>
        </button>
        <button className='flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700'>
          <span className='text-neutral-200 text-sm ml:2 lg:text-lg font-bold lg:ml-4'>Friends</span>
        </button>
        <button className='flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700'>
          <span className='text-neutral-200 text-sm ml:2 lg:text-lg font-bold lg:ml-4'>Settings</span>
        </button>
        <button className='flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700'>
          <span className='text-neutral-200 text-sm ml:2 lg:text-lg font-bold lg:ml-4'>Support</span>
        </button>
        <button className='flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700'>
          <span className='text-neutral-200 text-sm ml:2 lg:text-lg font-bold lg:ml-4'>Privacy</span>
        </button>
        <div className='absolute bottom-0 pt-10 flex lg:block'>
          <button className='flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700'>
            <span className='text-neutral-200 text-sm ml:2 lg:text-lg font-bold lg:ml-4'>About Us</span>
          </button>
        </div>
      </div>
    </div>
  );
}
