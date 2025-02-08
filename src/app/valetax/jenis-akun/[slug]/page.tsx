'use client'
import Button from "@/components/Button";
import DetailAkunCarousel from "@/components/valetax/DetailAkunCarousel";
import { jenisAkunValetax2 } from "@/data/jenisAkun";
import SectionLayout from "@/layouts/SectionLayout";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

interface AkunDetails {
  "Deposit Minimal": string;
  "Mata Uang Pasar": string;
  "Ukuran Kontrak": string;
  Spread: string;
  Komisi: string;
  "Leverage Maksimal": string;
  "Harga Call/Stop Out": string;
  "Instrumen Perdagangan": string;
}

interface Akun {
  id: number;
  heroIMG: StaticImageData;
  name: string;
  description: string;
  description2: string;
  description3: string;
  spread: string;
  icon: string;
  details: AkunDetails;
}

const DetailAkun = () => {
  const [data,setData] =useState<Akun>()
  const {slug} = useParams();
  

  useEffect(() => {
    if (slug) {
      const filteredData = jenisAkunValetax2.find((item) => item.slug === slug);
      setData(filteredData);
    }
  }, [slug]);

  return (
    <>
      <section className="min-h-screen flex items-center">
        <main className="container flex md:flex-row flex-col items-center  gap-16">
          {data?.heroIMG&&(
            <Image src={data?.heroIMG} alt={data?.name} className="md:max-w-md max-w-xs" draggable={false}/>
          )}
          <div className="max-w-2xl space-y-4">
            <h1 className="text-5xl font-semibold">Akun {data?.name}</h1>
            <p className="text-[#6B6E73]">{data?.description3}</p>
            <Button>Buat Akun</Button>
          </div>


        </main>

      </section>
      <SectionLayout>
      <DetailAkunCarousel/>
      </SectionLayout>
    </>
  );
};

export default DetailAkun;
