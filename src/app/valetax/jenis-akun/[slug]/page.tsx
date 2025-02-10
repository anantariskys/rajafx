import { jenisAkunValetax2 } from "@/data/jenisAkun";
import { Metadata } from "next";

import DetailAkun from "./DetailAkun";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const akun = jenisAkunValetax2.find((item) => item.slug === slug);

  return {
    title: akun
      ? `Akun ${akun.name2} | RajaFx`
      : "Akun Tidak Ditemukan | RajaFx",
    description: akun ? akun.description3 : "Halaman akun tidak ditemukan.",
  };
}

const Page = () => {
  return <DetailAkun />;
};

export default Page;
