"use client"

import Image from "next/image";
import { motion } from "framer-motion"

const Clients = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
            id="clientes"
            className="container">
            {/* <h1 className="text-center text-4xl font-extrabold antialiased text-orange-100">
                Quem confia na RetenMax
            </h1> */}
            <div className="w-full flex justify-center">
                <Image src="/images/clientes.webp" alt="Clientes Retenmax" width={1000} height={1000} />
            </div>
            {/* <div className="grid grid-cols-2 justify-items-center items-center gap-4 mt-10 md:grid-cols-4">
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
            </div> */}
        </motion.section>
    );
};

export default Clients;
