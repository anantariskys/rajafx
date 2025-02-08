import Button from "@/components/Button";
import SectionLayout from "@/layouts/SectionLayout";
import Image from "next/image";
import React from "react";
import XM from "@/assets/xm.png";
import Valetax from "@/assets/valetax.png";
import { Icon } from "@iconify/react/dist/iconify.js";
const Perbandingan = () => {
  return (
    <div className="md:pt-48 pt-24">
      <SectionLayout
        title="Perbandingan"
        subTitle="Tentukan pilihan broker terbaik sesuai dengan kebutuhan dan strategi anda untuk memaksimalkan potensi keuntungan investasi"
      >
        <main className="w-full text-[0.9rem] font-semibold flex flex-col md:flex-row justify-center gap-8 py-16">
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
              <p className="">Demo Akun</p>
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
              <p className="">Platform Trading</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="">Instrumen Pasar</p>
            </div>
            <div className="px-6 py-4 border-t "></div>
          </div>
          <div className="max-w-md w-full border rounded-lg flex flex-col justify-between">
            <div className="p-6 flex flex-col items-center ">
              <Image
                src={XM}
                className="w-24 aspect-video object-contain"
                alt="xm"
              />
              <p>ASIC, CySEC, FSC (Offshore), DFSA, FSCA</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">Belize</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">3 Tipe</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <Icon
                className="text-2xl text-[#25C660] mx-auto"
                icon={"material-symbols:check-circle-outline-rounded"}
              />
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">5 USD</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">1:1000</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">
                ZAR, SGD, PLN HUF, AUD, CHF, JPY, GBP, EUR, USD
              </p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">MT4, MT5 </p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">
                Forex, Logam Mulia, Indeks Saham, Mata Uang kripto, Indeks
                Tematik, Saham, Saham Turbo, Komoditas, Energi{" "}
              </p>
            </div>
            <div className="px-6 py-4 border-t font-normal ">
              <Button width="w-full">Buka Akun Sekarang</Button>
            </div>
          </div>
          <div className="max-w-md w-full border rounded-lg flex flex-col justify-between">
            <div className="p-6 flex flex-col items-center ">
              <Image
                src={Valetax}
                className="h-12 aspect-video object-contain"
                alt="veletax"
              />
              <p>Offshore Regulated</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">Mauritius</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">6 Tipe</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <Icon
                className="text-2xl text-[#25C660] mx-auto"
                icon={"material-symbols:check-circle-outline-rounded"}
              />
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
            <div className="px-6 py-4 border-t ">
              <p className="text-center">MT4, MT5</p>
            </div>
            <div className="px-6 py-4 border-t ">
              <p className="text-center">
                Pasangan Mata Uang, Indeks, Logam Mulia, Kripto, Energi
              </p>
            </div>
            <div className="px-6 py-4 border-t font-normal">
              <Button width="w-full">Buka Akun Sekarang</Button>
            </div>
          </div>
        </main>
      </SectionLayout>
    </div>
  );
};

export default Perbandingan;
