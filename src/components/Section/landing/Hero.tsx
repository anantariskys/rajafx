"use client";
import { animateScroll as scroll } from "react-scroll";
import Button from "@/components/Button";
import HeroIMG from "@/assets/hero-img.jpg";
import Link from "next/link";

const Hero = () => {
  const handleScroll = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const target = document.getElementById("about-raja");
    if (target) {
      scroll.scrollTo(target.offsetTop-100, {
        duration: 1500,
        smooth: "easeInOutQuart",

      });
    }
  };

  return (
    <header className="relative h-[150vh] flex justify-center overflow-x-hidden">
      <div
        style={{ backgroundImage: `url(${HeroIMG.src})` }}
        className="w-full h-[100vh] scale-[170%] bg-cover bg-center rounded-b-[49%] md:rounded-b-[50%] relative overflow-hidden flex items-center justify-center"
      >
        <div className="bg-primary bg-opacity-75 size-full" />
      </div>

      <div className="absolute gap-4 top-0 px-4 md:px-0 z-10 flex flex-col h-screen items-center justify-center text-center text-white">
        <h1 className="md:text-6xl text-3xl max-w-6xl font-bold">
          Maksimalkan Trading Anda Dengan Partner Forex <span className="text-[#25C660]">Terbaik</span>
        </h1>
        <p className="text-sm font-light max-w-4xl">
          Bergabunglah dengan platform trading terpercaya yang memberikan anda akses eksklusif ke broker forex terbaik pilihan kami. Nikmati layanan premium hingga bonus menarik untuk memaksimalkan potensi trading anda.
        </p>
        <Link href="#about-raja" onClick={handleScroll}>
          <Button variant="secondary">Mulai Sekarang</Button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
