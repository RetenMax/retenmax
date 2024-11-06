import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Podcast from "@/components/Podcast";
import Header from "@/components/Header";
import Blog from "./blog/page";
import Footer from "@/components/Footer";

const Home = () => {
    return (
        <main>
            <Header/>
            <Hero />
            <Companies />
            <About />
            <Podcast />
            <Clients />
            <Team />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home
