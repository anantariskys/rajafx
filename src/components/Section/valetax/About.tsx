import SectionLayout from "@/layouts/SectionLayout"
import AboutIMG from '@/assets/about-valetax.png'
import Image from "next/image"
const About = () => {
  return (
    <SectionLayout title={<>Berkenalan dengan <span className='text-[#25C660]'>Valetax</span></>}>
    <main className='flex md:flex-row flex-col-reverse items-center justify-between max-w-6xl  gap-6 mx-auto'>
        <p className="text-[#6B6E73]">Valetax adalah broker forex dan CFD yang menawarkan solusi trading modern dengan berbagai keunggulan. Valetax menyediakan akses ke pasar global dengan spread kompetitif dan eksekusi order cepat, memastikan pengalaman trading yang efisien. Valetax juga menawarkan platform trading yang user-friendly, cocok untuk anda trader pemula maupun berpengalaman.</p>
        <Image alt="about-img" className="md:max-w-md max-w-xs rounded-lg" src={AboutIMG}/>
     

    </main>
   </SectionLayout>
  )
}

export default About
