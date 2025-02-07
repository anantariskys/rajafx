import { Icon } from '@iconify/react/dist/iconify.js'
import React, { FC } from 'react'


interface BenefitCardProps {
    title:string,
    icon:string,
    description : string
}
const BenefitCard:FC<BenefitCardProps> = ({description,icon,title}) => {
  return (
    <div className='w-full flex gap-4 items-center'>
        <div className='bg-[#272E3B] text-2xl rounded-full p-4 text-[#25C660]'>
            <Icon icon={icon}/>
        </div>
        <div className='space-y-2 self-start'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='text-[#E8E8E9]'>{description}</p>
        </div>
      
    </div>
  )
}

export default BenefitCard
