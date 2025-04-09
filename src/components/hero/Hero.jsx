import './Hero.css';
import hero from '../../assets/sky_hd.avif';
import pfp from '../../assets/pfp.avif';
import { motion } from "framer-motion";
import { useNavigation } from '../../services/NavigationContext';
import { useState } from 'react';

const Hero = () => {
    const currentAge = new Date().getFullYear()-1998;

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
            <img src={hero} alt="david leder background" className="hero-img" />
            <div className="hero-content">
                <div className="pfp-outer">
                    <div className="outer-text-cont">
                        <div className="outer-text">
                            <p>
                                <b className="b-600">Name:</b>
                                <p>David Leder</p>
                            </p>
                            <p>
                                <b className="b-600">Age:</b>
                                <p>{currentAge}</p>
                            </p>
                            <p>
                                <b className="b-600">Profession:</b>
                                <p>Software developer</p>
                            </p>
                            <p>
                                <b className="b-600">Devotion to Clients:</b>
                                <p>Unmatched</p>
                            </p>
                            <p>
                                <b className="b-600">Hobbies:</b>
                                <p>Cycling, woodworking</p>
                            </p>
                            <p>
                                <b className="b-600">Favorite activity:</b>
                                <p>Making unnecessarily interactive websites</p>
                            </p>
                        </div>
                    </div>
                    <div className="pfp-inner-cont">
                        <div className="pfp-inner">
                            <img src={pfp} alt="david leder" className="hero-pfp" />
                        </div>
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