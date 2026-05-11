import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Portfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Contact from "../ContactMe";
import Footer from "../Footer";
import Testimonial from "../Testimonials";
export default function Home (){
    return (
        <div className="home">
            <Navbar />
           <HeroSection />
           <AboutMe />
           <MySkills />
           <Portfolio />
           <Testimonial />
           <Contact />
           <Footer />
        </div>
    );
}