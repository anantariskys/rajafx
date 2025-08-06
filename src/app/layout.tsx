import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import LenisProvider from "@/providers/LenisProvider";
import { ImagePreviewProvider } from "@/providers/ImagePreviewProvider";
import ImagePreviewModal from "@/components/PromosiMerch/ImagePreviewModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RajaFx",
  description: "",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased bg-white`}>
        <LenisProvider />
        <ImagePreviewProvider>
          <Navbar />

          {children}
          <CTA />
          <Footer />
           <ImagePreviewModal />
        </ImagePreviewProvider>
      </body>
    </html>
  );
}
