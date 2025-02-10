import Button from "@/components/Button";
import JenisAkunCard from "@/components/JenisAkunCard";
import { jenisAkunXM } from "@/data/jenisAkun";
import SectionLayout from "@/layouts/SectionLayout";
import Link from "next/link";
import React from "react";

const JenisAkun = () => {
  return (
    <SectionLayout
      title={
        <>
          Jenis Akun <span className="text-[#3F8AF2] ">XM</span>
        </>
      }
    >
      <main className="flex md:flex-row flex-col max-w-5xl mx-auto gap-4 justify-center">
        {jenisAkunXM.map((item, index) => (
          <JenisAkunCard  item={item} key={index} />
        ))}
      </main>
      <div className="flex justify-center container">
        <Link href={"/xm/jenis-akun"}>
          <Button>Selengkapnya</Button>
        </Link>
      </div>
    </SectionLayout>
  );
};

export default JenisAkun;
