import "./Stack.css";
import { motion } from "framer-motion";
import azure from '../../assets/stack/azure.png';
import csharp from '../../assets/stack/csharp.png';
import css from '../../assets/stack/css.png';
import git from '../../assets/stack/git.png';
import html from '../../assets/stack/html.png';
import js from '../../assets/stack/js.png';
import net from '../../assets/stack/net.png';
import react from '../../assets/stack/react.png';
import sql from '../../assets/stack/sql.png';
import ts from '../../assets/stack/ts.png';

const stackItems = [
    { name: "C#", img: csharp },
    { name: ".NET Framework", img: net },
    { name: "Azure", img: azure },
    { name: "MS SQL Server", img: sql },
    { name: "Git / Bash", img: git },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "TypeScript", img: ts },
    { name: "React", img: react },
];

// Define animation variants
const stackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
            delay: i * 0.1 // Row-based delay
        }
    })
};

const Stack = () => {
    return (
        <div className="stack" id="stack">
            <h2>My Tech Stack</h2>
            <div className="stack-cont">
                {stackItems.map((item, index) => (
                    <motion.div
                        className="stack-item"
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the item is in view
                        variants={stackVariants}
                        custom={index} // Pass index to control staggered delay
                    >
                        <div className="stack-img-cont">
                            <img src={item.img} alt={item.name} className="stack-img" />
                        </div>
                        <h3 className="stack-h3">{item.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Stack;
