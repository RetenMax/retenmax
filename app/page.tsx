import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Podcast from "@/components/Podcast";
import Whatsapp from "@/components/ui/whatsapp";

const Home = () => {
    return (
        <main>
            <Hero />
            <Companies />
            <About />
            <Podcast />
            <Clients />
            <Team />
            <Contact />
            <Footer />
            <Whatsapp />
        </main>
    )
}

export default Home
