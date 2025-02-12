import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import InfoRow from "./InfoRow";
import Button from "../Button";
import Link from "next/link";

interface Broker {
  image: StaticImageData;
  name: string;
  description: string;
  minDeposit: string;
  spread: string;
  maxLeverage: string;
  accountTypes: string;
  link: string;
}

interface BrokerCardProps {
  broker: Broker;
}

const BrokerCard: FC<BrokerCardProps> = ({ broker }) => {
  return (
    <div className="max-w-sm w-full gap-4 p-6 border rounded-lg flex flex-col justify-between">
      <div>
        <Image
          src={broker.image}
          alt={broker.name}
          className="w-24 object-contain aspect-video"
          draggable={false}
        />
        <h4 className="text-2xl font-semibold mt-2">{broker.name}</h4>
        <p className="text-[#6B6E73] mt-2">{broker.description}</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <InfoRow
          icon="solar:dollar-linear"
          label="Min Deposit"
          value={broker.minDeposit}
        />
        <InfoRow
          icon="material-symbols:align-self-stretch-rounded"
          label="Spread"
          value={broker.spread}
        />
        <InfoRow
          icon="mingcute:balance-line"
          label="Max Leverage"
          value={broker.maxLeverage}
        />
        <InfoRow
          icon="solar:user-bold"
          label="Jenis Tipe"
          value={broker.accountTypes}
        />
        <Link href={broker.link}>
        <Button width="w-full">Lihat lebih lengkap</Button>
        </Link>
      </div>
    </div>
  );
};

export default BrokerCard;
