import JenisAkunCard from "@/components/JenisAkunCard";
import { jenisAkunXM } from "@/data/jenisAkun";
import SectionLayout from "@/layouts/SectionLayout";
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
          <JenisAkunCard link="/xm/jenis-akun" item={item} key={index} />
        ))}
      </main>
    </SectionLayout>
  );
};

export default JenisAkun;
