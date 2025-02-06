import React, { FC } from 'react'
import Button from './Button'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props{
    item:{
        name:string,
        description:string,
        minimum_deposit:string,
        image:StaticImageData
    }
    link :string
}
const JenisAkunCard:FC<Props> = ({item,link}) => {
  return (
    <div
    className=" w-full gap-8 bg-white flex flex-col justify-between rounded-lg p-6 border"
  >
    <div>
      <Image
        src={item.image}
        alt={item.name}
        className="w-28 aspect-square object-contain mx-auto"
        draggable={false}
      />
      <h4 className="font-semibold text-2xl text-center">
        {item.name}
      </h4>
      <p className="text-center text-[#6B6E73]">{item.description}</p>
    </div>
    <div className="font-semibold space-y-2">
      <p className=" text-center">
        Minimum Deposit {item.minimum_deposit}
      </p>
      <Link href={link}>
      <Button width="w-full">Lihat lebih lengkap</Button>
      </Link>
    </div>
  </div>
  )
}

export default JenisAkunCard
