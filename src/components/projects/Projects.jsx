import './Projects.css';
import jastreb from '../../assets/projects/jastreb.png';
import pda from '../../assets/projects/pda.png';
import bookwyrm from '../../assets/projects/bookwyrm.png';
import dlsd from '../../assets/projects/dlsd.png';
import newtab from '../../assets/svgs/newtab2.svg';
import { Link } from 'react-router-dom';
import { div } from 'framer-motion/client';

const Projects = () => {
    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return(
        <div className="projects-cont">
            <div className="projects" id="projects">
                <h2 className="proj-h2">My Projects</h2>
                <div className="projects-list">

                    {/*Jastreb website*/}
                    <div className="proj">
                        <div className="proj-img-cont" onClick={() => openLink("https://www.jastreb.rs/")}>
                            <img src={jastreb} alt="Jastreb logo" className="proj-img" />
                            <div className="tab">GO TO PAGE <img src={newtab} alt="open new tab" className="newtab" /></div>
                        </div>
                        <div className="proj-details">
                            <h3 className="proj-h3">Jastreb | <span className="ph3-gray">website & mailing system</span></h3>
                            <p>
                                <a href="https://www.jastreb.rs/" className="proj-a" target="_blank">
                                    <span className="proj-a-arrow">🡪 </span>
                                    <span className="proj-a-text">https://www.jastreb.rs/</span>
                                </a>
                            </p>
                            <p className="proj-p">Jastreb d.o.o. is medium sized welding and metalurgy materials supply company. They requested me to make a new website for them while keeping their old domain, which was registered all the way back in 2008. They also wished to integrate an old emailing system with this website and domain.</p>
                            <p className="proj-p">The website is built in React JS, featuring a couple of must-have libraries such as react-router-dom and framer-motion. The styling is sleek and modern, and the color scheme was chosen to reflect the feeling of welding and metalwork. All CSS was written by hand, since I didn't want TailWind or BootStrap to limit the style of the project. The website also features some modern UI elements such as an interactive google maps iframe and a digital product catalog.</p>
                            <p className="proj-p">Resolving the issue with the mailing system was relatively simple. Using the hosting platform of the domain, and the hosting platform of the mailing service, I connected the two with a "CNAME", a "txt" and an "A" record.</p>
                        </div>
                    </div>

                    {/*PDA website*/}
                    <div className="proj">
                        <div className="proj-img-cont" onClick={() => openLink("https://www.prodentalaesthetic.com/")}>
                            <img src={pda} alt="Pro Dental Aesthetic logo" className="proj-img" />
                            <div className="tab">GO TO PAGE  <img src={newtab} alt="open new tab" className="newtab" /></div>
                        </div>
                        <div className="proj-sep"></div>
                        <div className="proj-details">
                            <h3 className="proj-h3">Pro Dental & Aesthetic | <span className="ph3-gray">website</span></h3>
                            <p>
                                <a href="https://www.prodentalaesthetic.com/" className="proj-a" target="_blank">
                                    <span className="proj-a-arrow">🡪 </span>
                                    <span className="proj-a-text">https://www.prodentalaesthetic.com/</span>
                                </a>
                            </p>
                            <p className="proj-p">Pro Dental & Aesthetic is a family owned dental clinic in Novi Sad. They requested a bilingual website, in a "clean and white aesthetic". The project was build in React JS, featuring a small directed messaging system, google maps iframe, and two language options: English and Serbian. Aditionally, I set up a custom domain for them.</p>
                            <p className="proj-p">The directed messaging system is quite simple, users can write messages on the website which are then forwarded to the clinic's email address. This messaging system also tracks users with cookies, thereby eliminating spam messages. The bilingual feature was created with a global LanguageContext. Each component in the app stores two objects, one with the english and one with the serbian text. Depending on the state of the global LanguagContext, the component adds the appropriate text to their respective elements.</p>
                        </div>
                    </div>

                    {/*BookWyrm website*/}
                    <div className="proj">
                        <div className="proj-img-cont" onClick={() => openLink("https://www.bookwyrm.store/")}>
                            <img src={bookwyrm} alt="BookWyrm logo" className="proj-img" />
                            <div className="tab">GO TO PAGE  <img src={newtab} alt="open new tab" className="newtab" /></div>
                        </div>
                        <div className="proj-sep"></div>
                        <div className="proj-details">
                            <h3 className="proj-h3">Book Wyrm | <span className="ph3-gray"> an e-commerce book store (pet project)</span></h3>
                            <p>
                                <a href="https://www.bookwyrm.store/" className="proj-a" target="_blank">
                                    <span className="proj-a-arrow">🡪 </span>
                                    <span className="proj-a-text">https://www.bookwyrm.store/</span>
                                </a>
                            </p>
                            <p className="proj-p">This website was a demo e-commerce platform I created to showcase my skills and abilities as a full-stack web developer. While the site was fully functional, it was not a real online store and did not support online payments. Eventually I needed to shut it down, because maintaining a database and a server for a demo project was too expensive.</p>
                            <p className="proj-p">The project was deployed via Azure, it had a .NET back end and a React TS front end. The websites data, such as products, categories and usesrs were stored in a Microsoft SQL database. The site had user authentication and tracking via cookies, a cart feature for both registered and guest users and an admin pannel for managing products. </p>
                            <p className="proj-p">A full breakdown of the project, and the tools I used to build it can be found <Link className="proj-a" to="/bookwyrm"><span className="proj-a-arrow">🡪 </span><span className="proj-a-text">here.</span></Link></p>
                        </div>
                    </div>

                    {/*DLSD website*/}
                    <div className="proj">
                        <div className="proj-img-cont" onClick={() => openLink("https://www.lederdavid.com/")}>
                            <img src={dlsd} alt="David Leder logo" className="proj-img" />
                            <div className="tab">GO TO PAGE  <img src={newtab} alt="open new tab" className="newtab" /></div>
                        </div>
                        <div className="proj-sep"></div>
                        <div className="proj-details">
                            <h3 className="proj-h3">My personal website</h3>
                            <p>
                                <a href="https://www.lederdavid.com/" className="proj-a" target="_blank">
                                    <span className="proj-a-arrow">🡪 </span>
                                    <span className="proj-a-text">https://www.lederdavid.com/</span>
                                </a>
                            </p>
                            <p className="proj-p">This is my personal website. I built it to share my skills, abilities, and projects with potential clients. It’s designed to be simple, modern, and easy to navigate, giving visitors a clear look at what I can bring to the table as a software developer.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;