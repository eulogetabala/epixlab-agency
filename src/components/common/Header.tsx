import React from 'react'


interface IProps {
    title:string;
    subtitle:string;

}

function Header( {title, subtitle}: IProps) {
  return (
    <div className='flex gap-2 flex-col'>
        <p className='text-customGray uppercase tracking-[0.39375rem] my-3 md:my-6 text-[0.875rem] font-[700] text-center'>{title}</p>
        <p className='text-darkBlue text-2xl md:text-[52px] font-[700] text-center' >{subtitle}</p>
    </div>
  )
}

export default Header