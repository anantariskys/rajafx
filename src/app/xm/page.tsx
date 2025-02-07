"use client";
import React from "react";
import HeroImg from "@/assets/xm-hero.png";
import AboutImg from "@/assets/xm-about.png";
import Image from "next/image";
import Button from "@/components/Button";
import SectionLayout from "@/layouts/SectionLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import LayananXMCard from "@/components/XM/LayananXMCard";
import LayananXMImage from "@/assets/layanan-xm-card.png";
import whyXM from "@/data/whyXM";
import WhyCard from "@/components/XM/WhyCard";
import { jenisAkunXM } from "@/data/jenisAkun";
import JenisAkunCard from "@/components/JenisAkunCard";
const XM = () => {
  return (
    <>
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
      <section className="container py-24 flex justify-start gap-6 items-center">
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
      <SectionLayout
        title={
          <>
            Layanan <span className="text-[#3F8AF2] ">XM</span>
          </>
        }
      >
        <main className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
      <section className="bg-[#141921] py-24">
        <main className="container space-y-24 relative ">
          <h1 className="text-5xl font-semibold text-white">
            Mengapa <span className="text-[#1570EF]">XM</span>?
          </h1>
          <div className="bg-[#0B1D36] w-2/6 absolute bottom-0 left-1/2 -translate-x-1/2 z-0 aspect-square rounded-full blur-3xl" />

          <div className="grid md:grid-cols-4 grid-cols-1 relative z-10 gap-8">
            {whyXM.map((item, index) => (
              <WhyCard key={index} item={item} />
            ))}
          </div>
        </main>
      </section>
      <SectionLayout title={
        <>
         Jenis Akun <span className="text-[#3F8AF2] ">XM</span>
        </>
      }>
        <main className="flex max-w-5xl mx-auto gap-4 justify-center">
          {jenisAkunXM.map((item, index) => (
           <JenisAkunCard link="/xm/jenis-akun" item={item} key={index}/>
          ))}
        </main>
      </SectionLayout>
    </>
  );
};

export default XM;
