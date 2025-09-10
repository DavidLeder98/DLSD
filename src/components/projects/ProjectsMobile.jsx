import './ProjectsMobile.css';
import jastreb from '../../assets/projects/jastreb.png';
import pda from '../../assets/projects/pda.png';
import bookwyrm from '../../assets/projects/bookwyrm.png';
import dlsd from '../../assets/projects/dlsd.png';
import uparrow from '../../assets/svgs/up2.svg';
import soiov from '../../assets/projects/soiov.webp';
import { Link } from 'react-router-dom';
import { useState} from "react";

const ProjectsMobile = () => {
    const [isSoiovOpen, setIsisSoiovOpen] = useState(false);
    const [isJastrebOpen, setIsJastrebOpen] = useState(false);
    const [isPdaOpen, setIsPdaOpen] = useState(false);
    const [isBookwyrmOpen, setIsBookwyrmOpen] = useState(false);
    const [isDlsdOpen, setIsDlsdOpen] = useState(false);

    return(
        <div className="proj-mobile" id="projects">
            <div className="pm-h2">My Projects</div>
            <div className="pm-list">

                { /* SOIOV */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.soiov.org.rs/" className="pm-a" target="_blank">
                            <img src={soiov} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className={`pm-description ${isSoiovOpen ? 'show' : ''}`}>
                        <h3 className="pm-h3">Sindikalna Organizacija IOV</h3>
                        <p className="pm-gray">Full stack website</p>
                        <p className="pm-blue"><a href="https://www.soiov.org.rs/" className="pm-a" target="_blank">https://www.soiov.org.rs/</a></p>
                        <p className="pm-p">
                                This project was developed for the Institute of Oncology of Vojvodina. The website serves as a community announcement board, providing employees who join the syndicate with access to numerous benefits.
                            </p>
                            <p className="pm-p">
                                Administrators can easily manage all relevant content on the platform, including documents, member lists, and partner deals. They can also publish announcements using a custom-built text editor and compiler, which supports rich text formatting (bold text, hyperlinks, etc.), as well as tables and images.
                            </p>
                    </div>
                    <div className="pm-more-btn" onClick={() => setIsisSoiovOpen(prev => !prev)}>
                        <span className="pmb-text">Show {isJastrebOpen ? 'less' : 'more'}</span>
                        <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isJastrebOpen ? 'show' : ''}`} />
                    </div>
                </div>

                { /* Jastreb */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.jastreb.rs/" className="pm-a" target="_blank">
                            <img src={jastreb} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className={`pm-description ${isJastrebOpen ? 'show' : ''}`}>
                        <h3 className="pm-h3">Jastreb</h3>
                        <p className="pm-gray">website & mailing system</p>
                        <p className="pm-blue"><a href="https://www.jastreb.rs/" className="pm-a" target="_blank">https://www.jastreb.rs/</a></p>
                        <p className="pm-p">Jastreb d.o.o. is medium sized welding and metalurgy materials supply company. They requested me to make a new website for them while keeping their old domain, which was registered all the way back in 2008. They also wished to integrate an old emailing system with this website and domain.</p>
                        <p className="pm-p">The website is built in React JS, featuring a couple of must-have libraries such as react-router-dom and framer-motion. The styling is sleek and modern, and the color scheme was chosen to reflect the feeling of welding and metalwork. All CSS was written by hand, since I didn't want TailWind or BootStrap to limit the style of the project. The website also features some modern UI elements such as an interactive google maps iframe and a digital product catalog.</p>
                        <p className="pm-p">Resolving the issue with the mailing system was relatively simple. Using the hosting platform of the domain, and the hosting platform of the mailing service, I connected the two with a "CNAME", a "txt" and an "A" record.</p>
                    </div>
                    <div className="pm-more-btn" onClick={() => setIsJastrebOpen(prev => !prev)}>
                        <span className="pmb-text">Show {isJastrebOpen ? 'less' : 'more'}</span>
                        <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isJastrebOpen ? 'show' : ''}`} />
                    </div>
                </div>

                { /* PDA */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.prodentalaesthetic.com/" className="pm-a" target="_blank">
                            <img src={pda} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className={`pm-description ${isPdaOpen ? 'show' : ''}`}>
                        <h3 className="pm-h3">Pro Dental & Aesthetic</h3>
                        <p className="pm-gray">website</p>
                        <p className="pm-blue"><a href="https://www.prodentalaesthetic.com/" className="pm-a" target="_blank">https://www.prodentalaesthetic.com/</a></p>
                        <p className="pm-p">Pro Dental & Aesthetic is a family owned dental clinic in Novi Sad. They requested a bilingual website, in a "clean and white aesthetic". The project was build in React JS, featuring a small directed messaging system, google maps iframe, and two language options: English and Serbian. Aditionally, I set up a custom domain for them.</p>
                        <p className="pm-p">The directed messaging system is quite simple, users can write messages on the website which are then forwarded to the clinic's email address. This messaging system also tracks users with cookies, thereby eliminating spam messages. The bilingual feature was created with a global LanguageContext. Each component in the app stores two objects, one with the english and one with the serbian text. Depending on the state of the global LanguagContext, the component adds the appropriate text to their respective elements.</p>
                    </div>
                    <div className="pm-more-btn" onClick={() => setIsPdaOpen(prev => !prev)}>
                        <span className="pmb-text">Show {isPdaOpen ? 'less' : 'more'}</span>
                        <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isPdaOpen ? 'show' : ''}`} />
                    </div>
                </div>

                { /* BookWyrm */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.bookwyrm.store/" className="pm-a" target="_blank">
                            <img src={bookwyrm} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className={`pm-description ${isBookwyrmOpen ? 'show' : ''}`}>
                        <h3 className="pm-h3">Book Wyrm</h3>
                        <p className="pm-gray">an e-commerce book store (pet project)</p>
                        <p className="pm-blue"><a href="https://www.bookwyrm.store/" className="pm-a" target="_blank">https://www.bookwyrm.store/</a></p>
                        <p className="pm-p">This website was a demo e-commerce platform I created to showcase my skills and abilities as a full-stack web developer. While the site was fully functional, it was not a real online store and did not support online payments. Eventually I needed to shut it down, because maintaining a database and a server for a demo project was too expensive.</p>
                        <p className="pm-p">The project was deployed via Azure, it had a .NET back end and a React TS front end. The websites data, such as products, categories and usesrs were stored in a Microsoft SQL database. The site had user authentication and tracking via cookies, a cart feature for both registered and guest users and an admin pannel for managing products.</p>
                        <p className="pm-p">A full breakdown of the project, and the tools I used to build it can be found <Link className="pm-blue" to="/bookwyrm">here.</Link></p>
                    </div>
                    <div className="pm-more-btn" onClick={() => setIsBookwyrmOpen(prev => !prev)}>
                        <span className="pmb-text">Show {isBookwyrmOpen ? 'less' : 'more'}</span>
                        <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isBookwyrmOpen ? 'show' : ''}`} />
                    </div>
                </div>

                { /* DLSD */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.lederdavid.com/" className="pm-a" target="_blank">
                            <img src={dlsd} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className={`pm-description ${isDlsdOpen ? 'show' : ''}`}>
                        <h3 className="pm-h3">My personal website</h3>
                        <p className="pm-gray">website & mailing system</p>
                        <p className="pm-blue"><a href="https://www.lederdavid.com/" className="pm-a" target="_blank">https://www.lederdavid.com/</a></p>
                        <p className="pm-p">This is my personal website. I built it to share my skills, abilities, and projects with potential clients. It’s designed to be simple, modern, and easy to navigate, giving visitors a clear look at what I can bring to the table as a software developer.</p>
                    </div>
                    <div className="pm-more-btn" onClick={() => setIsDlsdOpen(prev => !prev)}>
                        <span className="pmb-text">Show {isDlsdOpen ? 'less' : 'more'}</span>
                        <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isDlsdOpen ? 'show' : ''}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsMobile;