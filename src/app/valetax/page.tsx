import About from "@/components/Section/valetax/About";
import Benefit from "@/components/Section/valetax/Benefit";
import CopyTrading from "@/components/Section/valetax/CopyTrading";
import Hero from "@/components/Section/valetax/Hero";
import JenisAkun from "@/components/Section/valetax/JenisAkun";
import Layanan from "@/components/Section/valetax/Layanan";
import Pembayaran from "@/components/Section/valetax/Pembayaran";
import React from "react";

const Valetax = () => {
  return (
    <>
      <Hero />
      <Layanan />
      <About/>
      <Benefit/>
      <JenisAkun/>
      <CopyTrading/>
      <Pembayaran/>
    </>
  );
};

export default Valetax;
