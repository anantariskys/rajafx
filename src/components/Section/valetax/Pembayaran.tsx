import pembayaran from "@/data/pembayaran";
import SectionLayout from "@/layouts/SectionLayout";
import Image from "next/image";
import React from "react";

const Pembayaran = () => {
  return (
    <SectionLayout
    backgroundColor="bg-[#F6F6F6]"
      title={
        <>
          Mendukung media pembayaran dengan penyedia
          <span className="text-[#25C660]"> pembayaran lokal </span>
        </>
      }
      subTitle="Untuk memberikan pengalaman terbaik kepada calon klien, kami memudahkan transaksi anda dengan menyediakan pembayaran dengan bank/e-wallet lokal yang akan memudahkan langkah anda untuk bergabung dengan kami."
    >
      <main className="grid md:grid-cols-4 max-w-6xl mx-auto gap-6">
        {pembayaran.map((item, index) => (
            <Image key={index} alt={`${index+1}`} src={item} className="w-full  aspect-video object-contain p-5 grayscale-[90%] opacity-50 hover:opacity-100 hover:grayscale-0 duration-300 ease-in-out cursor-pointer active:scale-95 " draggable={false}/>
        ))}
      </main>
    </SectionLayout>
  );
};

export default Pembayaran;
