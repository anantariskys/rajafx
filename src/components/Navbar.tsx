"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Dapatkan path halaman saat ini

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Valetax", path: "/valetax" },
    { name: "XM", path: "/xm" },
    { name: "Perbandingan", path: "/perbandingan" },
    { name: "Hubungi Kami", path: "/hubungi-kami" },
  ];

  return (
    <nav className="bg-primary text-[#9A9CA0]">
      <main className="flex container py-6 justify-between items-center">
        <div>
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
