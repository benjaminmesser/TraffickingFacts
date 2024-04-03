import React from 'react'

import { Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

import { Helmet } from 'react-helmet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import './page2 - version 2.css'

// import './home.css'



const page2 = (props) => {

    const handleMouseMove = (e) => {
        // console.log('Mouse position:', event.clientX, event.clientY);
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    };

    const script = document.createElement("script");

    script.src = "fontawesome.js";
    script.async = true;

    document.body.appendChild(script);

    return (
        <div className="home-container-page2">
            <Helmet>
                <script src="fontawesome.js"></script>
            </Helmet>
            <div data-role="Header" className="home-navbar-container">
                <div className="home-navbar">
                    <div className="home-left-side">
                        <img
                            alt="image"
                            src="https://play.teleporthq.io/static/svg/default-img.svg"
                            className="home-image"
                        />
                        <div data-role="BurgerMenu" className="home-burger-menu">
                            <svg viewBox="0 0 1024 1024" className="home-icon">
                                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                            </svg>
                        </div>
                        <div className="home-links-container">
							<HashLink className="home-link Anchor" to="/#resources">
                                Resources
                            </HashLink>
							<HashLink className="home-link01 Anchor" to="/#inspiration">
                                Inspiration
                            </HashLink>
							<HashLink className="home-link02 Anchor" to="/#process">
                                Process
                            </HashLink>
							<HashLink className="home-link03 Anchor" to="/#ourstory">
                                Our story
                            </HashLink>
                            <Link className="home-link08 Anchor" to="/">
                                Home
                            </Link>
                            <Link className="home-link09 Anchor" to="/page2">
                                Page 2
                            </Link>
                        </div>
                    </div>
                    <div className="home-right-side">
                        <button className="home-cta-btn Anchor button">START NOW</button>
                    </div>
                    <div data-role="MobileMenu" className="home-mobile-menu">
                        <div className="home-container1">
                            <img
                                alt="image"
                                src="https://play.teleporthq.io/static/svg/default-img.svg"
                                className="home-image1"
                            />
                            <div data-role="CloseMobileMenu" className="home-close-menu">
                                <svg viewBox="0 0 1024 1024" className="home-icon02">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="home-links-container1">
                            <HashLink className="home-link04 Anchor" to="/#resources">
                                Resources
                            </HashLink>
							<HashLink className="home-link05 Anchor" to="/#inspiration">
                                Inspiration
                            </HashLink>
							<HashLink className="home-link06 Anchor" to="/#process">
                                Process
                            </HashLink>
							<HashLink className="home-link07 Anchor" to="/#ourstory">
                                Our story
                            </HashLink>
                            <Link className="home-link10 Anchor" to="/">
                                Home
                            </Link>
                            <Link className="home-link11 Anchor" to="/page2">
                                Page 2
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cards">
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-apartment"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-apartment"></i>
                                <div class="card-info-title">
                                    <h3>Convictions</h3>
                                    <h4>In the last 10 years, annual charges of human trafficking in Canada have increased by a factor of more than 10</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-unicorn"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-unicorn"></i>
                                <div class="card-info-title">
                                    <h3>Unicorns</h3>
                                    <h4>A single corn. Er, I mean horn.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-blender-phone"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-blender-phone"></i>
                                <div class="card-info-title">
                                    <h3>Blender Phones</h3>
                                    <h4>These absolutely deserve to exist.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-person-to-portal"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-person-to-portal"></i>
                                <div class="card-info-title">
                                    <h3>Adios</h3>
                                    <h4>See you...</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-person-from-portal"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-person-from-portal"></i>
                                <div class="card-info-title">
                                    <h3>I mean hello</h3>
                                    <h4>...over here.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-otter"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-otter"></i>
								<FontAwesomeIcon icon={'fa-duotone fa-otter'} />
								
                                <div class="card-info-title">
                                    <FontAwesomeIcon icon={'fa-duotone fa-otter'} />
                                    <h3>Otters</h3>
                                    <h4>Look at me, imma cute lil fella.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a id="source-link" class="link" href="https://linear.app/features" target="_blank">
                <i class="fa-solid fa-link"></i>
                <span class="roboto-mono">Source</span>
            </a>

            <a id="youtube-link" class="link" href="https://youtu.be/htGfnF1zN4g" target="_blank">
                <i class="fa-brands fa-youtube"></i>
                <span>5 min Tutorial</span>
            </a>
        </div>
    )
}

export default page2
