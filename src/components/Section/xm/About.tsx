import Image from 'next/image'
import React from 'react'
import AboutImg from "@/assets/xm-about.png";
const About = () => {
  return (
    <section className="container py-24 flex flex-col md:flex-row justify-start gap-6 items-center">
    <Image src={AboutImg} alt="about" className="max-w-md w-full" />
    <div className="space-y-2">
      <h2 className="text-5xl font-semibold">
        Apa itu <span className="text-[#3F8AF2] ">XM</span>
      </h2>
      <p className="text-[#6B6E73] max-w-3xl text-lg">
        XM adalah broker forex dan CFD yang telah diatur dengan baik serta
        menawarkan berbagai instrumen keuangan, termasuk forex, saham,
        indeks, komoditas, dan cryptocurrency. Dengan pengalaman lebih dari
        satu dekade di industri keuangan, XM dikenal sebagai broker yang
        transparan dan aman, dengan regulasi dari berbagai badan keuangan
        ternama seperti CySEC, ASIC, dan FSC.
      </p>
    </div>
  </section>
  )
}

export default About
