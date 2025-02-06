import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'
import CopyTradingImg from '@/assets/xm-copytrading-img.png'
import Image from 'next/image'
const Copy = () => {
  return (
  <div className='pt-48'>
  <SectionLayout title='Copy Trading' icon='hugeicons:trade-up' subTitle='Percayakan investasi anda pada ahlinya dan nikmati kemudahan copy trading untuk hasil yang optimal.'>
    <main className='flex items-center justify-between'>
      <p>test</p>
      <Image src={CopyTradingImg} alt='copy trading' className='w-1/2 rounded-tl-3xl rounded-br-3xl'/>
    </main>
  </SectionLayout>
  </div>
  )
}

export default Copy
