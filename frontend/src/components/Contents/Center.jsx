import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you need it in the commented section

import Modal from '../Modal';

export default function Center() {
  const [isCreatingGroup, setCreatingGroup] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [createdGroups, setCreatedGroups] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/tasks/');
        const json = await response.json();
        if (response.ok) {
          console.log(json._id)
          setCreatedGroups(json);
        } else {
          // Handle server errors (e.g., 4xx or 5xx errors)
          console.error('Server error:', response.status);
        }
      } catch (error) {
        // Handle network errors
        console.log('hello')
        console.error('Network error:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  // Attempting to fetch existing groups


  const handleCreateButtonClick = async (e) => {
    e.preventDefault();
    if (groupName.trim() !== '') {
      console.log('Creating group with name:', groupName);
      setCreatedGroups([...createdGroups, { _id: Date.now().toString(), title: groupName }]); // Assuming a mock _id for demonstration
      const title = groupName;
      const newRoom = { title };
      const response = await fetch('/api/tasks/', {
        method: 'POST',
        body: JSON.stringify(newRoom),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json();
      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        console.log('new Room created successfully')
      }
      setButtonPopup(false);
      setCreatingGroup(false);
      setGroupName('');
    }
  };

  return (
    <div className='fixed w-full left-[12rem] flex flex-col h-full top-[6rem] z-0 bg-[#73E2A7]'>
      <div className='flex m-3 p-2 font-extrabold'>My Groups</div>
      <div className='ml-4 p-3 flex flex-wrap'>
        {createdGroups.map((group) => (
          <div key={group._id} className='m-2 p-3 w-48 h-48 rounded-3xl bg-[#6ccff6]'>
            <Link to={`/${group.title}`}>
              {group.title}
            </Link>
            <div className='relative flex flex-row justify-end top-[7rem] gap-1'>
              <button>sum</button>
              <button>sort</button>
              <button>share</button>
            </div>
          </div>
        ))}

        {!isCreatingGroup && (
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
