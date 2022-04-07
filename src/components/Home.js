import "./home.css";
import flexagn from "../images/flexagn.png";
const Home = () => {
    return (
        <div className="main">
            <div className="left">
                <div className="heading">
                    <h1>
                        Flexagon is a global
                        <br />
                        learning platform that
                        <br />
                        brings kids together
                        <br />
                        through play
                    </h1>
                </div>
                <p>Download our App</p>
                <div className="app-button">
                    <button className="btn1">Google Play</button>
                    <button className="btn2">Apple App Store</button>
                </div>
            </div>
            <div className="right">
                <img src={flexagn}></img>
            </div>
        </div>
    );
};

export default Home;
