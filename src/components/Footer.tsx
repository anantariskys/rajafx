import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pb-8 pt-16">
      <main className="container">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-2xl">RAJAFX</h1>
          </div>
          <div className="flex gap-16 ">
            <div>
              <h3 className="text-xl font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Copy Trading</Link>
                </li>
                <li>
                  <Link href="/">Promosi</Link>
                </li>
                <li>
                  <Link href="/">Hubungi Kami</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Trading</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">Buka Akun</Link>
                </li>
                <li>
                  <Link href="/">Deposit</Link>
                </li>
                <li>
                  <Link href="/">Rebate</Link>
                </li>
                <li>
                  <Link href="/">Withdrawal</Link>
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
                  <Link href="/">Instagram</Link>
                </li>
                <li>
                  <Link href="/">Twitter</Link>
                </li>
                <li>
                  <Link href="/">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t my-12 "/>
        <p className="text-sm">Situs ini dikelola oleh RajaFX sebagai Introducing Broker untuk XM dan Valetax. RajaFX tidak berafiliasi dengan XM Company maupun Valetax Company  dan hanya memfasilitasi deposit serta penarikan dana klien, tanpa terlibat dalam penyimpanan atau pengelolaan dana. Informasi di situs ini bersifat umum dan bukan merupakan saran investasi. RajaFX tidak menjamin keakuratan informasi. Perdagangan keuangan, termasuk forex, berisiko tinggi dan dapat menyebabkan hilangnya modal. Kami menghimbau klien untuk memahami risiko dan berkonsultasi dengan penasihat keuangan sebelum berinvestasi. RajaFX tidak bertanggung jawab atas kerugian dana klien yang timbul akibat tindakan XM dan  Valetax atau keputusan berdasarkan informasi di situs ini.</p>
      </main>
    </footer>
  );
};

export default Footer;
