import { Icon } from '@iconify/react/dist/iconify.js'
import React, { FC } from 'react'

interface Props {
    item:{
        icon:string,
        title:string,
        description:string
    }
}
const WhyCard:FC<Props> = ({item}) => {
  return (
    <div className="py-8 px-6 space-y-4 rounded-2xl bg-[#E8F1FD0D] bg-opacity-5 border border-[#6B6E73]">
        <div className='border bg-[#E8F1FD1A] bg-opacity-10 text-[#9AC2F8] text-2xl border-[#6B6E73] rounded-full p-4 w-fit'>
            <Icon icon={item.icon}/>
        </div>
        <h3 className='text-white text-3xl font-semibold'>{item.title}</h3>
        <p className='text-[#C7C8CA] text-lg'>{item.description}</p>
    </div>
  )
}

export default WhyCard
