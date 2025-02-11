"use client";
import React from "react";
import CTAImage from "@/assets/cta-img.jpg";
import CTAImage2 from "@/assets/cta-img2.jpg";
import CTAImage3 from "@/assets/cta-image3.png";
import { usePathname } from "next/navigation";
import SectionLayout from "@/layouts/SectionLayout";
import Button from "./Button";
import Link from "next/link";

const CTA = () => {
  const pathname = usePathname();

  const getBackgroundImage = () => {
    if (pathname === "/rebate") return CTAImage3.src;
    if (pathname === "/xm/jenis-akun" || pathname.startsWith("/valetax/jenis-akun/")) return CTAImage2.src;
    return CTAImage.src;
  };

  return (
    <SectionLayout
      title={
        pathname === "/xm" && (
          <>
            Mulai Trading di <span className="text-[#1570EF]">XM</span>
          </>
        )
      }
    >
      <main
        className="w-full md:aspect-[16/6] aspect-[16/8] rounded-2xl relative text-white flex items-center justify-center bg-primary bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      >
        <div className="size-full bg-primary bg-opacity-75" />
        <div className="absolute flex text-center px-1 md:px-4 w-full flex-col md:gap-8 gap-2 items-center justify-center">
          {pathname === "/rebate" ? (
            <>
              <p className="md:text-5xl text-xl font-semibold text-center md:max-w-4xl">
                Hubungi Customer Service dan Klaim Rebate Anda.
              </p>
              <p className="md:text-base text-xs">
                Hubungi tim Customer Service kami untuk proses klaim rebate Anda. Dapatkan bantuan cepat dan pastikan Anda mendapatkan keuntungan maksimal dari setiap transaksi trading.
              </p>
            </>
          ) : pathname === "/xm/jenis-akun" || pathname.startsWith("/valetax/jenis-akun/") ? (
            <>
              <p className="md:text-5xl text-xl font-semibold text-center md:max-w-4xl">
                Ingin mencoba simulasi trading?
              </p>
              <p className="md:text-base text-xs">
                Mulai demo trading untuk mendapatkan simulasi dan uji strategi trading dengan dana virtual.
              </p>
            </>
          ) : (
            <p className="md:text-5xl text-xl font-semibold text-center md:max-w-4xl">
              Bingung memulai trading? Konsultasikan dengan tim {" "}
              <span className="text-[#25C660]">RajaFx</span>
            </p>
          )}
          <Link href={"/hubungi-kami"}>
            <Button variant="secondary">Hubungi Kami</Button>
          </Link>
        </div>
      </main>
    </SectionLayout>
  );
};

export default CTA;