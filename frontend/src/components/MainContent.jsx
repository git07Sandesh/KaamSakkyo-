import React from 'react'
import Center from './Contents/Center'
import UserProfile from './Contents/UserProfile'

export default function MainContent() {
  return (
      <div className="fixed w-full left-[12rem] flex flex-row text-[#444444] justify-between h-[6rem] z-20 bg-[#def4c6]">
        <header>
            <div className='fixed top-[30px] flex flex-row'>
                <div className='pl-3 hover:cursor-pointer hover:scale-150 transition duration-150 ease-in-out'> 
                <button>
                <img className= "cursor-pointer h-[30px] w-[30px] object-cover" src= "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile"></img>
                </button>
                </div>
                <div className="relative top-[-8px] flex flex-col items-start pl-4">
                Hi there,
                <span className='mt-[4px]'><h3 className='ml-3 text-xl font-bold'>username</h3></span>
                </div>
            </div>

            <div>
                <UserProfile />
            </div>
        </header>
            
            <div>
                <Center />
            </div>
        </div>
    
  )
}
