"use client";
import React, { FC, useState } from "react";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  item: {
    name: string;
    description: string;
    minimum_deposit: string;
    image: StaticImageData;
  };
  link?: string;
  linkText?: string;
  additionalInfo?: {
    market?: string[];
    max_leverage?: string;
    stop_out_level?: string;
    bonus_eligibility: boolean;
    micro_account_option: boolean;
    swap_free: boolean;
    commission: boolean;
    spreads?: {
      emas: number;
      usdjpy: number;
      eurusd: number;
    };
  };
}

const JenisAkunCard: FC<Props> = ({
  item,
  link,
  linkText = "Lihat lebih lengkap",
  additionalInfo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-fit gap-6 bg-white flex flex-col justify-between rounded-lg p-6 border transition-all duration-300">
      {/* Image & Title */}
      <div className="min-h-72">
        <Image
          src={item.image}
          alt={item.name}
          className="w-28 aspect-square object-contain mx-auto"
          draggable={false}
        />
        <h4 className="font-semibold text-2xl text-center">{item.name}</h4>
        <p className="text-center text-[#6B6E73]">{item.description}</p>
      </div>

      {/* Minimum Deposit & Button */}
      <div className="font-semibold flex-col flex gap-4">
        <p className="text-center">Minimum Deposit {item.minimum_deposit}</p>
        {link && (
          <Link target="_blank" href={link}>
            <Button width="w-full">{linkText}</Button>
          </Link>
        )}

        {additionalInfo && (
          <div className="space-y-6">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden rounded-lg text-sm"
                >
                  <div className="min-h-[25.5rem] space-y-4 ">
                  
                  {additionalInfo.market && (
                    <InfoRow
                      title="Market"
                      height="min-h-16"
                      value={additionalInfo.market.join(", ")}
                    />
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <InfoRow
                      title="Kelayakan Bonus"
                      value={
                        <StatusIcon status={additionalInfo.bonus_eligibility} />
                      }
                    />
                    <InfoRow
                      title="Opsi Akun Mikro"
                      value={
                        <StatusIcon
                          status={additionalInfo.micro_account_option}
                        />
                      }
                    />
                    <InfoRow
                      title="Max. Leverage"
                      value={additionalInfo.max_leverage}
                    />
                    <InfoRow
                      title="Stop Out Level"
                      value={additionalInfo.stop_out_level}
                    />
                    <InfoRow
                      title="Bebas Swap"
                      value={<StatusIcon status={additionalInfo.swap_free} />}
                    />
                    <InfoRow
                      title="Komisi"
                      value={<StatusIcon status={additionalInfo.commission} />}
                    />
                      <InfoRow
              title="Deposit Minimum"
              value={item.minimum_deposit}
            />
                  </div>

                  {additionalInfo.spreads && (
                    <div className="space-y-4">
                      <p className="text-[#6B6E73] font-light text-center">
                        Spread from
                      </p>
                      <div className="flex justify-between items-center">
                        <InfoRow
                          title="Emas"
                          value={additionalInfo.spreads.emas}
                        />
                        <InfoRow
                          title="USD/JPY"
                          value={additionalInfo.spreads.usdjpy}
                        />
                        <InfoRow
                          title="EUR/USD"
                          value={additionalInfo.spreads.eurusd}
                        />
                      </div>
                    </div>
                  )}
          
            

            </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-500 cursor-pointer text-center text-sm"
            >
              {isOpen ? "Tampilkan lebih sedikit" : "Tampilkan lebih banyak"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* Komponen untuk menampilkan informasi */
const InfoRow: FC<{ title: string; value: React.ReactNode, height?:string }> = ({
  title,
  value,
  height='h-auto'
}) => (
  <div>
    <p className={` text-[#6B6E73] font-light`}>{title}</p>
    <p className={`${height}`}>{value}</p>
  </div>
);

/* Komponen untuk menampilkan icon status */
const StatusIcon: FC<{ status: boolean }> = ({ status }) => (
  <Icon
    className={`text-2xl ${status ? "text-green-500" : "text-red-500"}`}
    icon={
      status
        ? "material-symbols:check-circle-outline-rounded"
        : "material-symbols:cancel-outline-rounded"
    }
  />
);

export default JenisAkunCard;
