import { Icon } from "@iconify/react/dist/iconify.js";
import React, { FC } from "react";
import PrimaryBG from "@/assets/primary-layanan-xm-card.png";
import SecondaryBG from "@/assets/secondary-layanan-xm-card.png";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  linkText: string;
  link: string;
  variant?: "primary" | "secondary";
}

const LayananXMCard: FC<Props> = ({
  description,
  linkText,
  title,
  variant = "primary",
  link,
}) => {
  const bgImage = variant === "primary" ? PrimaryBG.src : SecondaryBG.src;
  const className = variant === "primary" ? "bg-[#09326C]" : "bg-[#526687]";

  return (
    <Link href={link}>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={`${className} group overflow-hidden bg-contain bg-right bg-no-repeat p-6 rounded-3xl text-white relative shadow-lg flex flex-col justify-between gap-20`}
      >
        {variant === "secondary" && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#141921] to-transparent opacity-50"></div>
        )}
        <div className="relative z-20">
          <h3 className="text-4xl font-semibold">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>

        <div className="relative cursor-pointer gap-1 group-hover:gap-2 duration-300 ease-in-out z-20 text-white font-medium flex items-center">
          <p>{linkText}</p>
          <Icon icon="material-symbols:arrow-right-alt-rounded" />
        </div>
      </div>
    </Link>
  );
};

export default LayananXMCard;
