/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Separator } from '../ui/separator'

function FooterSection() {
  return (
    <section className='flex flex-col gap-[1.9rem] w-full mt-24'>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/footer_logo.png" alt="" />
        </div>
        <p className='text-lightBlue text-normal font-serif'> © 2020 Epixelab. All rights reserved.</p>
        <div className='flex gap-4'>
          <p className='text-lightBlue text-normal'>Portfolio</p>
          <p className='text-lightBlue text-normal'>How it Works</p>
          <p className='text-lightBlue text-normal'>Pricing</p>
          <p className='text-lightBlue text-normal'>About</p>
          <p className='text-lightBlue text-normal'>Login</p>
        </div>
      </div>
      <Separator/>
      <div className='pb-[2.56rem]'>
        <p className='text-customGray items-center'>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
      </div>
    </section>
  )
}

export default FooterSection