import React from 'react';

export default function Sidenav() {
  return (
    
    <div className='fixed w-48 l-0 flex flex-col justify-between text-neutral-200 h-full z-10 bg-[#1C7C54]'>
        <h2 className='fixed w-30 m-9 text-xl font-bold text-neutral-200'>Dashboard</h2>
      <div className=' relative mt-14 pl-4 pt-10 flex flex-col flex-1'>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700">
            
            <span className='text-neutral-200 text-lg font-bold ml-4'>Home</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700">
            
            <span className='text-neutral-200 text-lg font-bold ml-4'>History</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700">
            
            <span className='text-neutral-200 text-lg font-bold ml-4'>Friends</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700">
            
            <span className='text-neutral-200 text-lg font-bold ml-4'>Settings</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700">
            
            <span className='text-neutral-200 text-lg font-bold ml-4'>Support</span>
          </button>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700">
            
            <span className='text-neutral-200 text-lg font-bold ml-4'>Privacy</span>
          </button>
      
        <div className='absolute bottom-0 pt-10 flex'>
          <button className="flex items-center bg-transparent border-0 m-1 p-3 rounded-lg  hover:cursor-pointer hover:bg-opacity-40 hover:bg-slate-700">
            
            <span className='text-neutral-200 text-lg font-bold ml-4'>About Us</span>
          </button>
        </div>
      </div>
    </div>

  )
}

