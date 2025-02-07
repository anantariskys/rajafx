'use client'
import React from "react";
import CTAImage from "@/assets/cta-img.jpg";
import { usePathname } from "next/navigation";
import SectionLayout from "@/layouts/SectionLayout";
import Button from "./Button";
import Link from "next/link";

const CTA = () => {
   const pathname = usePathname(); 
  return (
   <SectionLayout
   title={pathname=='/xm'&&<>
   Mulai Trading di <span className="text-[#1570EF]">XM</span>
   </>}
   >

      <main
        className="w-full aspect-[16/6]  rounded-2xl  text-white flex items-center justify-center  bg-primary bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${CTAImage.src})` }}
        >
        <div className="size-full bg-primary bg-opacity-75"/>
        <div className="absolute flex flex-col gap-8 items-center justify-center">
          <p className="text-5xl font-semibold text-center max-w-4xl">
            Bingung memulai trading? Konsultasikan dengan tim{" "}
            <span className="text-[#25C660]">RajaFx</span>
          </p>
          <Link href={"/hubungi-kami"}>
          <Button variant="secondary">
            Hubungi Kami
          </Button>
          </Link>
        </div>
      </main>
  </SectionLayout>
  );
};

export default CTA;
