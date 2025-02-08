import Button from "@/components/Button";
import SectionLayout from "@/layouts/SectionLayout";
import Image from "next/image";
import React from "react";
import AccountIMG from '@/assets/valetax-account-example.png'
import how from "@/data/how";
import { valetaxCopyTradingBenefits } from "@/data/benefits";
import { Icon } from "@iconify/react/dist/iconify.js";
const CopyTrading = () => {
  return (
    <div className="md:pt-48 pt-24">
      <SectionLayout
        icon="hugeicons:trade-up"
        title="Copy Trading"
        subTitle="Percayakan investasi anda pada ahlinya dan nikmati kemudahan copy trading untuk hasil yang optimal."
        variant="Valetax"
      >
        <main className="flex pt-20 items-center justify-between">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="text-5xl font-semibold ">
              Apa itu Copy <span className="text-[#25C660]">Trading</span>?
            </h3>
            <div className="space-y-2 text-[#6B6E73]">
              <p>
                CopyTrading merupakan produk yang memungkinkan pedagang dari
                semua tingkatan untuk meniru strategi perdagangan Money Manager
                yang berpengalaman dan sukses.
              </p>
              <p>
                Dengan CopyTrading, setiap keputusan trading yang dilakukan oleh
                trader yang diikuti (misalnya, membeli atau menjual aset) akan
                secara otomatis diterapkan ke akun pengguna
              </p>
            </div>
            <Button>Mulai Copy Trading</Button>
          </div>
          <Image alt="img" src={AccountIMG} className="max-w-xl border-2  rounded-2xl" draggable={false}/>
        </main>
      </SectionLayout>
      <SectionLayout title={<>Bagaimana cara memulai <span className="text-[#25C660]">CopyTrading</span>?</>}>
      <main className="max-w-6xl mx-auto grid pt-10 grid-cols-3 gap-6">
        {
            how.map((item, index) => (
                <div key={index} className="w-full space-y-2">
                    <h3 className="text-[#25C660] text-6xl font-semibold text-center">{item.number}</h3>
                    <h5 className="text-2xl font-semibold text-center">{item.title}</h5>
                    <p className="text-[#6B6E73] text-center">{item.description}</p>
                </div>
            ))
        }
      </main>
      </SectionLayout>
      <SectionLayout backgroundColor="bg-[#141921]" title={<><span className="text-[#25C660]">Manfaat </span>yang anda dapatkan</>}>
        <main className="max-w-7xl mx-auto pt-10 flex gap-4 flex-wrap justify-center">
            {
                valetaxCopyTradingBenefits.map((item, index) => (
                    <div key={index} className=" max-w-sm w-full flex flex-col  items-center gap-4">
                        <div className="bg-[#3E4249] p-4 rounded-full text-2xl">
                            <Icon icon={item.icon} className=" text-[#25C660]"/>
                        </div>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="text-center text-[#6B6E73]">{item.description}</p>

                    </div>
                ))
            }

        </main>
      </SectionLayout>
    </div>
  );
};

export default CopyTrading;
