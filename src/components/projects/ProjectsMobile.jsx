import './ProjectsMobile.css';
import jastreb from '../../assets/projects/jastreb.png';
import pda from '../../assets/projects/pda.png';
import bookwyrm from '../../assets/projects/bookwyrm.png';
import dlsd from '../../assets/projects/dlsd.png';
import uparrow from '../../assets/svgs/up2.svg';
import { useState} from "react";

const ProjectsMobile = () => {
    const [isJastrebOpen, setIsJastrebOpen] = useState(false);
    const [isPdaOpen, setIsPdaOpen] = useState(false);
    const [isBookwyrmOpen, setIsBookwyrmOpen] = useState(false);
    const [isDlsdOpen, setIsDlsdOpen] = useState(false);

    return(
        <div className="proj-mobile">
            <div className="pm-h2">My Projects</div>
            <div className="pm-list">

                { /* Jastreb */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.jastreb.rs/" className="pm-a" target="_blank">
                            <img src={jastreb} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className="pm-preview-text">
                        <h3 className="pm-h3">Jastreb</h3>
                        <p className="pm-gray">website & mailing system</p>
                        <p><a href="https://www.jastreb.rs/" className="pm-a" target="_blank">https://www.jastreb.rs/</a></p>
                        <div className={`pm-description ${isJastrebOpen ? 'show' : ''}`}>
                            <p className="pm-p">Jastreb d.o.o. is medium sized welding and metalurgy materials supply company. They requested me to make a new website for them while keeping their old domain, which was registered all the way back in 2008. They also wished to integrate an old emailing system with this website and domain.</p>
                            <p className="pm-p">The website is built in React JS, featuring a couple of must-have libraries such as react-router-dom and framer-motion. The styling is sleek and modern, and the color scheme was chosen to reflect the feeling of welding and metalwork. All CSS was written by hand, since I didn't want TailWind or BootStrap to limit the style of the project. The website also features some modern UI elements such as an interactive google maps iframe and a digital product catalog.</p>
                            <p className="pm-p">Resolving the issue with the mailing system was relatively simple. Using the hosting platform of the domain, and the hosting platform of the mailing service, I connected the two with a "CNAME", a "txt" and an "A" record.</p>
                        </div>
                        <div className="pm-more-btn" onClick={() => setIsJastrebOpen(prev => !prev)}>
                            <span className="pmb-text">Show {isJastrebOpen ? 'less' : 'more'}</span>
                            <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isJastrebOpen ? 'show' : ''}`} />
                        </div>
                    </div>
                </div>

                { /* PDA */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.jastreb.rs/" className="pm-a" target="_blank">
                            <img src={pda} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className="pm-preview-text">
                        <h3 className="pm-h3">Jastreb</h3>
                        <p className="pm-gray">website & mailing system</p>
                        <p><a href="https://www.jastreb.rs/" className="pm-a" target="_blank">https://www.jastreb.rs/</a></p>
                        <div className={`pm-description ${isPdaOpen ? 'show' : ''}`}>
                            <p className="pm-p">Jastreb d.o.o. is medium sized welding and metalurgy materials supply company. They requested me to make a new website for them while keeping their old domain, which was registered all the way back in 2008. They also wished to integrate an old emailing system with this website and domain.</p>
                            <p className="pm-p">The website is built in React JS, featuring a couple of must-have libraries such as react-router-dom and framer-motion. The styling is sleek and modern, and the color scheme was chosen to reflect the feeling of welding and metalwork. All CSS was written by hand, since I didn't want TailWind or BootStrap to limit the style of the project. The website also features some modern UI elements such as an interactive google maps iframe and a digital product catalog.</p>
                            <p className="pm-p">Resolving the issue with the mailing system was relatively simple. Using the hosting platform of the domain, and the hosting platform of the mailing service, I connected the two with a "CNAME", a "txt" and an "A" record.</p>
                        </div>
                        <div className="pm-more-btn" onClick={() => setIsPdaOpen(prev => !prev)}>
                            <span className="pmb-text">Show {isPdaOpen ? 'less' : 'more'}</span>
                            <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isPdaOpen ? 'show' : ''}`} />
                        </div>
                    </div>
                </div>

                { /* BookWyrm */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.jastreb.rs/" className="pm-a" target="_blank">
                            <img src={bookwyrm} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className="pm-preview-text">
                        <h3 className="pm-h3">Jastreb</h3>
                        <p className="pm-gray">website & mailing system</p>
                        <p><a href="https://www.jastreb.rs/" className="pm-a" target="_blank">https://www.jastreb.rs/</a></p>
                        <div className={`pm-description ${isBookwyrmOpen ? 'show' : ''}`}>
                            <p className="pm-p">Jastreb d.o.o. is medium sized welding and metalurgy materials supply company. They requested me to make a new website for them while keeping their old domain, which was registered all the way back in 2008. They also wished to integrate an old emailing system with this website and domain.</p>
                            <p className="pm-p">The website is built in React JS, featuring a couple of must-have libraries such as react-router-dom and framer-motion. The styling is sleek and modern, and the color scheme was chosen to reflect the feeling of welding and metalwork. All CSS was written by hand, since I didn't want TailWind or BootStrap to limit the style of the project. The website also features some modern UI elements such as an interactive google maps iframe and a digital product catalog.</p>
                            <p className="pm-p">Resolving the issue with the mailing system was relatively simple. Using the hosting platform of the domain, and the hosting platform of the mailing service, I connected the two with a "CNAME", a "txt" and an "A" record.</p>
                        </div>
                        <div className="pm-more-btn" onClick={() => setIsBookwyrmOpen(prev => !prev)}>
                            <span className="pmb-text">Show {isBookwyrmOpen ? 'less' : 'more'}</span>
                            <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isBookwyrmOpen ? 'show' : ''}`} />
                        </div>
                    </div>
                </div>

                { /* DLSD */}
                <div className="pm-item">
                    <div className="pm-img-cont">
                        <a href="https://www.jastreb.rs/" className="pm-a" target="_blank">
                            <img src={dlsd} alt="" className="pm-img" />
                        </a>
                    </div>
                    <div className="pm-preview-text">
                        <h3 className="pm-h3">Jastreb</h3>
                        <p className="pm-gray">website & mailing system</p>
                        <p><a href="https://www.jastreb.rs/" className="pm-a" target="_blank">https://www.jastreb.rs/</a></p>
                        <div className={`pm-description ${isDlsdOpen ? 'show' : ''}`}>
                            <p className="pm-p">Jastreb d.o.o. is medium sized welding and metalurgy materials supply company. They requested me to make a new website for them while keeping their old domain, which was registered all the way back in 2008. They also wished to integrate an old emailing system with this website and domain.</p>
                            <p className="pm-p">The website is built in React JS, featuring a couple of must-have libraries such as react-router-dom and framer-motion. The styling is sleek and modern, and the color scheme was chosen to reflect the feeling of welding and metalwork. All CSS was written by hand, since I didn't want TailWind or BootStrap to limit the style of the project. The website also features some modern UI elements such as an interactive google maps iframe and a digital product catalog.</p>
                            <p className="pm-p">Resolving the issue with the mailing system was relatively simple. Using the hosting platform of the domain, and the hosting platform of the mailing service, I connected the two with a "CNAME", a "txt" and an "A" record.</p>
                        </div>
                        <div className="pm-more-btn" onClick={() => setIsDlsdOpen(prev => !prev)}>
                            <span className="pmb-text">Show {isDlsdOpen ? 'less' : 'more'}</span>
                            <img src={uparrow} alt="more arrow" className={`pmb-arrow ${isDlsdOpen ? 'show' : ''}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsMobile;