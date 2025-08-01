
import Image from "next/image";
import React from "react";

import MerchIMG from '@/assets/merch.png'

import TitleSection from "@/components/Section/TitleSection";
import SubTitleSection from "@/components/Section/SubTitleSection";
import { LucideClock, LucideGift, LucideLock } from "lucide-react";
import Merch from "@/components/PromosiMerch/Merch";
const Promosi = () => {
  return (
     <div className="md:pt-48 pt-24">
      <section className="mb-20">
        <div className="container py-10 md:py-24 space-y-6">
          <div className="space-y-4">
            <div className="py-2 bg-[#F2F5F3] rounded-full px-5 flex mx-auto items-center gap-4 w-fit">
              <div className="bg-[#A6F6C2] p-2 rounded-full">
                <div className="bg-[#26C55F] rounded-full size-2"></div>
              </div>
              <p className="font-semibold text-[#26C55F]">Program Reward Merchandise</p>
            </div>
            <TitleSection>Reward Eksklusif untuk Trader RAJAFX</TitleSection>
            <SubTitleSection>
      Nikmati berbagai merchandise eksklusif dari broker XM dan Valetax sebagai bentuk apresiasi bagi Anda yang telah melakukan trading dan deposit melalui link resmi mitra RAJAFX. Program ini merupakan kesempatan spesial untuk mendapatkan
hadiah menarik seperti kaos dan jaket premium setelah memenuhi syarat aktivitas trading. 
            </SubTitleSection>
            <div className="flex gap-4 mx-auto justify-center">
              <div className="flex gap-1 items-center">
                <LucideGift className="text-[#26C55F]"/>
                <p className="font-semibold">Hadiah Ekslusif</p>
              </div>
              <div className="flex gap-1 items-center">
                <LucideLock className="text-[#26C55F]"/>
                <p className="font-semibold">Link Mitra Resmi & Aman</p>
              </div>
              <div className="flex gap-1 items-center">
                <LucideClock className="text-[#26C55F]"/>
                <p className="font-semibold">Klaim Cepat & Mudah</p>
              </div>

            </div>
          </div>

          <main className="pt-20 space-y-10">
            <Image
              className="w-full rounded-2xl max-w-7xl mx-auto"
              alt="Promosi"
              src={MerchIMG}
            />
            <Merch/>

          </main>
        </div>
      </section>
    </div>
  );
};

export default Promosi;
