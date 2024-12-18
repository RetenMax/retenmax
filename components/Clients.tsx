"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type Logos = {
    src: string,
    alt: string;
}

const logos: Logos[] = [
    { src: "/clients/workout-360.png", alt: "Workout 360 Logo" },
    { src: "/clients/worklav.png", alt: "Worklav Logo" },
    { src: "/clients/vis-a-vis.png", alt: "Vis-a-Vis Logo" },
    { src: "/clients/vis-a-vis-2.png", alt: "Vis-a-Vis 2 Logo" },
    { src: "/clients/casa-duarta.png", alt: "Casa Duarta Logo" },
    { src: "/clients/kpi.png", alt: "KPI Logo" },
    { src: "/clients/panan.png", alt: "Panan Logo" },
    { src: "/clients/drogaria-popular.png", alt: "Drogaria Popular Logo" },
    { src: "/clients/sb.png", alt: "SB Logo" },
    { src: "/clients/super-estagios.png", alt: "Super Estágios Logo" },
    { src: "/clients/dico-panificadora.png", alt: "Dico Panificadora Logo" },
    { src: "/clients/black-detail.png", alt: "Black Detail Logo" },
    { src: "/clients/eduardo-ayub.png", alt: "Eduardo Ayub Logo" },
    { src: "/clients/harmony.png", alt: "Harmony Logo" },
    { src: "/clients/ello.png", alt: "Ello Logo" },
    { src: "/clients/tres-barras.png", alt: "Três Barras Logo" },
    { src: "/clients/my-box.png", alt: "My Box Logo" },
    { src: "/clients/kenshin.png", alt: "Kenshin Logo" },
    { src: "/clients/asa-anestesia.png", alt: "Asa Anestesia Logo" },
    { src: "/clients/dale-sorvetes.png", alt: "Dale Sorvetes Logo" },
    { src: "/clients/rejala.png", alt: "Rejala Logo" },
    { src: "/clients/inviolavel.png", alt: "Inviolável Logo" }
  ];
  


  const Clients = () => {
    return (
        <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1.5 }}
        id="clientes"
        className="container">
         <h1 className="text-center text-4xl font-extrabold antialiased text-orange-100 pb-10">
            Quem confia na RetenMax
        </h1> 
      <div className="clients-container overflow-hidden py-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          className="clients-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="client-slide">
              <Image
                width={300}
                height={300}
                src={logo.src}
                alt={logo.alt}
                className="object-contain client-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </motion.section>
    );
  };


export default Clients;










  {/* <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
            id="clientes"
            className="container">
             <h1 className="text-center text-4xl font-extrabold antialiased text-orange-100">
                Quem confia na RetenMax
            </h1> 
            <div className="w-full flex justify-center">
                <Image src="/images/clientes.webp" alt="Clientes Retenmax" width={1000} height={1000} />
            </div>
             <div className="grid grid-cols-2 justify-items-center items-center gap-4 mt-10 md:grid-cols-4">
                <Image width={150} height={150} src="/clients/workout-360.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/worklav.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/vis-a-vis.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/vis-a-vis-2.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/casa-duarta.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/kpi.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/panan.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/drogaria-popular.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/sb.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/super-estagios.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/dico-panificadora.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/black-detail.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/eduardo-ayub.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/harmony.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/ello.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/tres-barras.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/my-box.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/kenshin.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/asa-anestesia.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/dale-sorvetes.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/rejala.png" alt="Logo" className="object-contain" />
                <Image width={150} height={150} src="/clients/inviolavel.png" alt="Logo" className="object-contain" />
            </div> 
        </motion.section>*/}