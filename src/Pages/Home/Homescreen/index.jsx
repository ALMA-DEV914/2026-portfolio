import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
export default function Home (){
    return (
        <div className="home">
            <Navbar />
           <HeroSection />
           <AboutMe />
        </div>
    );
}