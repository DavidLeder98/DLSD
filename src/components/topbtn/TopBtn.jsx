import './TopBtn.css';
import uparrow from '../../assets/svgs/up2.svg';

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const TopBtn = () => {
    return(
        <div className="top-btn-positioner">
            <div className="top-btn" onClick={() => scrollToTop()}>
                <img src={uparrow} alt="up arrow svg" className="up-img" />
                <p className="up-text">Back to top</p>
            </div>
        </div>
    )
}

export default TopBtn;