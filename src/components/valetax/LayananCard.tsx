import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface LayananCardProps {
    item:{
        image:StaticImageData,
        title:string,
        description:string
    }
}
const LayananCard:FC<LayananCardProps> = ({item}) => {
  return (
    <div className="w-full hover:shadow-lg duration-300 ease-in-out p-6 border rounded-3xl">
        <Image alt={item.title} className="w-32" src={item.image}/>
      <h3 className="text-2xl font-semibold">{item.title}</h3>
      <p className="text-sm font-light">{item.description}</p>
    </div>
  );
};

export default LayananCard;
