'use client'
import { jenisAkunValetax2 } from "@/data/jenisAkun";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/Button";
import SectionLayout from "@/layouts/SectionLayout";
import InfoAkun from "@/components/Section/valetax/jenis-akun/InfoAkun";
import DetailAkunCarousel from "@/components/valetax/DetailAkunCarousel";



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
  name2: string;
  description: string;
  description2: string;
  description3: string;
  spread: string;
  icon: string;
  details: AkunDetails;
}


const Page = ()=> {
  const [data, setData] = useState<Akun>();
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      const filteredData = jenisAkunValetax2.find((item) => item.slug === slug);
      if (!filteredData) {
        router.back()
      }
      setData(filteredData);
    }
    window.scrollTo(0, 0);
  }, [slug,router]);
  
  return (
    <>
    <section className="min-h-screen flex items-center">
    <main className="container flex md:flex-row flex-col items-center  gap-16">
      {data?.heroIMG && (
        <Image
          src={data?.heroIMG}
          alt={data?.name}
          className="md:max-w-md max-w-xs"
          draggable={false}
        />
      )}
      <div className="max-w-2xl space-y-4">
        <h1 className="text-5xl font-semibold">Akun {data?.name2}</h1>
        <p className="text-[#6B6E73] text-lg">{data?.description3}</p>
        <Button>Buat Akun</Button>
      </div>
    </main>
  </section>
  {data?.details && <InfoAkun item={data.details} />}
  <SectionLayout>
    <h3 className="text-3xl md:text-5xl font-semibold text-center">Apa perbedaannya?</h3>
    <DetailAkunCarousel />
  </SectionLayout>
    </>
  );
};

export default Page;