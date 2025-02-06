"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from '@/assets/logo.svg'
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname(); 

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Valetax", path: "/valetax" },
    { name: "XM", path: "/xm" },
    { name: "Perbandingan", path: "/perbandingan" },
    { name: "Hubungi Kami", path: "/hubungi-kami" },
  ];

  return (
    <nav className="bg-primary z-50 fixed top-0 w-full  text-[#9A9CA0]">
      <main className="flex container py-6 justify-between items-center">
        <div className="flex items-center  gap-2">
          <Image src={Logo} alt="logo"/>
          <h1 className="text-white text-2xl font-semibold">RAJAFX</h1>
        </div>
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} legacyBehavior>
                <a
                  className={`${
                    pathname === item.path
                      ? "text-white"
                      : "hover:text-white transition-all"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
