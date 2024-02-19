import React, { useState } from 'react';
import Sidenav from '../components/Sidenav';
import Modal from '../components/Modal';

function GroupPage() {
  const [showRoommatesModal, setShowRoommatesModal] = useState(true);
  const [showTasksModal, setShowTasksModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [roommateInputs, setRoommateInputs] = useState([]);
  const [taskInputs, setTaskInputs] = useState([]);

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
      <div className='fixed w-full max-w-[100%] left-[12rem] flex text-[#444444] h-[4rem] bg-[#def4c6]'>
      </div>
      <div className='fixed w-full left-[12rem] flex flex-row h-full gap-4 top-[4rem] z-0 bg-[#9eeac2]'>
      </div>

      <div className='overflow-clip'>
        {showRoommatesModal && (
          <Modal trigger={true} setTrigger={setShowRoommatesModal}>
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
            <div className='fixed w-full max-w-[100%] left-[12rem] flex text-[#444444] h-[4rem] bg-[#def4c6]'>
              <div className='flex flex-row items-center w-[70%] justify-center'>
                Hi {userName}, welcome to your Group
              </div>
              <div className='flex flex-row items-center '>
                <button >
                  Invite Friends
                </button>
              </div>
            </div>

            <div className='fixed w-full items-center left-[12rem] flex flex-col gap-4 top-[4rem] align-middle z-0'>
                <div className='flex w-full h-8 flex-row bg-[#a8acaa] justify-center '>
                    <div className='w-[20%] '>Members</div>
                    <div className='w-[80%]'>Assigned Task</div>
                </div>
                {[userName, ...roommateInputs].map((person, index) => (
                    <div key={index} className='flex w-full flex-row justify-center'>
                        <div className='w-[20%] '>{person}</div>
                        <div className='w-[80%]'>
                            {taskInputs.slice(index * tasksPerMember, (index + 1) * tasksPerMember).map((task, taskIndex) => (
                                <div key={taskIndex}>{task}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
          </>
        )}
    </div>
  );
}

export default GroupPage;
