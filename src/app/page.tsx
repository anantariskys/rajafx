'use client'
import Image from "next/image";
import HeroIMG from "@/assets/hero-img.jpg";
import IntroductionIMG from "@/assets/introduction.png";
import {benefits} from "@/data/benefits";
import BenefitCard from "@/components/BenefitCard";
import SectionLayout from "@/layouts/SectionLayout";
import brokers from "@/data/brokers";
import BrokerCard from "@/components/BrokerCard/BrokerCard";
import Button from "@/components/Button";
import XM from "@/assets/xm2.png";
import Valetax from "@/assets/valetax.png";
import { jenisAkunValetax, jenisAkunXM } from "@/data/jenisAkun";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
export default function Home() {
  return (
    <>
      <header className="relative h-[150vh] flex justify-center overflow-x-hidden">
        <div
          style={{ backgroundImage: `url(${HeroIMG.src})` }}
          className=" w-full h-[100vh] scale-[170%] bg-cover bg-center rounded-b-[50%] relative overflow-hidden flex items-center justify-center "
        >
          <div className="bg-primary bg-opacity-75 size-full" />
        </div>

        <div className=" absolute gap-4 top-0  z-10 flex flex-col h-screen items-center justify-center text-center text-white">
          <h1 className="text-6xl max-w-6xl font-bold">
            Maksimalkan Trading Anda Dengan Partner Forex{" "}
            <span className="text-[#25C660]">Terbaik</span>
          </h1>
          <p className="text-sm font-light max-w-4xl">
            Bergabunglah dengan platform trading terpercaya yang memberikan anda
            akses eksklusif ke broker forex terbaik pilihan kami. Nikmati
            layanan premium hingga bonus menarik untuk memaksimalkan potensi
            trading anda.
          </p>
          <Button variant="secondary">Mulai Sekarang</Button>
        </div>
      </header>
      <SectionLayout
        title={
          <>
            Berkenalan dengan <span className="text-[#25C660]">RajaFX</span>
          </>
        }
      >
        <div className="flex justify-between items-center pb-16">
          <p className="max-w-2xl text-lg leading-loose font-light">
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
      <section className="bg-primary py-16 mb-24">
        <main className="container text-white flex justify-between">
          <div className="space-y-4">
            <h2 className="text-5xl font-semibold">
              Mengapa <span className="text-[#25C660]">RajaFX</span>?
            </h2>
            <p className="max-w-xl  text-[#C7C8CA]">
              Rajafx hadir sebagai mitra terpercaya bagi para trader yang
              mencari pengalaman trading yang optimal. Kami siap membantu Anda
              mencapai kesuksesan di pasar global.
            </p>
          </div>
          <div className="space-y-6">
            {benefits.map((item, index) => (
              <BenefitCard
                benefit={item.description}
                icon={item.icon}
                title={item.title}
                key={index}
              />
            ))}
          </div>
        </main>
      </section>
      <SectionLayout title="Broker Pilihan Kami">
        <main className="flex justify-center gap-8 pb-16">
          {brokers.map((item, index) => (
            <BrokerCard key={index} broker={item} />
          ))}
        </main>
      </SectionLayout>
      <section className="container font-semibold flex justify-center gap-8 py-16">
      <div className="max-w-sm w-full  rounded-lg flex flex-col justify-start">
        <div className="p-6 flex flex-col items-start ">
        <div className="w-24 aspect-video"></div>
        <p>Regulator</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="">Headquarter</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="">Tipe Akun</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="">Min Deposit</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="">Max Leverage</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="">Account Currencies</p>
        </div>
        <div className="px-6 py-4 border-t ">
        </div>
      </div>
      <div className="max-w-sm w-full border rounded-lg flex flex-col justify-between">
        <div className="p-6 flex flex-col items-center ">
        <Image src={XM} className="w-24 aspect-video object-contain" alt="xm"/>
        <p>Belize FSC, DFSA</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">Belize</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">3 Tipe</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">5 USD</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">1:1000</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">ZAR, SGD, PLN HUF, AUD, CHF, 
          JPY, GBP, EUR, USD</p>
        </div>
        <div className="px-6 py-4 border-t font-normal ">
          <Button width="w-full">Buka Akun Sekarang</Button>
        </div>
      </div>
      <div className="max-w-sm w-full border rounded-lg flex flex-col justify-between">
        <div className="p-6 flex flex-col items-center ">
        <Image src={Valetax} className="w-24 aspect-video object-contain" alt="veletax"/>
        <p>Mauritius FSC, SVG FSA</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">Mauritius</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">6 Tipe</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">1 USD</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">1:2000</p>
        </div>
        <div className="px-6 py-4 border-t ">
          <p className="text-center">US Cent</p>
        </div>
        <div className="px-6 py-4 border-t font-normal">
          <Button width="w-full">Buka Akun Sekarang</Button>
        </div>
      </div>
      
    
      </section>
      <SectionLayout
        autoContainer={false}
        title="Jenis Akun"
        subTitle="Pilih jenis akun sesuai kebutuhan anda  yang terus berkembang."
      >
        <main className="py-24 space-y-16">
          <div className=" bg-[#E8E8E999]/60">
            <div className="w-full container   py-8 flex justify-between items-center">
              <div className="space-y-2">
                <Image src={XM} width={200} alt="xm" />
                <Button width="w-full">Pelajari lebih lanjut</Button>
              </div>
              <div className="max-w-4xl w-full  flex gap-4">
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
                    <div className="font-semibold space-y-2">
                      <p className=" text-center">
                        Minimum Deposit {item.minimum_deposit}
                      </p>
                      <Button width="w-full">Lihat lebih lengkap</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" bg-[#E8E8E999]/60">
            <div className="w-full container   py-8 flex justify-between items-center">
              <div className="space-y-2">
                <Image src={Valetax} width={200} alt="valetax" />
                <Button width="w-full">Pelajari lebih lanjut</Button>
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
                          <Button width="w-full">Lihat lebih lengkap</Button>
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
    </>
  );
}
