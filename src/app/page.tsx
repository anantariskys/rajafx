import "@splidejs/react-splide/css";
import Hero from "@/components/Section/landing/Hero";
import About from "@/components/Section/landing/About";

import Broker from "@/components/Section/landing/Broker";
import BrokerTable from "@/components/Section/landing/BrokerTable";
import JenisAkun from "@/components/Section/landing/JenisAkun";
import Benefit from "@/components/Section/landing/Benefit";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefit />
      <Broker />
      <BrokerTable />
      <JenisAkun />
    </>
  );
}
