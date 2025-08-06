import Image from "next/image";
import React from "react";
import PromosiIMG from "@/assets/promosi.jpg";
import PromosiIMG2 from "@/assets/promosi2.png";

import TitleSection from "@/components/Section/TitleSection";
import SubTitleSection from "@/components/Section/SubTitleSection";
import { LucideCircleDollarSign, LucideLock, LucideUser } from "lucide-react";
import Link from "next/link";
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
              <p className="font-semibold text-[#26C55F]">Penawaran Bonus</p>
            </div>
            <TitleSection>Penawaran Bonus untuk Trader RajaFX</TitleSection>
            <SubTitleSection>
              Sebagai bentuk apresiasi terbaik kepada para klien yang telah
              bergabung dan mempercayakan RajaFx, kami dengan bangga
              mempersembahkan berbagai hadiah menarik yang telah kami siapkan
              khusus untuk seluruh trader yang menjadi bagian dari RajaFx.
              Hadiah ini merupakan wujud terima kasih atas kepercayaan Anda
              kepada layanan kami.
            </SubTitleSection>
          </div>

          <main className="pt-20 space-y-10">
            <Image
              className="w-full rounded-2xl max-w-5xl mx-auto"
              alt="Promosi"
              src={PromosiIMG}
            />
            <div className="w-full flex md:flex-row  flex-col items-center justify-between">
              <div className="max-w-3xl space-y-4">
                <div className="max-w-2xl">
                  <h3 className="text-4xl font-semibold">
                    Welcome Bonus 50% Hingga $5000 di Broker XM!
                  </h3>

                  <p className="mt-4 text-[#6B6E73]">
                    Sebagai bentuk apresiasi kepada para trader baru, RajaFX
                    memberikan Welcome Bonus sebesar 50% hingga $500 untuk
                    meningkatkan kekuatan modal trading Anda. Bonus ini
                    dirancang untuk memberikan Anda keunggulan lebih saat
                    memulai perjalanan trading bersama kami.
                  </p>
                  <p className=" mt-4 text-[#6B6E73]">
                    Jangan lewatkan kesempatan untuk memulai perjalanan
                    finansial Anda dengan pijakan yang lebih kuat dan potensi
                    keuntungan yang lebih besar.
                  </p>
                </div>
              </div>
              <Image
                alt="merch"
                src={PromosiIMG2}
                className="md:max-w-md max-w-xs"
              />
            </div>
            <div className="w-full pt-20 ">
              <div className="flex justify-between items-center">
                {" "}
                <h3 className="text-4xl font-semibold">
                  Langkah Mudah Klaim Bonus
                </h3>
                <p className="text-sm text-[#8C8C8C] max-w-lg">
                  Ikuti panduan berikut untuk mengklaim bonus spesial dari
                  RajaFX dan maksimalkan keuntungan trading Anda
                </p>
              </div>
              <div className="grid mt-8 grid-cols-3 gap-4">
                <div className=" border rounded-2xl p-6 w-full gap-3 flex flex-col text-center  items-start ">
                  <div className="bg-[#E9F9EF] p-4 rounded-full text-2xl">
                    <LucideUser className=" text-[#25C660]" />
                  </div>
                  <h3 className="text-xl font-semibold">Daftar Akun</h3>
                  <p className="text-start text-[#9A9CA0]">
                    Daftar akun trading XM anda melalui link <Link href={'https://clicks.pipaffiliates.com/c?c=50430&l=id&p=1'} className="text-[#25C660]">disini</Link>
                  </p>
                </div>
                <div className=" border rounded-2xl p-6 w-full gap-3 flex flex-col text-center  items-start ">
                  <div className="bg-[#E9F9EF] p-4 rounded-full text-2xl">
                    <LucideLock className=" text-[#25C660]" />
                  </div>
                  <h3 className="text-xl font-semibold">Masukkan Kode Mitra</h3>
                  <p className="text-start text-[#9A9CA0]">
                   Masukkan kode mitra  RAJAFX  saat melakukan registrasi akun untuk memastikan Anda mendapatkan bonus dan benefit eksklusif RajaFX
                  </p>
                </div>
                <div className=" border rounded-2xl p-6 w-full gap-3 flex flex-col text-center  items-start ">
                  <div className="bg-[#E9F9EF] p-4 rounded-full text-2xl">
                    <LucideCircleDollarSign className=" text-[#25C660]" />
                  </div>
                  <h3 className="text-xl font-semibold">Mulai Deposit</h3>
                  <p className="text-start text-[#9A9CA0]">
                 Lakukan deposit dan bonus anda akan langsung dikreditkan
                  </p>
                </div>
              </div>
              <div className="text-[#6B6E73] mt-8 space-y-4">
                <p>*Khusus untuk akun XM <strong>Mikro</strong> atau <strong>Standart</strong></p>
                <p>*Apabila kuota bonus 50% telah Anda habiskan, Anda masih bisa menikmati bonus deposit 20% hingga $<strong>4500</strong></p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Promosi;
