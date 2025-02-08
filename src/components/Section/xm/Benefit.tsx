import WhyCard from "@/components/XM/WhyCard";
import whyXM from "@/data/whyXM";
import React from "react";

const Benefit = () => {
  return (
    <section className="bg-[#141921] py-24">
      <main className="container space-y-24 relative ">
        <h1 className="text-5xl font-semibold text-white">
          Mengapa <span className="text-[#1570EF]">XM</span>?
        </h1>
        <div className="bg-[#0B1D36] w-2/6 absolute bottom-0 left-1/2 -translate-x-1/2 z-0 aspect-square rounded-full blur-3xl" />

        <div className="grid md:grid-cols-4  relative z-10 gap-4 md:gap-8">
          {whyXM.map((item, index) => (
            <WhyCard key={index} item={item} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Benefit;
