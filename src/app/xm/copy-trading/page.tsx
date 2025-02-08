import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'
import CopyTradingImg from '@/assets/xm-copytrading-img.png'
import Image from 'next/image'
import Button from '@/components/Button'
const Copy = () => {
  return (
  <div className='md:pt-48 pt-24'>
  <SectionLayout title='Copy Trading' icon='hugeicons:trade-up' subTitle='Percayakan investasi anda pada ahlinya dan nikmati kemudahan copy trading untuk hasil yang optimal.'>
    <main className='flex md:flex-row flex-col-reverse items-center gap-4 pt-10 justify-between'>
      <div className='space-y-4'>
        <h1 className='text-5xl font-semibold'><span className='text-[#1570EF]'>XM</span> Copytrading</h1>
        <p className='text-[#6B6E73]'>Copy trading memberikan kesempatan kepada trader pemula untuk terlibat dalam pasar dengan lebih percaya diri, tanpa perlu memiliki pengalaman atau keterampilan analisis yang mendalam. Dengan menyalin perdagangan dari trader profesional yang berpengalaman, anda dapat memanfaatkan strategi dan wawasan pasar yang telah terbukti efektif. Dapatkan peluang untuk memperoleh hasil yang lebih baik sambil mempercepat proses pembelajaran tentang dinamika pasar.</p>
        <Button>Mulai Copy Trading</Button>
      </div>
      <Image src={CopyTradingImg} draggable='false' alt='copy trading' className='md:max-w-xl max-w-xs rounded-tl-3xl rounded-br-3xl'/>
    </main>
  </SectionLayout>
  </div>
  )
}

export default Copy
