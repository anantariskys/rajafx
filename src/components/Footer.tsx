import Link from "next/link";
import React from "react";
import Logo from '@/assets/logo.svg'
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-primary text-white pb-8 pt-16">
      <main className="container">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-start">
          <div className="space-y-2 mx-auto md:mx-0 text-center md:text-left">
          <div className="flex gap-2 items-center">
            <Image src={Logo} alt="logo"/>
            <h1 className="font-semibold text-2xl">RAJAFX</h1>
          </div>
          <p className="text-sm font-light">Copyright @ 2024 RajaFX </p>
          <p className="text-sm font-light">All rights reserved</p>
          </div>
          <div className="md:flex grid grid-cols-2   gap-16 ">
            <div>
              <h3 className="text-xl font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/perbandingan">Perbandingan</Link>
                </li>
                <li>
                  <Link href="/rebate">Klaim Rebate</Link>
                </li>
                <li>
                  <Link href="/promosi">Klaim Merchandise</Link>
                </li>
                <li>
                  <Link href="/hubungi-kami">Hubungi Kami</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Broker</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/xm">XM</Link>
                </li>
                <li>
                  <Link href="/valetax">Valetax</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sosial Media</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Whatsapp</Link>
                </li>
                <li>
                  <Link href="/">Gmail</Link>
                </li>
                <li>
                  <Link href="/">Telepon</Link>
                </li>
       
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t md:my-12 my-6 "/>
        <p className="md:text-sm text-xs font-light">Situs ini dikelola oleh RajaFX sebagai Introducing Broker untuk XM dan Valetax. RajaFX tidak berafiliasi dengan XM Company maupun Valetax Company  dan hanya memfasilitasi deposit serta penarikan dana klien, tanpa terlibat dalam penyimpanan atau pengelolaan dana. Informasi di situs ini bersifat umum dan bukan merupakan saran investasi. RajaFX tidak menjamin keakuratan informasi. Perdagangan keuangan, termasuk forex, berisiko tinggi dan dapat menyebabkan hilangnya modal. Kami menghimbau klien untuk memahami risiko dan berkonsultasi dengan penasihat keuangan sebelum berinvestasi. RajaFX tidak bertanggung jawab atas kerugian dana klien yang timbul akibat tindakan XM dan  Valetax atau keputusan berdasarkan informasi di situs ini.</p>
      </main>
    </footer>
  );
};

export default Footer;
