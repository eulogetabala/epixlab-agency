import React from 'react'
import MainButton from '../common/MainButton';

interface IProps{
    iconUrl:string;
    title:string;
    description:string;
    
}

function ServiceCard({iconUrl, title, description}: IProps) {
  return (
    <div className='flex flex-col rounded-lg gap-[1rem] pt-[1.91rem] pb-[2rem] items-center px-[2.56rem] shadow-md'>
        <div>
    <img src={iconUrl} alt="service" />
        </div>
        <p className="text-[2rem] font-[700]">{title}</p>
        <p className="text-normal">{description}</p>
        <MainButton text='Learn more'  classes='w-[10.125rem]'/>
    </div>
  )
}

export default ServiceCard