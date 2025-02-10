import LayananXMCard from "@/components/XM/LayananXMCard";
import SectionLayout from "@/layouts/SectionLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import LayananXMImage from "@/assets/layanan-xm-card.png";
import Link from "next/link";

const Feature = () => {
  return (
    <SectionLayout
      title={
        <>
          Layanan <span className="text-[#3F8AF2] ">XM</span>
        </>
      }
    >
      <main className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-5 gap-4">
          <Link
            href={"/xm/jenis-akun"}
            className="col-span-2 h-full p-6 group relative bg-contain bg-right bg- rounded-2xl  text-black bg-[#f1f1fb] shadow-lg "
          >
            <Image
              src={LayananXMImage}
              alt="img"
              className="absolute w-4/6 top-1/2  -translate-y-1/2 right-0"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col ">
                <h3 className="text-4xl font-semibold ">Akun XM</h3>
                <p className=" mt-2">
                  Temukan akun pilihan anda yang sesuai dengan kebutuhan trading
                  anda
                </p>
              </div>

              <div className="relative group-hover:gap-2 duration-300 ease-in-out gap-1 z-20  font-medium flex items-center">
                <p>Buka Akun Sekarang</p>
                <Icon icon={"material-symbols:arrow-right-alt-rounded"} />
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-4 col-span-3">
            <LayananXMCard
              link="https://clicks.pipaffiliates.com/c?c=50430&l=id&p=5"
              description="Uji kemampuan trading Anda dengan akun demo forex gratis, tanpa risiko kehilangan dana"
              linkText="Coba Akun Demo"
              title="Akun Demo XM"
            />
            <LayananXMCard
              variant="secondary"
              description="Bergabunglah dengan 100.000+ trader lain yang menyalin strategi trader ahli atau bagikan strategi anda untuk meraih komisi"
              linkText="Mulai Copy Trading"
              title="Copy Trading"
              link="/xm/copy-trading"
            />
          </div>
        </div>
      </main>
    </SectionLayout>
  );
};

export default Feature;
