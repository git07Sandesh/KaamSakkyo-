import React, { useState } from 'react';
import Modal from '../components/Modal';
import Sidenav from '../components/Sidenav';

function GroupPage() {
  const [showRoommatesModal, setShowRoommatesModal] = useState(true);
  const [showTasksModal, setShowTasksModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [roommateInputs, setRoommateInputs] = useState([]);
  const [taskInputs, setTaskInputs] = useState([]);
  const [inviteModal, setInviteModal] = useState(false);

  const handleRoommatesSubmit = (e) => {
    e.preventDefault();
    setShowRoommatesModal(false);
    setShowTasksModal(true);
  };

  const handleTasksSubmit = (e) => {
    e.preventDefault();
    setShowTasksModal(false);
  };

  const handleRoommateChange = (e, index) => {
    const newRoommateInputs = [...roommateInputs];
    newRoommateInputs[index] = e.target.value;
    setRoommateInputs(newRoommateInputs);
  };

  const addRoommate = () => {
    setRoommateInputs([...roommateInputs, '']);
  };

  const handleTaskChange = (e, index) => {
    const newTaskInputs = [...taskInputs];
    newTaskInputs[index] = e.target.value;
    setTaskInputs(newTaskInputs);
  };

  const addTask = () => {
    setTaskInputs([...taskInputs, '']);
  };

  const tasksPerMember = Math.ceil(taskInputs.length / (roommateInputs.length + 1));

  return (
    <div>
      <Sidenav />
      <div className='fixed w-full max-w-[100%] left-[8rem] lg:left-[12rem] flex text-[#444444] h-[4rem] bg-[#def4c6]'>
      </div>
      <div className='fixed w-full left-[8rem] lg:left-[12rem] flex flex-row h-full gap-4 top-[4rem] z-0 bg-[#9eeac2]'>
      </div>

      <div className='overflow-clip'>
        {showRoommatesModal && (
          <Modal trigger={true} setTrigger={setShowRoommatesModal} className="h-auto">
            <div className='relative top-[-16px] left-[6px]'>
              Enter Your Name
            </div>
            <div className='relative flex flex-col items-center justify-between mt-6'>
              <input
                className='w-[16rem] h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                type="text"
                placeholder='Enter your name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {roommateInputs.map((input, index) => (
                <div key={index}>
                  <input
                    className='w-[16rem] h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                    type="text"
                    placeholder={`Enter roommate ${index + 1}'s name`}
                    value={input}
                    onChange={(e) => handleRoommateChange(e, index)}
                  />
                </div>
              ))}
              <div className='flex flex-row gap-6'>
                <button className='w-32 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={addRoommate}>Add Roommate</button>
                <button className='w-24 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={handleRoommatesSubmit}>Next</button>
              </div>
            </div>
          </Modal>
        )}

        {showTasksModal && (
          <Modal trigger={true} setTrigger={setShowTasksModal}>
            <div className='relative top-[-16px] left-[6px]'>
              Enter Task
            </div>
            <div className='relative flex flex-col items-center justify-between mt-6'>
              {taskInputs.map((input, index) => (
                <div key={index}>
                  <input
                    className='w-[16rem] h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                    type="text"
                    placeholder={`Enter task ${index + 1}`}
                    value={input}
                    onChange={(e) => handleTaskChange(e, index)}
                  />
                </div>
              ))}
              <div className='flex flex-row gap-6'>
                <button className='w-32 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={addTask}>Add Task</button>
                <button className='w-24 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]' onClick={handleTasksSubmit}>Submit</button>
              </div>
            </div>
          </Modal>
        )}
      </div>

      {!showRoommatesModal && !showTasksModal && (
          <>
            <div className='fixed w-screen left-[12rem] flex text-[#444444] justify-around h-[4rem]'>
              <div className='flex items-center '>
                Hi {userName}, welcome to your Group
              </div>
              <div className='flex align-bottom'>
                <button onClick = {() => setInviteModal(true)}>
                  Invite Friends
                </button>
              </div>
            </div>
            <Modal trigger = {inviteModal} setTrigger = {setInviteModal}>
            <div className='relative flex flex-col items-center justify-between mt-10'>
                <input
                  className='w-48 h-8 p-5 m-4 rounded-3xl  text-lg font-semibold'
                  type="email"
                  placeholder="Enter the email id"
                />
                <button
                  className='w-32 h-12 rounded-xl font-bold hover:cursor-pointer bg-[#6ccff6]'
                >
                  Invite
                </button>
              </div>    
            </Modal>

            <div className='fixed w-full items-center left-[8rem] lg:left-[12rem] flex flex-col gap-4 top-[4rem] align-middle z-0'>
                <div className='flex w-full h-8 flex-row bg-[#a8acaa] justify-center '>
                    <div className='w-[40%] ml-8 '>Members</div>
                    <div className='w-[50%]'>Assigned Task</div>
                    <div className='w-[30%]'>Due Date</div>
                </div>
                {[userName, ...roommateInputs].map((person, index) => (
                    <div key={index} className='flex w-full flex-row justify-center'>
                        <div className='w-[40%] ml-8 '>{person}</div>
                        <div className='w-[50%]'>
                            {taskInputs.slice(index * tasksPerMember, (index + 1) * tasksPerMember).map((task, taskIndex) => (
                                <div key={taskIndex}>{task}</div>
                            ))}
                        </div>
                        <div className='w-[30%]'>date</div>
                    </div>
                ))}
                
            </div>
            
          </>
        )}
    </div>
  );
}

export default GroupPage;
