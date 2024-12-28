import React from 'react'

interface IProps {
  children: React.ReactNode
  title: string
  close: () => void
}

const Modal = ({children, title, close}:IProps) => {
  return (
    <div className=" z-30 fixed inset-0 flex items-center justify-center">
      <div className='z-40 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center' onClick={close}/>
      <div className='z-50 max-w-[400px] w-full min-h-[100px] bg-white rounded-lg shadow-xl p-4'>
        <div className='w-full text-blue-950 border-b-2 font-bold border-blue-950'>{title}</div>
        <div className='mt-5'>{children}</div>
      </div>
    </div>
  )
}

export default Modal