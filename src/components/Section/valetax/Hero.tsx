"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Button from "@/components/Button";

import HeroIMG1 from "@/assets/valetax-hero-1.jpg";
import HeroIMG2 from "@/assets/valetax-hero-2.jpg";
import Merch from "@/assets/valetax-merch.png";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: HeroIMG1,
    title: "Investasi Terbaik Dengan Banyak",
    highlight: "Kemudahan",
    description:
      "Maksimalkan potensi keuntungan Anda dengan menikmati proses investasi yang mudah dan tanpa hambatan dengan Valetax.",
    buttonText: "Jelajahi",
    link: "",
  },
  {
    id: 2,
    image: HeroIMG2,
    title: "Free",
    highlight: "Merchandise",
    description:
      "Cukup dengan deposit $150 USD dan klaim merchandise eksklusif Anda sekarang juga",
    buttonText: "Klaim Sekarang",
    heroIMG: Merch,
    link: "/valetax/promosi",
  },
];

const splideOptions = {
  type: "fade",
  height: "100vh",
  pagination: false,
  arrows: true,
};

interface HeroSlideProps {
  image: StaticImageData;
  heroIMG?: StaticImageData;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  link: string;
}
const HeroSlide: FC<HeroSlideProps> = ({
  image,
  title,
  highlight,
  description,
  buttonText,
  heroIMG,
  link,
}) => (
  <SplideSlide>
    <div
      style={{ backgroundImage: `url(${image.src})` }}
      className="w-full h-full bg-cover bg-center flex  items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <div className="relative z-10 text-white container flex md:flex-row flex-col-reverse items-center justify-between  ">
        <div className="flex flex-col gap-4 ">
          <h1 className="md:text-6xl text-4xl font-bold leading-tight max-w-4xl">
            {title} <span className="text-[#25C660]">{highlight}</span>
          </h1>
          <p className="md:text-lg font-light max-w-3xl">{description}</p>
          <Link href={link}>
            <Button variant="secondary-outline">{buttonText}</Button>
          </Link>
        </div>
        {heroIMG && <Image src={heroIMG} alt="merch" className="md:max-w-xl max-w-xs" />}
      </div>
    </div>
  </SplideSlide>
);

const Hero = () => {
  return (
    <header className="min-h-screen">
      <Splide options={splideOptions} className="h-full">
        {slides.map((slide) => (
          <HeroSlide key={slide.id} {...slide} />
        ))}
      </Splide>
    </header>
  );
};

export default Hero;
