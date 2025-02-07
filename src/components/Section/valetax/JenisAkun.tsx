import JenisAkunCard from '@/components/valetax/JenisAkunCard'
import { jenisAkunValetax2 } from '@/data/jenisAkun'
import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'

const JenisAkun = () => {
  return (
   <SectionLayout title='Pilih jenis akun untuk setiap kebutuhan anda' subTitle='Kami menawarkan berbagai opsi akun investasi yang dapat disesuaikan dengan kebutuhan Anda yang terus berkembang.'>
    <main className='max-w-4xl grid mx-auto md:grid-cols-3 gap-6'>
        {
            jenisAkunValetax2.map((item,index)=>(
                <JenisAkunCard item={item} key={index}/>
            ))
        }

    </main>
   </SectionLayout>
  )
}

export default JenisAkun
