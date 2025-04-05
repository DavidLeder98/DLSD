import './Footer.css'
import phone from '../../assets/svgs/phone.svg';
import email from '../../assets/svgs/email.svg';
import linkedin from '../../assets/svgs/linkedin.svg';
import github from '../../assets/svgs/github.svg';
import { useNavigation } from '../../services/NavigationContext';

const Footer = () => {
    const { scrollToElement } = useNavigation();

    return(
        <div className="footer">
            <div className="footer-cont" id="contact">
                <div className="footer-section">
                    <h3 className="footer-h3">Contact</h3>
                    <div className="footer-link">
                        <a href="tel:+381601518552" className="footer-a">
                            <div className="footer-img-cont">
                                <img src={phone} alt="footer phone svg" className="footer-phone" />
                            </div>
                            <span className="footer-span">Tel : +381 60 151 8552</span>
                        </a>
                    </div>
                    <div className="footer-link">
                        <a  href="mailto:david.leder.dev@gmail.com" className="footer-a">
                            <div className="footer-img-cont">
                                <img src={email} alt="footer email svg" className="footer-email" />
                            </div>
                            <span className="footer-span">david.leder.dev@gmail.com</span>
                        </a>
                    </div>
                    <div className="footer-link">
                        <a href="https://www.linkedin.com/in/david-leder/" target="_blank" className="footer-a">
                            <div className="footer-img-cont">
                                <img src={linkedin} alt="footer linkedin svg" className="footer-linkedin" />
                            </div>
                            <span className="footer-span">LinkedIn</span>
                        </a>
                    </div>
                    <div className="footer-link" >
                        <a href="https://github.com/DavidLeder98" target="_blank" className="footer-a">
                            <div className="footer-img-cont">
                                <img src={github} alt="footer github svg" className="footer-github" />
                            </div>
                            <span className="footer-span">GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-h3">Pages</h3>
                    <p className="footer-p"><a href="https://www.lederdavid.com/" className="footer-a">Home Page</a></p>
                    <p className="footer-p"><a href="http://localhost:5173/bookwyrm" className="footer-a">BookWyrm documentation</a></p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-h3">Sections</h3>
                    <p className="footer-p"><span className="footer-scroll" onClick={() => scrollToElement("about")}>About</span></p>
                    <p className="footer-p"><span className="footer-scroll" onClick={() => scrollToElement("stack")}>Tech Stack</span></p>
                    <p className="footer-p"><span className="footer-scroll" onClick={() => scrollToElement("projects")}>Projects</span></p>
                    <p className="footer-p"><span className="footer-scroll" onClick={() => scrollToElement("education")}>Education</span></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;