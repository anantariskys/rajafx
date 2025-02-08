import LayananXMCard from '@/components/XM/LayananXMCard'
import SectionLayout from '@/layouts/SectionLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'
import LayananXMImage from "@/assets/layanan-xm-card.png";

const Feature = () => {
  return (

    <SectionLayout
    title={
      <>
        Layanan <span className="text-[#3F8AF2] ">XM</span>
      </>
    }
  >
    <main className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-5 gap-4">
        <div className="p-6 group bg-contain bg-right bg- rounded-2xl col-span-2 text-black bg-[#E8E8E9] shadow-lg flex flex-col justify-between relative">
          <Image
            src={LayananXMImage}
            alt="img"
            className="absolute w-4/6 top-1/2  -translate-y-1/2 right-0"
          />
          <div>
            <h3 className="text-4xl font-semibold ">Akun XM</h3>
            <p className=" mt-2">
              Temukan akun pilihan anda yang sesuai dengan kebutuhan trading
              anda
            </p>
          </div>

          <div className="relative group-hover:gap-2 duration-300 ease-in-out gap-1 z-20  font-medium flex items-center">
            <p>Buka Akun Sekarang</p>
            <Icon icon={"material-symbols:arrow-right-alt-rounded"} />
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-3">
          <LayananXMCard
            description="Uji kemampuan trading Anda dengan akun demo forex gratis, tanpa risiko kehilangan dana"
            linkText="Coba Akun Demo"
            title="Akun Demo XM"
          />
          <LayananXMCard
            variant="secondary"
            description="Bergabunglah dengan 100.000+ trader lain yang menyalin strategi trader ahli atau bagikan strategi anda untuk meraih komisi"
            linkText="Mulai Copy Trading"
            title="Copy Trading"
            link="/xm/copy-trading"
          />
        </div>
      </div>
    </main>
  </SectionLayout>
  )
}

export default Feature
