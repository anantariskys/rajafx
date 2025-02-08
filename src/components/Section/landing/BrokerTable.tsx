import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import XM from "@/assets/xm2.png";
import Valetax from "@/assets/valetax.png";
const BrokerTable = () => {
  return (
    <section className="container md:text-base text-xs font-semibold flex md:flex-row flex-col justify-center md:gap-8 md:py-16">
    <div className="w-full   rounded-lg flex flex-col justify-start">
      <div className="p-6 flex flex-col items-start ">
      <div className="w-24 aspect-video"></div>
      <p>Regulator</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="">Headquarter</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="">Tipe Akun</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="">Min Deposit</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="">Max Leverage</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="">Account Currencies</p>
      </div>
      <div className="px-6 py-4 border-t ">
      </div>
    </div>
    <div className="w-full border rounded-lg flex flex-col justify-between">
      <div className="p-6 flex flex-col items-center ">
      <Image src={XM} className="w-24 aspect-video object-contain" alt="xm"/>
      <p>Belize FSC, DFSA</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">Belize</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">3 Tipe</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">5 USD</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">1:1000</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">ZAR, SGD, PLN HUF, AUD, CHF, 
        JPY, GBP, EUR, USD</p>
      </div>
      <div className="px-6 py-4 border-t font-normal ">
        <Button width="w-full">Buka Akun Sekarang</Button>
      </div>
    </div>
    <div className="w-full border rounded-lg flex flex-col justify-between">
      <div className="p-6 flex flex-col items-center ">
      <Image src={Valetax} className="w-24 aspect-video object-contain" alt="veletax"/>
      <p>Mauritius FSC, SVG FSA</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">Mauritius</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">6 Tipe</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">1 USD</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">1:2000</p>
      </div>
      <div className="px-6 py-4 border-t ">
        <p className="text-center">US Cent</p>
      </div>
      <div className="px-6 py-4 border-t font-normal">
        <Button width="w-full">Buka Akun Sekarang</Button>
      </div>
    </div>
    
  
    </section>
  )
}

export default BrokerTable
