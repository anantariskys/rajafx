import LayananCard from '@/components/valetax/LayananCard'
import { layananValetax } from '@/data/layanan'
import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'

const Layanan = () => {
  return (
   <SectionLayout id='valetax-layanan' title={<>Layanan <span className='text-[#25C660]'>Valetax</span></>}>
    <main className='grid md:grid-cols-2 max-w-5xl mx-auto gap-4'>
        {
            layananValetax.map((item, index) => (
               <LayananCard link={index === 0 ? '/valetax/jenis-akun' : index===1?'/rebate':"https://ma.valetax.com/partner/IB6406734"} key={index} item={item}/>
            ))
        }

    </main>
   </SectionLayout>
  )
}

export default Layanan
