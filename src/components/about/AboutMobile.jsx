import './About.css';
import { motion } from "framer-motion";
import click from '../../assets/svgs/click.svg';
import compass from '../../assets/svgs/compass.svg';
import code from '../../assets/svgs/code6.svg';

// Container for staggered children
const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

// Children slide in from left
const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.6 } }
};

const AboutMobile = () => {
    return (
        <div className="about" id="about">
            <h2 className="about-h2">About me, and what I do</h2>
            <div className="about-content">
                {["1. Software development", "2. SEO and digital Marketing", "3. Product Design & Development"].map((title, i) => (
                    <motion.div
                        key={i}
                        className="ac-section"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={sectionVariants}
                    >
                        <motion.div className="ah3-cont" variants={itemVariants}>
                            <h3>{title}</h3>
                            <div className="a-svg-cont">
                                <img src={i === 0 ? code : i === 1 ? click : compass} alt="about svg" className="a-svg" />
                            </div>
                        </motion.div>
                        <motion.h4 variants={itemVariants}>
                            {i === 0 && "Have an idea? Let's build it together!"}
                            {i === 1 && "Get noticed, stick it to the competition!"}
                            {i === 2 && "Need a professional looking logo or online catalog? You've come to the right place!"}
                        </motion.h4>
                        <motion.p variants={itemVariants}>
                            {i === 0 && "I'm a full stack developer with my main focus being web development. I mainly craft scalable, maintainable, and well-designed APIs or powerful JavaScript client-side applications."}
                            {i === 1 && "All of my projects are made with Search Engine Optimization (SEO) in mind. SEO is about helping search engines understand your content, and helping users find your site."}
                            {i === 2 && "Helping my clients establish a strong and lasting online presence is my top priority. Whether you need a simple one-page website or a massive web app, product design is crucial."}
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            {i === 0 && "I'm very invested in every project I start, I take time to learn everything about your business and together, we find ways to grow your revenue and solve problems."}
                            {i === 1 && "To help this process along, I use SERP (Search Engine Results Page) marketing. If your business has high competition, we can boost traffic through strategic marketing."}
                            {i === 2 && "Using tools like Adobe Photoshop, InDesign, and Illustrator, I create sleek and modern products that will set you apart from the competition."}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutMobile;
