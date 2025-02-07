import LayananCard from '@/components/valetax/LayananCard'
import { layananValetax } from '@/data/layanan'
import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'

const Layanan = () => {
  return (
   <SectionLayout title={<>Layanan <span className='text-[#25C660]'>Valetax</span></>}>
    <main className='grid md:grid-cols-2 max-w-5xl mx-auto gap-4'>
        {
            layananValetax.map((item, index) => (
               <LayananCard key={index} item={item}/>
            ))
        }

    </main>
   </SectionLayout>
  )
}

export default Layanan
