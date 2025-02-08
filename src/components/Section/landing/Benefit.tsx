import BenefitCard from "@/components/BenefitCard";
import { benefits } from "@/data/benefits";
import React from "react";

const Benefit = () => {
  return (
    <section className="bg-primary py-16 mb-24">
      <main className="container text-white flex gap-4 md:flex-row flex-col justify-between">
        <div className="space-y-4">
          <h2 className="text-5xl font-semibold">
            Mengapa <span className="text-[#25C660]">RajaFX</span>?
          </h2>
          <p className="max-w-xl  text-[#C7C8CA]">
            Rajafx hadir sebagai mitra terpercaya bagi para trader yang mencari
            pengalaman trading yang optimal. Kami siap membantu Anda mencapai
            kesuksesan di pasar global.
          </p>
        </div>
        <div className="space-y-6">
          {benefits.map((item, index) => (
            <BenefitCard
              benefit={item.description}
              icon={item.icon}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Benefit;