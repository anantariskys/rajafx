import { Icon } from "@iconify/react/dist/iconify.js";
import React, { FC } from "react";

interface BenefitCardProps {
  icon: string;
  title: string;
  benefit: string;
}
const BenefitCard: FC<BenefitCardProps> = ({ benefit, icon, title }) => {
  return (
    <div className="flex gap-4">
      <div className="bg-[#272E3B] rounded-full p-2 aspect-square size-fit">
        <Icon icon={icon} className="text-[#25C660] text-4xl" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="font-light text-[#C7C8CA] max-w-lg text-sm">{benefit}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
