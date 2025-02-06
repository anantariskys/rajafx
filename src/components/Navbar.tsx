  "use client";

  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import Logo from '@/assets/logo.svg'
  import Image from "next/image";
import { useMemo } from "react";

  const Navbar = () => {
    const pathname = usePathname(); 


    const menuItems = useMemo(
      () => [
        { name: "Home", path: "/", activePath: ["/"] },
        { name: "Valetax", path: "/valetax", activePath: ["/valetax"] },
        { name: "XM", path: "/xm", activePath: ["/xm", "/xm/copy-trading", "/xm/jenis-akun"] },
        { name: "Perbandingan", path: "/perbandingan", activePath: ["/perbandingan"] },
        { name: "Hubungi Kami", path: "/hubungi-kami", activePath: ["/hubungi-kami"] },
      ],
      []
    );
    return (
      <nav className="bg-primary z-50 fixed top-0 w-full  text-[#9A9CA0]">
        <main className="flex container py-6 justify-between items-center">
          <div className="flex items-center  gap-2">
            <Image src={Logo} alt="logo"/>
            <h1 className="text-white text-2xl font-semibold">RAJAFX</h1>
          </div>
        <ul className="flex gap-8">
          {menuItems.map(({ name, path, activePath }) => {
            const isActive = activePath.includes(pathname);
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={`transition-all ${isActive ? "text-white font-semibold" : "hover:text-white"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        </main>
      </nav>
    );
  };

  export default Navbar;
