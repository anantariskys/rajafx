import SectionLayout from "@/layouts/SectionLayout";
import Image from "next/image";
import React from "react";
import Merch from '@/assets/valetax-merch.png'
import Button from "@/components/Button";
const Promosi = () => {
  return (
    <div className="pt-48">
      <SectionLayout icon="lsicon:badge-promotion-filled" variant="Valetax" title='Promosi' subTitle='Sebagai bentuk apresiasi terbaik kepada para klien yang telah bergabung dan mempercayakan layanan trading Valetax, kami dengan bangga mempersembahkan berbagai hadiah menarik yang telah kami siapkan khusus untuk seluruh trader Valetax yang menjadi bagian dari komunitas kami. Hadiah ini merupakan wujud terima kasih atas kepercayaan Anda kepada layanan kami.'>
        <main className="pt-20 space-y-8"> 
            <h3 className="text-5xl font-semibold">Produk Kami</h3>
            <div className="w-full flex items-center justify-between">
                <Image alt="merch" src={Merch} className="max-w-lg"/>
                <div className="max-w-3xl space-y-4">
                    <h3 className="text-4xl font-semibold"> T SHIRT</h3>
                    <p className="text-[#6B6E73]">Dapatkan T-Shirt Valetax menarik ini hanya dengan melakukan deposit minimal $150 USD. Dapatkan merchandise sekarang!</p>
                    <div className="flex gap-4">

                        <Button>Deposit Sekarang</Button>
                        <Button  variant="primary-outline">Konfirmasi Admin</Button>
                    </div>

                </div>
            </div>
        </main>
      </SectionLayout>
    </div>
  );
};

export default Promosi;
