import React from 'react'
import BenefitIMG from '@/assets/benefit-valetax.jpg'
import { valetaxBenefits } from '@/data/benefits'
import BenefitCard from '@/components/valetax/BenefitCard'
const Benefit = () => {
  return (
 <section className='py-24 bg-cover bg-bottom relative' style={{backgroundImage:`url(${BenefitIMG.src})`}}>
    <div className='absolute inset-0 bg-black bg-opacity-80'/>
    <main className='container relative z-10 space-y-16 text-white'>
        <div className='max-w-6xl mx-auto space-y-4'>
        <h1 className='text-5xl font-semibold'>Mengapa <span className='text-[#25C660]'>Valetax?</span></h1>
        <p className='font-light text-lg'>Kelebihan yang akan anda nikmati dengan RajaFX</p>

        </div>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6'>
            {
                valetaxBenefits.map((item, index) => (
                    <BenefitCard key={index} {...item}/>
                ))
            }

        </div>
    </main>

 </section>
  )
}

export default Benefit
