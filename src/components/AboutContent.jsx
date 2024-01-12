import React from 'react'

import "../styles/AboutContent.css"
import { Link } from 'react-router-dom'
import Kevin from "../assets/kevinm.jpg"
import { FaPython,FaJs,FaJava, FaReact, FaGitAlt, FaDatabase  } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutContent()  {
    const SIZE = 50;
    /*
    const cv = () => {
        const cvUrl = "../assets/MuntoKevinCV.pdf";
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "MuntoKevinCV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);  
    };*/

    return (
        <div className="about">
            <div className="left">
                <h1>Who I am ?</h1>
                <p>My name is Kevin Munto and I am a student at Efrei Paris, an engineering school in computer science.
                    Since I was a child, I have been passionate about video games and new technologies, 
                    which allowed me to discover the vast universe of computer science.
                    In parallel to my studies, I have several passions which allow me to 
                    stimulate myself such as football, gym and video games.
                </p>
                {/*<h2>Programming Languages : </h2>
                <div className="stack">
                    aaaa
                    <FaPython size={SIZE} style={{color: "#fff"}} />
                    <FontAwesomeIcon icon="fa-solid fa-c" size={SIZE} style={{color: "#fff"}}/>
                    <FaJava size={SIZE} style={{color: "#fff"}} />
                </div>*/}
                <Link to="/contact/">
                    <button className='btn'>Contact</button>
                </Link>

                {<Link to="../assets/MuntoKevinCV.pdf" target='_blank' download= "MuntoKevinCV.pdf">
                    <button className='btn' >Download My Cv</button>
                </Link> }
                
                {/*<a href="../assets/MuntoKevinCV.pdf" download="MuntoKevinCV.pdf">
                    <button className='btn' >Download My Cv</button>
                </a>*/}
                
            </div>
            
            {/*<div className="right">
                <div className="img-container">
                    <div className='img-stack top'>
                        <img src={Kevin} className='img' alt='kevinm'/>
                    </div>
                </div>
            </div>*/}
        </div>
    );
};

export default AboutContent

// <button className='btn' onClick={cv} href="../assets/MuntoKevinCV.pdf">Download My Cv</button>
