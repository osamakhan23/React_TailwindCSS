import React from 'react'
import heroimg from '../assets/images/heroimg.png'

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen">
      <div className='flex justify-center items-start flex-col gap-8 lg:px-20 lg:py-20'>
        <h1 className='text-custom-color font-bold text-6xl'>Nestle your website in the clouds.</h1>
        <p className='text-slate-90 text-2xl'>Elevate your online presence with us. Our cutting-edge infrastructure ensures your website flies high with reliability and speed.</p>
        <div className='flex justify-center items-center gap-7'>
          <button className='bg-custom-color text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>View More</button>
          <button className='border-2 border-custom-color text-custom-color text-[18px] rounded-md px-4 lg:px-8 py-3 hover:border-black hover:text-black cursor-pointer'>Watch Video</button>
        </div>
      </div>
      <div className='flex justify-center items-center w-1/2 px-5 py-20 object-cover'>
        <img src={heroimg} alt='Hero Image' width={500} height={500}/>
      </div>
    </section>
  )
}
