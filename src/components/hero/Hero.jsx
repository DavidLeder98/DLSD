import './Hero.css';
import hero from '../../assets/sky_hd.png';
import hero2 from '../../assets/sky_ld.png';
import pfp from '../../assets/pfp.png';
import { motion } from "framer-motion";
import { useNavigation } from '../../services/NavigationContext';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const { scrollToElement } = useNavigation();

    return(
        <div className="hero">
            <img src={hero2} alt="david leder background" className="hero-img red" />
            <img src={hero} alt="david leder background" className="hero-img" />
            <div className="hero-content">
                <div className="pfp-outer">
                    <div className="pfp-inner">
                        <img src={pfp} alt="david leder" className="hero-pfp" />
                    </div>
                </div>
                <motion.div
                className="hero-motto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.p className="hm-top" variants={itemVariants}>
                        "From <span className="hm-color">concept</span> to <span className="hm-color">launch</span>"
                    </motion.p>
                    <motion.p className="hm-mid" variants={itemVariants}>
                        Helping businesses create a strong online identity.
                    </motion.p>
                    <motion.p className="hm-bot" variants={itemVariants}>
                        Whether you need a simple one-page website or a massive web app that integrates with multiple other pieces of software, I will plan, build, develop, and deploy it for you.
                    </motion.p>
                    <motion.div className="hmb-cont" variants={itemVariants}>
                        <div className="hm-button"  onClick={() => scrollToElement("contact")}>
                            <p className="hmb-p">Contact me</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;