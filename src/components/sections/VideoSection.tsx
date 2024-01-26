/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MainButton from '../common/MainButton';
function VideoSection() {
  return (
   <section className='flex flex-col md:flex-row justify-between items-center gap-8 mt-[10rem]'>
    <div>
      <p className='block text-lightBlue font-bold text-2xl mb-4'>Many Blocks and <br/> Components</p>
      
      <p className='text-customGray mb-4 mt-8 text-[18px]'>Startup Framework contains components and complex <br/> blocks which can easily be integrated into almost any design. </p>
      <MainButton text='Explore'  classes='hover:bg-white h-[48.247px] w-[132.68px] text-lightBlue font-bold text-[16px] rounded-[100px] bg-white border-[3px] border-[#EBEAED]'/>
    </div>
    <div>
      <img src="/images/video_player.png" alt=""  />
    </div>
   </section>
  )
}

export default VideoSection