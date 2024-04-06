import React from 'react'

export const AboutGrid = ({icon, text, label, heading}) => {
  return (
    <div className='flex justify-center items-center gap-5 flex-col bg-white rounded-lg m-2 p-3 lg:p-7'>
        <img src={icon} width={65} height={65} className='bg-pink-200 p-3 rounded-full hover:bg-pink-300 cursor-pointer'/>
        <h1 className='text-2xl lg:text-3xl text-center text-custom-color font-semibold'>{heading}</h1>
        <p className='text-[18px] text-center text-slate-700'>{text}</p>
        <p className='bg-custom-color text-white px-6 py-2 rounded-md text-[16px] hover:bg-black hover:text-white cursor-pointer'>{label}</p>
    </div>
  )
}
