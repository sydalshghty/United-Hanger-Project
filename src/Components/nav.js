import "../CSS/nav.css";
import logo from "../images/Vector Smart Object-ai (1)-svg (1).svg";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Link } from "react-router-dom";
import { useState } from "react";
function Nav(){
    const [isActive, setIsActive] = useState(false);
    const [isBars, setBars] = useState(true);

    const handleBars = () => {
        setBars(!isBars)
    }

    const handleToggle = () => {
        setIsActive( !isActive )
    }

    const handleClick = () => {
        handleBars();
        handleToggle();
    }
    return(
        <div className="nav">
            <div className="container">
            <div className="header-content">
                    <div className="img-logo">
                        <img src= {logo} alt="logo"/>
                    </div>
                    <ul className= {isActive ? "active" : ""}>
                        <li>
                            <a href="home">home</a>
                        </li>
                        <li>
                            <a href="products">products</a>
                        </li>
                        <li>
                            <a href="about">about</a>
                        </li>
                        <li>
                            <a href="contact">contact</a>
                        </li>
                    </ul>
                    <div className="icon-bars" onClick={handleClick}>
                        {isBars ? (
                            <FontAwesomeIcon icon={ faBars }/>
                        ) :
                        (
                            <FontAwesomeIcon icon={ faTimes }/>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;