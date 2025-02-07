"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import { jenisAkunValetax2 } from "@/data/jenisAkun";
import { Icon } from "@iconify/react/dist/iconify.js";

const DetailAkunCarousel = () => {
  return (
    <Splide
      options={{
        perPage: 4, // Default untuk desktop
        pagination: false,
        arrows: true,
        gap: "1rem",
        breakpoints: {
          1024: { perPage: 3 }, // Tablet besar
          768: { perPage: 2 }, // Tablet kecil
          480: { perPage: 1 }, // Mobile
        },
      }}
    >
      {jenisAkunValetax2.map((item, index) => (
        <SplideSlide key={index}>
          <div className="w-full group hover:bg-primary gap-6 duration-300 ease-in-out hover:text-white text-primary p-6 shadow border rounded-2xl">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl mx-auto w-fit text-2xl bg-[#E6F7E8] duration-200 ease-in-out group-hover:bg-[#3E4249] text-[#25C660]">
                <Icon icon={item.icon} />
              </div>
              <h4 className="text-2xl text-center font-bold">{item.name}</h4>
            </div>
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p>Deposit Minimal</p>
                <p className="font-semibold">
                  {item.details["Deposit Minimal"]}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Ukuran Kontrak</p>
                <p className="font-semibold">
                  {item.details["Ukuran Kontrak"]}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Leverage</p>
                <p className="font-semibold">
                  {item.details["Leverage Maksimal"]}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Margin call/Stop out</p>
                <p className="font-semibold">
                  {item.details["Harga Call/Stop Out"]}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>Komisi</p>
                <p className="font-semibold">{item.details.Komisi}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Spread</p>
                <p className="font-semibold">{item.details.Spread}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Instrumen Perdagangan</p>
                <p className="font-semibold">
                  {item.details["Instrumen Perdagangan"]}
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default DetailAkunCarousel;
