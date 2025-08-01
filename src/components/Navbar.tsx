"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = useMemo(
    () => [
      { name: "Home", path: "/", activePath: ["/"] },
      {
        name: "Broker",
        submenu: [
          { name: "Valetax", path: "/valetax", activePath: ["/valetax", "/valetax/jenis-akun", "/valetax/copy-trading"] },
          { name: "XM", path: "/xm", activePath: ["/xm", "/xm/copy-trading", "/xm/jenis-akun"] },
        ],
      },
      { name: "Rebate", path: "/rebate", activePath: ["/rebate"] },
      {
        name: "Promosi",
        submenu: [
          { name: "Promosi", path: "/promosi", activePath: ["/promosi"] },
          { name: "Promosi Merch", path: "/promosi-merch", activePath: ["/promosi-merch"] },
        ],
      },
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
          {menuItems.map((item) => {
            if ('submenu' in item) {
              const isActive = item.submenu?.some(subItem => 
                subItem.activePath.includes(pathname)
              );
              
              return (
                <motion.li
                  key={item.name}
                  className="relative"
                  onHoverStart={() => setActiveDropdown(item.name)}
                  onHoverEnd={() => setActiveDropdown(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    className={`flex items-center gap-1 ${
                      isActive ? "text-white font-semibold" : "hover:text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 bg-primary rounded-md shadow-lg py-2 min-w-[150px]"
                      >
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={`block px-4 py-2 hover:bg-primary-dark transition-colors ${
                              subItem.activePath.includes(pathname)
                                ? "text-white font-semibold"
                                : "hover:text-white"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            }

            const isActive = item.activePath.includes(pathname);
            return (
              <motion.li
                key={item.path}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.path}
                  className={`transition-all ${
                    isActive ? "text-white font-semibold" : "hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
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
              {menuItems.map((item) => {
                if ('submenu' in item) {
                  return (
                    <li key={item.name} className="space-y-2">
                      <div className="font-semibold">{item.name}</div>
                      <ul className="pl-4 space-y-2">
                        {item.submenu?.map((subItem) => (
                          <motion.li
                            key={subItem.path}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              href={subItem.path}
                              className={`block py-2 border-l text-sm pl-2 transition-all ${
                                subItem.activePath.includes(pathname)
                                  ? "text-white font-semibold"
                                  : "hover:text-gray-300"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name} 
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                const isActive = item.activePath.includes(pathname);
                return (
                  <motion.li
                    key={item.path}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.path}
                      className={`block py-2 transition-all ${
                        isActive ? "text-white font-semibold" : "hover:text-gray-300"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
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