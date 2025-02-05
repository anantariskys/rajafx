import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'
import HubungiIMG from '@/assets/hubungi-img.png'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
const Hubungi = () => {
  return (
    <div className="pt-48">
    <SectionLayout
      title="Hubungi kami"
      subTitle="Tim ahli kami siap melayani dan memberikan pengalaman berharga untuk investasi anda"
      >
        <main className='w-full flex bg-[#FAFAFA] rounded-xl p-4 justify-between items-end'>
            <div className='max-w-3xl border space-y-6 w-full p-4 bg-white rounded-xl'>
                <p className='text-[#11592B] bg-[#E6F7E8] py-2 px-4 w-fit rounded-lg font-semibold '>RajaFX Customer Service</p>
                <div className='space-y-2 text-lg font-semibold'>
                    <div className='flex items-center gap-4'>
                        <Icon className='text-3xl' icon={'ic:baseline-whatsapp'}/>
                        <p>0812-3456-7890</p>   
                    </div>

                    <div className='flex items-center gap-4'>
                        <Icon className='text-3xl' icon={'ic:outline-email'}/>
                        <p>emailcontoh@gmail.com</p>   
                    </div>
                    <div className='flex items-center gap-4'>
                        <Icon className='text-3xl' icon={'majesticons:clock-line'}/>
                        <p>08.00 - 17.00</p>   
                    </div>

                </div>
            </div>
            <Image src={HubungiIMG} className='max-w-md' alt='hubungiImg' draggable={false}/>

        </main>
   
    </SectionLayout>
              </div>
  )
}

export default Hubungi
