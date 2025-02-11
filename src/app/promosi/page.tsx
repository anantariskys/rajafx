import SectionLayout from "@/layouts/SectionLayout";
import Image from "next/image";
import React from "react";
import Merch from "@/assets/valetax-merch.png";
import Button from "@/components/Button";
import Link from "next/link";
import SegeraIMG from '@/assets/segera-promosi.png'
const Promosi = () => {
  return (
    <div className="md:pt-48 pt-24">
      <SectionLayout
        // icon="lsicon:badge-promotion-filled"
        variant="Valetax"
        title="Promosi"
        subTitle="Sebagai bentuk apresiasi terbaik kepada para klien yang telah bergabung dan mempercayakan layanan trading Valetax, kami dengan bangga mempersembahkan berbagai hadiah menarik yang telah kami siapkan khusus untuk seluruh trader Valetax yang menjadi bagian dari komunitas kami. Hadiah ini merupakan wujud terima kasih atas kepercayaan Anda kepada layanan kami."
      >
        <main className="pt-20 space-y-8">
          <h3 className="md:text-5xl text-3xl font-semibold">Produk Kami</h3>
          <div className="w-full flex md:flex-row flex-col items-center justify-between">
            <Image alt="merch" src={Merch} className="md:max-w-lg max-w-xs" />
            <div className="max-w-3xl space-y-4">
              <h3 className="text-4xl font-semibold"> T SHIRT</h3>
              <p className="text-[#6B6E73]">
                Dapatkan T-Shirt Valetax menarik ini hanya dengan melakukan
                deposit minimal $150 USD. Dapatkan merchandise sekarang!
              </p>
              <div className="flex md:flex-row flex-col gap-4">
                <Link
                  href={
                    "https://ma.valetax.com/user/accounts/overview/account/296942/deposit"
                  }
                >
                  <Button>Deposit Sekarang</Button>
                </Link>
                <Button variant="primary-outline">Konfirmasi Admin</Button>
              </div>
            </div>
          </div>
        </main>
        <div className='w-full flex md:flex-row flex-col items-center justify-between'>
            <div className="space-y-4 max-w-3xl">
            <h3 className="md:text-5xl text-3xl font-semibold"> SEGERA!</h3>
              <p className="text-[#6B6E73]">
              Tunggu penawaran merchandise selanjutnya dari RajaFX dengan keuntungan yang lebih menarik!
              </p>

            </div>
            <Image src={SegeraIMG} draggable='false' alt="SEGERA!!!" className="md:max-w-lg max-w-xs"/>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Promosi;
