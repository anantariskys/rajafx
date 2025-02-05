import { Icon } from "@iconify/react/dist/iconify.js";
import React, { FC } from "react";

const InfoRow: FC<{ icon: string; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-2 items-center">
      <Icon className="text-2xl" icon={icon} />
      <p className="text-[#6B6E73]">{label}</p>
    </div>
    <p className="font-semibold">{value}</p>
  </div>
);

export default InfoRow;
