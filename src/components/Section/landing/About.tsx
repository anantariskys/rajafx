import SectionLayout from '@/layouts/SectionLayout'
import Image from 'next/image'
import React from 'react'
import IntroductionIMG from "@/assets/introduction.png";

const About = () => {
  return (
    <SectionLayout
    id='about-raja'
    title={
      <>
        Berkenalan dengan <span className="text-[#25C660]">RajaFX</span>
      </>
    }
  >
    <div className="flex md:flex-row flex-col-reverse justify-between gap-4 items-center pb-16">
      <p className="max-w-2xl text-lg md:leading-loose font-light">
        RajaFX merupakan Introducing Broker resmi dari XM dan Valetax yang
        berfokus pada pelayanan optimal bagi klien. Kami siap menjadi mitra
        terpercaya yang mendukung kebutuhan Anda, mulai dari informasi
        seputar broker XM dan Valetax hingga proses deposit dan penarikan
        dana yang mudah dan aman. Dengan tim profesional yang berpengalaman,
        RajaFX memberikan panduan personal kepada setiap klien, memastikan
        kebutuhan Anda terpenuhi dengan cepat dan efisien. Untuk memberikan
        pengalaman terbaik, kami menghadirkan berbagai promo menarik yang
        dirancang khusus untuk memberikan nilai tambah bagi Anda.
      </p>
      <Image
        src={IntroductionIMG}
        alt="introduction"
        className="rounded-2xl"
      />
    </div>
  </SectionLayout>
  )
}

export default About
