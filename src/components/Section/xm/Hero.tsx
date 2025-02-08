import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import HeroImg from "@/assets/xm-hero.png";
const Hero = () => {
  return (
    <header className="bg-primary">
        <main className="h-screen container gap-2 relative flex-col flex items-center text-white justify-center">
          <h1 className="text-6xl max-w-7xl text-center font-semibold ">
            Tingkatkan keuntungan investasi dengan broker{" "}
            <span className="text-[#3F8AF2]">terbaik</span> di dunia
          </h1>
          <p>
            Kami menawarkan pilihan broker trading terbaik untuk membantu para
            trader mencapai kesuksesan
          </p>
          <Button variant="secondary" width="w-fit">
            Mulai Trading
          </Button>
        </main>
        <div className=" h-[30vh] flex justify-center relative">
          <Image
            src={HeroImg}
            alt="hero"
            className="absolute bottom-0 w-3/5 "
            draggable={false}
          />
        </div>
      </header>
  )
}

export default Hero
