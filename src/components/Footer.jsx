import "../styles/Footer.css"
import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaRegCopyright} from 'react-icons/fa'
import { Link } from "react-router-dom";

function Footer () {
    const SIZE = 30;
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="top">
                    <Link to="mailto:muntokevin@gmail.com" target="_blank">
                        <FaEnvelope size={SIZE} style={{color: "#fff", marginRight: "2rem"}}/> 
                    </Link>
                    <Link to="https://github.com/KevMn6ix" target="_blank">
                        <FaGithub size={SIZE} style={{color: "#fff", marginRight: "1rem"}}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/muntokevin-s600e320/" target="_blank">
                        <FaLinkedin size={SIZE} style={{color: "#fff", marginRight: "1rem"}}/>
                    </Link>
                </div>
                <div className="bottom">
                    <div className="copyright-logo">
                        <Link to="/me/">
                            <FaRegCopyright size={15} style={{color: "#fff", marginTop: "1rem",marginRight: "0.3rem"}}/>
                        </Link>
                    </div>
                    <p>Kevin Munto 2024</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer