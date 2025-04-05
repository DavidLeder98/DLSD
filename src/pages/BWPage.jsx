import Footer from "../components/contact/Footer";
import Ender from "../components/ender/Ender";
import TopBtn from "../components/topbtn/TopBtn";
import BWBanner from "../components/bw_banner/BWBanner";
import BWDocumentation from "../components/bw_documentation/BWDocumentation";

const BWPage = () => {
    return(
        <div>
            <BWBanner />
            <BWDocumentation />
            <TopBtn />
            <Footer />
            <Ender />
        </div>
    );
}

export default BWPage;