import HeroSelector from "../components/hero/HeroSelector";
import Stack from "../components/stack/Stack";
import Projects from "../components/projects/Projects";
import Education from "../components/education/Education";
import Footer from "../components/contact/Footer";
import Ender from "../components/ender/Ender";
import TopBtn from "../components/topbtn/TopBtn";
import AboutSelector from "../components/about/AboutSelector";

const HomePage = () => {
    
    return(
        <div>
            <HeroSelector />
            <AboutSelector />
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