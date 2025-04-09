import './HeroMobile.css';
import hero from '../../assets/sky_hd.avif';
import pfp from '../../assets/pfp.avif';
import { useNavigation } from '../../services/NavigationContext';

const HeroMobile = () => {
    const { scrollToElement } = useNavigation();

    return (
        <div className="hero-mobile">
            <div className="hm-img-positioner">
                <img src={hero} alt="David Leder Background" className="hm-img" />
            </div>
            <div className="hm-motto">
                <p className="hmm-top">
                    "From <span className="hmm-color">concept</span> to <span className="hmm-color">launch</span>"
                </p>
                <p className="hmm-mid">
                    Helping businesses create a strong online identity.
                </p>
                <p className="hmm-bot">
                    Whether you need a simple one-page website or a massive web app that integrates with multiple other pieces of software, I will plan, build, develop, and deploy it for you.
                </p>
                <div className="hmmb-cont">
                    <div className="hmm-button"  onClick={() => scrollToElement("contact")}>
                        <p className="hmmb-p">Contact me</p>
                    </div>
                </div>
            </div>
            <div className="hm-pfp-cont">
                <img src={pfp} alt="David Leder" className="hm-pfp" />
            </div>
        </div>
    );
};

export default HeroMobile;