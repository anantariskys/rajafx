'use client'
import Button from '@/components/Button'
import { jenisAkunValetax, jenisAkunXM } from '@/data/jenisAkun'
import SectionLayout from '@/layouts/SectionLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import React from 'react'
import XM from "@/assets/xm2.png";
import Valetax from "@/assets/valetax.png";
import Link from 'next/link'
const JenisAkun = () => {
  return (
    <SectionLayout
    autoContainer={false}
    title="Jenis Akun"
    subTitle="Pilih jenis akun sesuai kebutuhan anda  yang terus berkembang."
  >
    <main className="md:py-24 space-y-16">
      <div className=" bg-[#E8E8E999]/60">
        <div className="w-full container gap-4 md:flex-row flex-col  py-8 flex justify-between items-center">
          <div className="space-y-2">
            <Image src={XM} width={200} alt="xm" />
        
          </div>
          <div className="max-w-4xl w-full md:flex-row flex-col  flex gap-4">
            {jenisAkunXM.map((item, index) => (
              <div
                key={index}
                className=" w-full gap-4 bg-white flex flex-col justify-between rounded-lg p-6 border"
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-28 aspect-square object-contain mx-auto"
                    draggable={false}
                  />
                  <h4 className="font-semibold text-lg text-center">
                    {item.name}
                  </h4>
                  <p className="text-center text-[#6B6E73]">
                    {item.description}
                  </p>
                </div>
                <div className="font-semibold flex flex-col gap-2">
                  <p className=" text-center">
                    Minimum Deposit {item.minimum_deposit}
                  </p>
                <Link href={'/xm/jenis-akun'}>
                  <Button width="w-full">Lihat lebih lengkap</Button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-[#E8E8E999]/60">
        <div className="w-full container gap-4   py-8 flex md:flex-row flex-col justify-between items-center">
          <div className="space-y-2">
            <Image src={Valetax} width={200} alt="valetax" />
        
          </div>
          <div className="max-w-4xl w-full  flex gap-4">
            <Splide
              options={{
                perPage: 3, // Menampilkan 3 item per slide
                perMove: 1, // Berpindah 1 item per geser
                gap: "1rem", // Jarak antar item
                pagination: true, // Menampilkan pagination
                arrows: true, // Menampilkan navigasi panah
                breakpoints: {
                  1024: { perPage: 2 }, // 2 item per halaman di layar kecil
                  768: { perPage: 1 }, // 1 item per halaman di layar lebih kecil
                },
              }}
              className="max-w-4xl w-full"
            >
              {jenisAkunValetax.map((item, index) => (
                <SplideSlide key={index}>
                  <div className=" w-full gap-4 h-full bg-white flex flex-col justify-between rounded-lg p-6 border">
                    <div>
                      <div className="p-4 mx-auto rounded-2xl w-fit mb-4 bg-[#E6F7E8] text-[#25C660] ">
                        <Icon icon={item.icon} className="text-4xl" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2 text-center">
                        {item.name}
                      </h4>
                      <p className="text-center text-[#6B6E73]">
                        {item.description}
                      </p>
                    </div>
                    <div className="font-semibold space-y-2">
                      <p className=" text-center">
                        Minimum Deposit {item.minimum_deposit}
                      </p>
                      <Link href={`/valetax/jenis-akun/${item.slug}`}>
                      <Button width="w-full">Lihat lebih lengkap</Button>
                      </Link>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </main>
  </SectionLayout>
  )
}

export default JenisAkun
