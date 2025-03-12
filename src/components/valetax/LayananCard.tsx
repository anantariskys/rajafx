import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LayananCardProps {
    item:{
        image:StaticImageData,
        title:string,
        description:string
        
    },
    link:string
}
const LayananCard:FC<LayananCardProps> = ({item,link}) => {
  return (
    <Link target={link==="https://ma.valetax.com/partner/IB6406734"?"_blank":"_self"} href={link}>
    <div className="w-full hover:shadow-lg duration-300 ease-in-out p-6 border rounded-3xl">
        <Image alt={item.title} className="w-32" src={item.image}/>
      <h3 className="text-2xl font-semibold">{item.title}</h3>
      <p className="text-sm font-light">{item.description}</p>
    </div>
    </Link>
  );
};

export default LayananCard;
