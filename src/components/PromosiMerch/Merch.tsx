"use client";

import { useState } from "react";
import XMIMG from "@/assets/XMPANEL.png";
import ValetaxIMG from "@/assets/ValetaxPanel.png";
import Image from "next/image";

export default function Merch() {
  const [activeTab, setActiveTab] = useState("xm");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      <div className="space-y-4">
        <h3 className="text-4xl font-semibold text-center">
          Reward Eksklusif untuk Trader RajaFX
        </h3>
        <p className="max-w-5xl mx-auto text-center">
          Nikmati berbagai merchandise eksklusif sebagai bentuk apresiasi bagi
          Anda yang telah melakukan trading dan deposit melalui link resmi mitra
          RAJAFX <strong>tanpa diundi!</strong>
        </p>
      </div>

      <div className="mt-8">
        {/* Tab buttons */}
        <div className="flex justify-center space-x-4 bg-gray-100 shadow rounded-full p-2 w-fit mx-auto">
          <button
            onClick={() => setActiveTab("xm")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === "xm"
                ? "bg-neutral-800 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            XM
          </button>
          <button
            onClick={() => setActiveTab("valetx")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === "valetx"
                ? "bg-neutral-800 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Valetax
          </button>
        </div>

        {/* Tab panels */}
        <div className="mt-8">
          {activeTab === "xm" && (
            <div className="grid grid-cols-2">
              <Image draggable={false} alt="XM" className="w-4/5" src={XMIMG} />
              <div>
                <div className="divide-y-2">
                  {/* Accordion Item 1 */}
                  <div className="overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(0)}
                      className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-10 flex items-center justify-center rounded-full text-white bg-neutral-800">
                          1
                        </div>
                        <span className="font-medium text-xl">
                          Deposit $300 + 2 Lot
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openAccordion === 0 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-200 ${
                        openAccordion === 0 ? "max-h-40" : "max-h-0"
                      } overflow-hidden`}
                    >
                      <div className="p-4">
                        Dapatkan T-Shirt Official XM Broker dengan deposit $300
                        dan trading sebanyak 2 lot.
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(1)}
                      className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-10 flex items-center justify-center rounded-full text-white bg-neutral-800">
                          2
                        </div>
                        <span className="font-medium text-xl">
                          Deposit $300 + 3 Lot
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openAccordion === 1 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-200 ${
                        openAccordion === 1 ? "max-h-40" : "max-h-0"
                      } overflow-hidden`}
                    >
                      <div className="p-4">
                        Dapatkan Jaket Official XM Broker dengan deposit $300
                        dan trading sebanyak 3 lot.
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(2)}
                      className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-10 flex items-center justify-center rounded-full text-white bg-neutral-800">
                          3
                        </div>
                        <span className="font-medium text-xl">
                          Deposit $300 + 5 Lot
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          openAccordion === 2 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-200 ${
                        openAccordion === 2 ? "max-h-40" : "max-h-0"
                      } overflow-hidden`}
                    >
                      <div className="p-4">
                        Dapatkan T-Shirt + Jaket Official XM Broker dengan
                        deposit $500 dan trading sebanyak 5 lot.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://wa.me/6283150370460"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2.5 rounded-lg font-medium bg-neutral-700 text-white hover:bg-neutral-800 transition-colors"
                    >
                      Klaim Merchandise
                    </a>
                    <button className="px-6 py-2.5 rounded-lg font-medium border-2 border-neutral-700 text-neutral-700 hover:bg-neutral-50 transition-colors">
                      Deposit sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "valetx" && (
            <div className="grid grid-cols-2">
              <Image
                draggable={false}
                alt="XM"
                className="w-4/5"
                src={ValetaxIMG}
              />
              <div>
                <div >
                  <div className="space-y-2">
                    <h5 className="text-2xl font-bold">
                      Deposit Minimal $200 USD
                    </h5>
                    <p>
                      Dapatkan <strong>T-Shirt Official Valetax Broker</strong>{" "}
                      dengan deposit $2000 USD.
                    </p>
                  </div>
                  <div className="mt-8">
                    <p>Persyaratan:</p>
                    <p>
                      Silakan kirimkan bukti deposit ke email Customer Service
                      RajaFx dan tunggu konfirmasi lebih lanjut.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://wa.me/6283150370460"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2.5 rounded-lg font-medium bg-neutral-700 text-white hover:bg-neutral-800 transition-colors"
                    >
                      Klaim Merchandise
                    </a>
                    <button className="px-6 py-2.5 rounded-lg font-medium border-2 border-neutral-700 text-neutral-700 hover:bg-neutral-50 transition-colors">
                      Deposit sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
