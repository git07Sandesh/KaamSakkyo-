import React from 'react';
import Center from './Contents/Center';
import UserProfile from './Contents/UserProfile';

export default function MainContent() {
  return (
    <div className="fixed w-full left-[8rem] lg:left-[12rem] flex flex-row text-[#444444] justify-between h-[6rem] z-20 bg-[#def4c6]">
      <header className="flex items-center justify-between w-full px-4 lg:px-6">
        <div className="flex items-center">
          <button className="p-2 hover:cursor-pointer hover:scale-150 transition duration-150 ease-in-out">
            <img
              className="cursor-pointer h-8 w-8 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
            />
          </button>
          <div className="flex flex-col items-start ml-3">
            <span className="text-sm">Hi there,</span>
            <h3 className="text-lg font-bold">username</h3>
          </div>
        </div>
        <div>
          <UserProfile />
        </div>
      </header>
      <div className="w-full px-4 lg:px-6">
        <Center />
      </div>
    </div>
  );
}
