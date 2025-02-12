import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { FC } from "react";

interface JenisAkunCardProps {
  item: {
    name: string;
    description: string;
    spread: string;
    icon: string;
  };
}
const JenisAkunCard: FC<JenisAkunCardProps> = ({ item }) => {
  return (
    <div className="w-full group hover:bg-primary duration-300 ease-in-out hover:text-white text-primary  p-6 divide-y shadow border rounded-2xl">
      <div className="min-h-60 space-y-4">
        <div className="p-4 rounded-2xl mx-auto w-fit text-2xl bg-[#E6F7E8] duration-200 ease-in-out group-hover:bg-[#3E4249] text-[#25C660]">
          <Icon icon={item.icon} className="" />
        </div>
        <h4 className="text-2xl text-center font-bold">
          {item.name}
        </h4>
        <p className="text-[#6B6E73] group-hover:text-[#E8E8E9] duration-200 ease-in-out text-center">{item.description}</p>
      </div>
      <div className="py-4 flex flex-col gap-4">
        <p className=" text-center">Spread: {item.spread}</p>
        <Link target="_blank" href={'/valetax/jenis-akun'} className="relative cursor-pointer justify-center gap-1 z-20 text-[#25C660] font-medium flex items-center">
          <p>Pilih Akun</p>
          <Icon icon="material-symbols:arrow-right-alt-rounded" />
        </Link>
      </div>
    </div>
  );
};

export default JenisAkunCard;
