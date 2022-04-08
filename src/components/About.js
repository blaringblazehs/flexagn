import "./about.css";
import rightimg from "../images/right-img.png";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import Tooltip from "react-minimal-tooltip";
import CustomTooltip from "./CustomTooltip";

const About = () => {
    return (
        <div className="container-about">
            <div className="main-about">
                <div className="left-abt">
                    <h1>About Us</h1>
                    <h2>
                        Flexagon is Designed to make daily learning intuitive,
                        self-driven, and fun!
                    </h2>
                    <p>
                        Flexagn is a creative learning platform for daily
                        learning for grade 4 and above. Flexagn is changing the
                        way kids approach everyday learning. We are on a mission
                        to make learning a habit via creative and collaborative
                        learning.
                    </p>
                </div>
                <div className="right-abt">
                    <img src={rightimg}></img>
                </div>
                <div className="bottom-abt">
                    <div className="bottom1">
                        <div>
                            <Tooltip
                                tooltipChildren={<CustomTooltip />}
                                tooltipPosition="bottom"
                                tooltipColor="#f5f9ff"
                                tooltipSpacing={60}
                                tooltipPointerSize={26}
                            >
                                {/* <button>Hover over me!</button> */}
                                <img src={img3}></img>
                            </Tooltip>
                        </div>
                        <p>Mr Ashneer Grover</p>
                    </div>
                    <div className="bottom2">
                        <div>
                            <Tooltip
                                tooltipChildren={<CustomTooltip />}
                                tooltipPosition="bottom"
                                tooltipColor="#f5f9ff"
                                tooltipSpacing={60}
                                tooltipPointerSize={26}
                            >
                                {/* <button>Hover over me!</button> */}
                                <img src={img2}></img>
                            </Tooltip>
                        </div>
                        <p>Mrs Namita Thaper</p>
                    </div>
                    <div className="bottom3">
                        <div>
                            <Tooltip
                                tooltipChildren={<CustomTooltip />}
                                tooltipPosition="bottom"
                                tooltipColor="#f5f9ff"
                                tooltipSpacing={60}
                                tooltipPointerSize={26}
                            >
                                {/* <button>Hover over me!</button> */}
                                <img src={img1}></img>
                            </Tooltip>
                        </div>
                        <p>Mr Aman Gupta</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
