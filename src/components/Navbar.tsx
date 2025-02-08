"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = useMemo(
    () => [
      { name: "Home", path: "/", activePath: ["/"] },
      { name: "Valetax", path: "/valetax", activePath: ["/valetax", "/valetax/promosi", "/valetax/copy-trading"] },
      { name: "XM", path: "/xm", activePath: ["/xm", "/xm/copy-trading", "/xm/jenis-akun"] },
      { name: "Perbandingan", path: "/perbandingan", activePath: ["/perbandingan"] },
      { name: "Hubungi Kami", path: "/hubungi-kami", activePath: ["/hubungi-kami"] },
    ],
    []
  );

  return (
    <nav className="bg-primary z-50 fixed top-0 w-full text-[#9A9CA0] shadow-lg">
      <main className="flex container py-6 justify-between items-center">
        {/* Logo */}
        <div className="flex items-center md:text-2xl text-sm gap-2">
          <Image src={Logo} alt="logo" className="w-10" />
          <h1 className="text-white font-semibold">RAJAFX</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex hidden gap-8">
          {menuItems.map(({ name, path, activePath }) => {
            const isActive = activePath.includes(pathname);
            return (
              <motion.li
                key={path}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={path}
                  className={`transition-all ${isActive ? "text-white font-semibold" : "hover:text-white"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {name}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </main>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-primary text-white p-6 shadow-md"
          >
            <ul className="flex flex-col gap-4 text-lg">
              {menuItems.map(({ name, path, activePath }) => {
                const isActive = activePath.includes(pathname);
                return (
                  <motion.li
                    key={path}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={path}
                      className={`block py-2 transition-all ${isActive ? "text-white font-semibold" : "hover:text-gray-300"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;