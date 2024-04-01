import React from 'react'

import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet'

import './page2.css'

const page2 = (props) => {
    return (
        <div className="home-container">
            <Helmet>
                <title>Trafficking Facts</title>
                <meta property="og:title" content="Trafficking Facts" />
                <script src="fontawesome.js"></script>
                <script>
                    window.onload = function () {
                        document.getElementById("cards").onmousemove = e => {
                            for (const card of document.getElementsByClassName("card")) {
                                const rect = card.getBoundingClientRect(),
                                    x = e.clientX - rect.left,
                                    y = e.clientY - rect.top;

                                card.style.setProperty("--mouse-x", `${x}px`);
                                card.style.setProperty("--mouse-y", `${y}px`);
                            };
                        }
                    }
                </script>
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
                            <a href="#resources" className="home-link Anchor">
                                Resources
                            </a>
                            <a href="#inspiration" className="home-link01 Anchor">
                                Inspiration
                            </a>
                            <a href="#process" className="home-link02 Anchor">
                                Process
                            </a>
                            <a href="#ourstory" className="home-link03 Anchor">
                                Our story
                            </a>
                            <Link className="home-link08 Anchor" to="/home">
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
                            <a href="#resources" className="home-link04 Anchor">
                                Resources
                            </a>
                            <a href="#inspiration" className="home-link05 Anchor">
                                Inspiration
                            </a>
                            <a href="#process" className="home-link06 Anchor">
                                Process
                            </a>
                            <a href="#ourstory" className="home-link07 Anchor">
                                Our story
                            </a>
                            <Link className="home-link10 Anchor" to="/home">
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
                <div class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-apartment"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-apartment"></i>
                                <div class="card-info-title">
                                    <h3>Apartments</h3>
                                    <h4>Places to be apart. Wait, what?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
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
                <div class="card">
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
                <div class="card">
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
                <div class="card">
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
                <div class="card">
                    <div class="card-content">
                        <div class="card-image">
                            <i class="fa-duotone fa-otter"></i>
                        </div>
                        <div class="card-info-wrapper">
                            <div class="card-info">
                                <i class="fa-duotone fa-otter"></i>
                                <div class="card-info-title">
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
