import './Burger.css';

const Burger = () => {

    return(
        <div className="burger-cont">
            <div className="burger">
                <div className="burger-stripes">
                    <div className="burger-stripe"></div>
                    <div className="burger-stripe"></div>
                    <div className="burger-stripe"></div>
                </div>
                <div className="burger-x">
                    <div className="burger-x-1"></div>
                    <div className="burger-x-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Burger;