import './About.css';
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: i * 0.3 } // Delay increases per section
    })
};

const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="about-h2">About me, and what I do</h2>
            <div className="about-content">
                {["Software development", "SEO and digital Marketing", "Product Design & Development"].map((title, i) => (
                    <motion.div
                        key={i}
                        className="ac-section"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Adjusted trigger
                        variants={sectionVariants}
                        custom={i} // Pass index for delay calculation
                    >
                        <h3 className={`ah3-${i === 0 ? 'left' : i === 1 ? 'mid' : 'right'}`}>
                            {title}
                        </h3>
                        <h4>
                            {i === 0 && "Have an idea? Let's build it together!"}
                            {i === 1 && "Get noticed, stick it to the competition!"}
                            {i === 2 && "Need a professional looking logo or online catalog? You've come to the right place!"}
                        </h4>
                        <p>
                            {i === 0 && "I'm a full stack developer with my main focus being web development. I mainly craft scalable, maintainable, and well-designed APIs or powerful JavaScript client-side applications."}
                            {i === 1 && "All of my projects are made with Search Engine Optimization (SEO) in mind. SEO is about helping search engines understand your content, and helping users find your site."}
                            {i === 2 && "Helping my clients establish a strong and lasting online presence is my top priority. Whether you need a simple one-page website or a massive web app, product design is crucial."}
                        </p>
                        <p>
                            {i === 0 && "I'm very invested in every project I start, I take time to learn everything about your business and together, we find ways to grow your revenue and solve problems."}
                            {i === 1 && "To help this process along, I use SERP (Search Engine Results Page) marketing. If your business has high competition, we can boost traffic through strategic marketing."}
                            {i === 2 && "Using tools like Adobe Photoshop, InDesign, and Illustrator, I create sleek and modern products that will set you apart from the competition."}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default About;
