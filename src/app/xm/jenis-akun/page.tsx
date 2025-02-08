import JenisAkunCard from "@/components/JenisAkunCard";
import { jenisAkunXM } from "@/data/jenisAkun";
import SectionLayout from "@/layouts/SectionLayout";
import React from "react";

const JenisAkun = () => {
  return (
    <div className="pt-48">
      <SectionLayout
        title="Jenis Akun"
        icon="solar:user-bold"
        subTitle="Pilih jenis akun sesuai kebutuhan anda  yang terus berkembang."
      >
        <main className="flex md:flex-row flex-col max-w-5xl mx-auto gap-4 justify-center">
          {jenisAkunXM.map((item, index) => (
            <JenisAkunCard link="" linkText="Buka akun" item={item} key={index} additionalInfo={item} />
          ))}
        </main>
      </SectionLayout>
    </div>
  );
};

export default JenisAkun;
