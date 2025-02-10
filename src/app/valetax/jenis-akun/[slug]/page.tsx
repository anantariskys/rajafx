import { Metadata } from "next";
import { notFound } from "next/navigation"; // Untuk handle jika slug tidak ditemukan
import { jenisAkunValetax2 } from "@/data/jenisAkun";

import DetailAkun from "./DetailAkun";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const akun = jenisAkunValetax2.find((item) => item.slug === params.slug);

  return {
    title: akun
      ? `Akun ${akun.name2} | RajaFx`
      : "Akun Tidak Ditemukan | RajaFx",
    description: akun ? akun.description3 : "Halaman akun tidak ditemukan.",
  };
}

const Page = ({ params }: PageProps) => {
  const akun = jenisAkunValetax2.find((item) => item.slug === params.slug);

  if (!akun) return notFound();

  return <DetailAkun />;
};

export default Page;
