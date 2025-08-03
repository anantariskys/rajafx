"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { animateScroll as scroll } from "react-scroll";
import Button from "@/components/Button";
import HeroIMG1 from "@/assets/valetax-hero-1.jpg";
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
    link: "https://ma.valetax.com/partner/IB6406734",
  },
];

const splideOptions = {
  type: "fade",
  height: "100vh",
  rewind : true,
  pagination: false,
  arrows: true,
  speed: 1000,
  easing: "ease-in-out",
};

interface HeroSlideProps {
  image: StaticImageData;
  heroIMG?: StaticImageData;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  link?: string;
}

 const handleScroll = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const target = document.getElementById("valetax-layanan");
    if (target) {
      scroll.scrollTo(target.offsetTop-50, {
        duration: 1500,
        smooth: "easeInOutQuart",

      });
    }
  };
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
          {
            link?(
          <Link target="_blank" href={link}>
            <Button variant="secondary-outline">{buttonText}</Button>
          </Link>

            ):(

           <Button onClick={handleScroll}  variant="secondary-outline">{buttonText}</Button>
            )
          }
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
