import React from 'react';

import { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(false);

  const handleAvatarClick = () => {
    // Toggle the user state
    setUser(!user);
  };

  return (
    <div>
      <div className='fixed right-[10px] top-7 flex flex-row  z-0'>
        <div>
          <button
            onClick={handleAvatarClick}
            className='inline-flex items-center justify-center hover:scale-75 focus:ring transition duration-150 ease-in-out'
          >
            <img
              className='cursor-pointer rounded-3xl w-[40px] h-[40px]'
              src='https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='logo'
            ></img>
          </button>
        </div>
      </div>
      {!user ? (
        ''
      ) : (
        <div className='fixed right-[0rem] w-[10rem] top-[6rem] flex flex-col items-center z-10 bg-[#6ccff6] rounded-xl'>
          <div className=' flex flex-row mt-3'>
            <img
              className='rounded-xl w-[40px] h-[40px]'
              src='https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='logo'
            ></img>
            <h4 className='ml-3 font-bold mt-2'>username</h4>
          </div>
          <hr className='mt-3 w-[8rem]' />

          <div className='relative mt-3 flex flex-col justify-evenly z-10'>
            <a href='/img' className='mt-4 mb-4 '>
              
              <span className='ml-[12px] font-semibold rounded-lg p-2 hover:cursor-pointer hover:bg-slate-500'>
                Edit Profile
              </span>
            </a>
            <a href='/img' className='mt-2 mb-4 '>
              
              <span className='ml-[12px] font-semibold rounded-lg p-2 hover:cursor-pointer hover:bg-slate-500'>
                LogOut
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
