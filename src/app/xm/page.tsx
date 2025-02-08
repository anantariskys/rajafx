"use client";
import React from "react";
import SectionLayout from "@/layouts/SectionLayout";
import whyXM from "@/data/whyXM";
import WhyCard from "@/components/XM/WhyCard";
import { jenisAkunXM } from "@/data/jenisAkun";
import JenisAkunCard from "@/components/JenisAkunCard";
import Hero from "@/components/Section/xm/Hero";
import About from "@/components/Section/xm/About";
import Feature from "@/components/Section/xm/Feature";
import Benefit from "@/components/Section/xm/Benefit";
import JenisAkun from "@/components/Section/xm/JenisAkun";
const XM = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Feature/>
    <Benefit/>
    <JenisAkun/>
  

    
    </>
  );
};

export default XM;
