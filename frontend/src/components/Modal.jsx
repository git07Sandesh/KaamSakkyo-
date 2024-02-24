import React from 'react'
function Modal(props) {
  return (props.trigger) ? (
    <div className='fixed top-[0] left-[0] w-[100%] h-[100vh] flex justify-center items-center z-20 bg-[rgba(0,0,0,0.5)]'>
      <div className="relative p-[32px] w-[100%] h-auto max-w-[360px]  bg-[#73E2A7]">
        <button className="absolute top-[16px] right-[16px] border-solid" onClick={()=>props.setTrigger(false)}>Close</button>
        { props.children }
      </div>
    </div>
  ) : "" ;
}

export default Modal