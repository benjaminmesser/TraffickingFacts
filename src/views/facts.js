import React from 'react'

import { Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

import { Helmet } from 'react-helmet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import './facts.css'

// import './home.css'



const facts = (props) => {

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
        <div className="home-container-facts">
            <Helmet>
                <script src="fontawesome.js"></script>
            </Helmet>
            <div data-role="Header" className="home-navbar-container">
                <div className="home-navbar">
                    <div className="home-left-side">
                        <img
                            alt="Justice Symbol"
                            src="images/justice.jpg"
                            className="home-image"
                        />
                        <div data-role="BurgerMenu" className="home-burger-menu">
                            <svg viewBox="0 0 1024 1024" className="home-icon">
                                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                            </svg>
                        </div>
                        <div className="home-links-container">
							<Link className="home-link08 Anchor" to="/">
                                Home
                            </Link>
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
                            <Link className="home-link09 Anchor" to="/facts">
                                Facts
                            </Link>
                        </div>
                    </div>
                    <div className="home-right-side">
                        <a href="https://menti.com/"><button className="home-cta-btn Anchor button">START QUIZ</button></a>
                    </div>
                    <div data-role="MobileMenu" className="home-mobile-menu">
                        <div className="home-container1">
                            <img
                                alt="Justice Symbol"
								src="images/justice.jpg"
                                className="home-image1"
                            />
                            <div data-role="CloseMobileMenu" className="home-close-menu">
                                <svg viewBox="0 0 1024 1024" className="home-icon02">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="home-links-container1">
							<Link className="home-link10 Anchor" to="/">
                                Home
                            </Link>
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
                            <Link className="home-link11 Anchor" to="/facts">
                                Facts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cards">
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <div class="card-info-title">
                                    <h1>96%</h1>
                                    <h2>of trafficking victims in Canada are women</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <div class="card-info-title">
                                    <h1>71%</h1>
                                    <h2>of trafficking victims in Canada are under 25</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <div class="card-info-title">
                                    <h1>25%</h1>
                                    <h2>of trafficking victims in Canada are under 18</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseMove={handleMouseMove} class="card">
                    <div class="card-content">
                        <div class="card-image">
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <div class="card-info-title">
                                    <h1>92%</h1>
                                    <h2>of trafficking victims in Canada know they are trafficked</h2>
									<h5>(Conroy & Sutton, 2022)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default facts
