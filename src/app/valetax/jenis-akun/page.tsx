import Button from '@/components/Button'
import DetailAkunCarousel from '@/components/valetax/DetailAkunCarousel'
import { jenisAkunValetax2 } from '@/data/jenisAkun'
import SectionLayout from '@/layouts/SectionLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

const JenisAkun = () => {
  return (
    <div className='md:pt-48 pt-24'>
        <SectionLayout icon='solar:user-bold' variant='Valetax' title='Pembukaan Akun' subTitle='Pilih jenis akun sesuai kebutuhan anda  yang terus berkembang.'>
            <main className='max-w-4xl md:grid-cols-3 grid mx-auto gap-6 pt-10'>
                {
                    jenisAkunValetax2.map((item,index)=>(
                        <div key={index} className="w-full group hover:bg-primary duration-300 ease-in-out hover:text-white text-primary  p-6 divide-y shadow border rounded-2xl">
                        <div className="min-h-60 space-y-4">
                          <div className="p-4 rounded-2xl mx-auto w-fit text-2xl bg-[#E6F7E8] duration-200 ease-in-out group-hover:bg-[#3E4249] text-[#25C660]">
                            <Icon icon={item.icon} className="" />
                          </div>
                          <h4 className="text-2xl text-center font-bold">
                            {item.name}
                          </h4>
                          <p className="text-[#6B6E73] group-hover:text-[#E8E8E9] duration-200 ease-in-out text-center">{item.description2}</p>
                        </div>
                        <div className="py-4  flex flex-col gap-2">
                          <Link target='_blank' href={'https://ma.valetax.com/partner/IB4492317'}>
                            <Button width='w-full' className='group-hover:bg-white group-hover:text-primary'>Buat Akun</Button>
                          </Link>
                            <Link href={`/valetax/jenis-akun/${item.slug}`}>
                            <Button width='w-full' className='group-hover:bg-transparent group-hover:text-white group-hover:border-white'  variant='primary-outline'>Lihat Detail</Button>
                            </Link>
                        
                        </div>
                      </div>
                    ))
                }


            </main>
            <div className='pt-10 space-y-4'>
                <h3 className='text-3xl font-semibold'>Detail Akun</h3>
               <DetailAkunCarousel/>
            </div>
        </SectionLayout>

    </div>
  )
}

export default JenisAkun
