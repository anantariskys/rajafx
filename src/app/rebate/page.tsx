import SectionLayout from "@/layouts/SectionLayout";
import React from "react";
import RebateIMG from "@/assets/rebateImage.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import rebate from "@/data/rebate";
const Page = () => {
  return (
    <div className="md:pt-48 pt-24">
      <SectionLayout
        variant="Valetax"
        title="Rebate"
        subTitle="Dapatkan pengembalian komisi trading Anda tanpa syarat! Trading lebih banyak, dapatkan lebih banyak rebate"
      >
        <main className="pt-20 flex flex-col-reverse gap-4 md:flex-row justify-between items-start">
          <div className="space-y-4 max-w-3xl">
            <h3 className="md:text-5xl text-3xl font-semibold">
              Apa itu rebate?
            </h3>
            <p className="text-[#3E4249]">
              Rebate forex adalah pengembalian sebagian dari spread atau komisi
              yang dibayarkan trader kepada broker setiap kali melakukan
              transaksi. Dengan rebate, trader bisa mendapatkan cashback dari
              setiap trade, baik itu profit maupun loss, sehingga biaya trading
              menjadi lebih ringan dan keuntungan lebih maksimal.
            </p>
          </div>
          <Image
            src={RebateIMG}
            alt="rebate"
            className="md:max-w-lg max-w-full"
            draggable={false}
          />
        </main>
      </SectionLayout>
      <SectionLayout
        title={
          <>
            Keunggulan rebate dengan
            <span className="text-[#25C660]">RajaFX</span>
          </>
        }
      >
        <main className="flex md:flex-row flex-col py-10 flex-wrap justify-center relative z-10 gap-4 md:gap-8">
     
            {rebate.map((item, index) => (
              <div
                key={index}
                className=" md:max-w-72 w-full flex flex-col text-center  items-center "
              >
                <div className="bg-[#3E4249] p-4 rounded-full text-2xl">
                  <Icon icon={item.icon} className=" text-[#25C660]" />
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-center text-[#6B6E73]">{item.description}</p>
              </div>
            ))}

        </main>
      </SectionLayout>
    </div>
  );
};

export default Page;
