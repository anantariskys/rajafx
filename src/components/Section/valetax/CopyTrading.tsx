import React from 'react'
import Img from '@/assets/valetax-account-example.png'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
const CopyTrading = () => {
  return (
    <section className='flex md:flex-row flex-col items-start py-24 gap-8 px-4 md:px-0'>
        <Image src={Img} alt='copy trading' className='md:w-2/5 border-2 rounded-2xl'/>
        <div className='flex flex-col gap-4 max-w-2xl'>
            <h2 className='text-5xl font-semibold'>Salin Strategi Trader Profesional Secara Otomatis</h2>
            <p className='text-[#6B6E73]'>Dapatkan keuntungan dari pengalaman trader profesional tanpa perlu menganalisis pasar sendiri. Dengan Copy Trading Valetax, Anda bisa menyalin strategi para ahli secara otomatis, memungkinkan Anda meraih profit dengan mudah tanpa harus menjadi trader berpengalaman.</p>
            <Link href={'valetax/copy-trading'}>
            <Button>Selengkapnya</Button>
            </Link>
        </div>
    </section>
  )
}

export default CopyTrading
