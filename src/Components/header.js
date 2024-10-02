import "../CSS/header.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import imgOne from "../images/home (14).png";
import imgTwo from "../images/home (15).png";
import imgThree from "../images/home (16).png";

function Header(){
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [imgOne, imgTwo];

    const handleLeftClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const myIcons = useRef(null);
    function clickIconLeft(){
        if(myIcons.current){
            const leftIcons = myIcons.current.querySelector(".icons #icon-left");
            const rightIcons = myIcons.current.querySelector(".icons #icon-right");
            console.log(leftIcons);
            console.log(rightIcons);
                leftIcons.classList.add("active");
                rightIcons.classList.remove("active");
        }
    }
    function clickIconRight(){
        if(myIcons.current){
            const leftIcons = myIcons.current.querySelector(".icons #icon-left");
            const rightIcons = myIcons.current.querySelector(".icons #icon-right");
            console.log(leftIcons);
            console.log(rightIcons);
            leftIcons.classList.remove("active");
            rightIcons.classList.add("active");
        }
    }
    const allLeftClickIcon = () => {
        handleLeftClick();
        clickIconLeft();
    }
    const allRightClickIcon = () => {
        handleRightClick();
        clickIconRight();
    }
    return(
        <div className="header">
            <div className="container">
                <div className="text-content">
                    <p className="p-one">CUSTOM MADE HANGERS</p>
                    <div className="paragraphs">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
                <div className="icons" ref={myIcons}>
                    <FontAwesomeIcon onClick={allLeftClickIcon} id="icon-left" className="icon-left" icon={faArrowLeft} />
                    <FontAwesomeIcon onClick={allRightClickIcon} id="icon-right" className="icon-right active" icon={faArrowRight} />
                </div>
            </div>
            <div className="images-slider">
                <div className="all-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        src={image}
                        alt={`imgSlider${index + 1}`}
                    />
                ))}
            </div>
            </div>
            <div className="about-us">
                <div className="about-content">
                    <h3>about us ?</h3>
                    <div className="p-one-content">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="img-about">
                    <img src= { imgThree } alt="img-about"/>
                </div>
            </div>
            <div className="about-mobile">
                <div className="container">
                    <h3>about us ?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="p-two">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}
export default Header;