import Hero from "../components/Hero/Hero";
import About from "../components/about/About";
import Stack from "../components/stack/Stack";
import Projects from "../components/projects/Projects";
import Education from "../components/education/Education";
import Footer from "../components/contact/Footer";
import Ender from "../components/ender/Ender";
import TopBtn from "../components/topbtn/TopBtn";

const HomePage = () => {
    
    return(
        <div>
            <Hero />
            <About />
            <Stack />
            <Projects />
            <Education />
            <TopBtn />
            <Footer />
            <Ender />
        </div>
    );
}

export default HomePage;