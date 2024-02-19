import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import Modal from '../Modal';

export default function Center() {
    const [isCreatingGroup, setCreatingGroup] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [createdGroups, setCreatedGroups] = useState([]);
  
    const [buttonPopup, setButtonPopup] = useState(false);
  
    const handleGroupNameChange = (event) => {
      setGroupName(event.target.value);
    };
  
    const handleCreateButtonClick = () => {
      if (groupName.trim() !== '') {
        // Handle the logic for creating the group with the entered group name
        console.log('Creating group with name:', groupName);
  
        // Update the list of created groups
        setCreatedGroups([...createdGroups, groupName]);
  
        setButtonPopup(false);
  
        // Reset the state after creating the group
        setCreatingGroup(false);
        setGroupName('');
      }
    };
  
    return (
      <div className='fixed w-full left-[12rem] flex flex-col h-full top-[6rem] z-0 bg-[#73E2A7]'>
        <div className='flex m-3 p-2 font-extrabold'>My Groups</div>
        <div className='ml-4 p-3 flex flex-wrap'>
          {createdGroups.map((group, index) => (
            <div key={index} className='m-2 p-3 w-48 h-48 rounded-3xl bg-[#6ccff6]'>
              <Link to={`/${group}`} className='flex justify-center p-1 font-bold hover:text-teal-300 '>
                {group}
              </Link>
              <div className='relative flex flex-row justify-end top-[7rem] gap-1'> 
                <button>sum</button>
                <button>sort</button>
                <button>share</button>
              </div>
            </div>
          ))}
  
          {isCreatingGroup ? "" : (
            <> 
              <button
                className='m-2 p-3 w-48 h-48 font-extrabold rounded-3xl bg-[#6ccff6]'
                onClick={() => setButtonPopup(true)} 
              >
                Create Group +
              </button>
              <Modal trigger={buttonPopup} setTrigger={setButtonPopup} className="fixed flex">
                <div className='relative flex flex-col items-center justify-between mt-10'>
                  <input
                    className='w-36 h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                    type="text"
                    placeholder="Group name"
                    value={groupName}
                    onChange={handleGroupNameChange}
                  />
                  <button
                    className='w-32 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]'
                    onClick={handleCreateButtonClick}
                  >
                    Create Group
                  </button>
                </div>
              </Modal>
            </>
          )}
        </div>
      </div>
    );
}
