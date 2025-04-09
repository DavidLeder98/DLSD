import './BWBanner.css';
import { useEffect } from "react";
import sky from '../../assets/sky_hd.avif';
import bookwyrm from '../../assets/bookwyrm.png';

const BWBanner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className="bw-banner">
            <div className="bwb-img-cont">
                <img src={sky} alt="BookWyrm background" className="bwb-img" />
            </div>
            <div className="bwb-content">
                <h2 className="bwb-h2"><span className="bwb-name">BookWyrm</span><span className="bwb-mobile-remove"> | </span>Project Breakdown</h2>
                <div className="bwb-sections">
                    <div className="bwb-right">
                        <img src={bookwyrm} alt="BookWyrm background" className="bwbr-img" />
                    </div>
                    <div className="bwb-left">
                        <p className="bwb-p"><b className="bold-bw">Name:</b> Book Wyrm</p>
                        <p className="bwb-p"><b>Resources:</b> .Net, MS SQL Server, React TS, Azure</p>
                        <p className="bwb-p"><b>Deployment Date:</b> Oct. 25th 2024.</p>
                        <p className="bwb-p"><b>Shutdown Date:</b> Mar. 3rd 2025.</p>
                        <p className="bwb-p">
                            <b>Live Project: </b> (disabled)
                            <a href="https://www.bookwyrm.store/" className="bwb-a" target="_blank">
                                <span className="bwb-a-arrow">🡪 </span>
                                <span className="bwb-a-text">www.bookwyrm.store</span>
                            </a>
                        </p>
                        <p className="bwb-p">
                            <b>Github, Backend: </b>
                            <a href="https://github.com/DavidLeder98/BookWyrmAPI2" className="bwb-a" target="_blank">
                                <span className="bwb-a-arrow">🡪 </span>
                                <span className="bwb-a-text">github.com/DavidLeder98/ BookWyrmAPI2</span>
                            </a>
                        </p>
                        <p className="bwb-p">
                            <b>Github, Frontend: </b>
                            <a href="https://github.com/DavidLeder98/BWFEvercel" className="bwb-a" target="_blank">
                                <span className="bwb-a-arrow">🡪 </span>
                                <span className="bwb-a-text">github.com/DavidLeder98/ BWFEvercel</span>
                            </a>
                        </p>
                        <p className="bwb-p">
                            <b>Description: </b>This website was a demo e-commerce platform I created to showcase my skills and abilities as a full-stack web developer. While the site was fully functional, it was not a real online store and did not support online payments. After a couple of months the database got too expensive and I had to shut it down.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BWBanner;