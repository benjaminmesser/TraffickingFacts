import React from 'react'

import { Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

import { Helmet } from 'react-helmet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/fontawesome-free-solid'
import { faPhone } from '@fortawesome/fontawesome-free-solid'

import './home.css'

const Home = (props) => {
    return (
        <div className="home-container">
            <Helmet>
                <title>Trafficking Facts</title>
                <meta property="og:title" content="Trafficking Facts" />
            </Helmet>
            <div data-role="Header" className="home-navbar-container">
                <div className="home-navbar">
                    <div className="home-left-side">
                        <img
                            alt="Justice Symbol"
                            src={require("./justice.jpg")}
                            className="home-image"
                        />
                        <div data-role="BurgerMenu" className="home-burger-menu">
                            <svg viewBox="0 0 1024 1024" className="home-icon">
                                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                            </svg>
                        </div>
                        <div className="home-links-container">
							<HashLink className="home-link08 Anchor" to="/#top">
                                Home
                            </HashLink>
                            <a href="#those_vulnerable" className="home-link Anchor">
                                Those Vulnerable
                            </a>
                            <a href="#signs" className="home-link01 Anchor">
                                Signs
                            </a>
                            <a href="#protective_factors" className="home-link02 Anchor">
                                Protective Factors
                            </a>
							<a href="#resources" className="home-link02 Anchor">
                                Resources
                            </a>
                            <a href="#victim_story" className="home-link03 Anchor">
                                Victim Story
                            </a>
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
								src={require("./justice.jpg")}
                                className="home-image1"
                            />
                            <div data-role="CloseMobileMenu" className="home-close-menu">
                                <svg viewBox="0 0 1024 1024" className="home-icon02">
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="home-links-container1">
							<HashLink className="home-link10 Anchor" to="/#top">
                                Home
                            </HashLink>
                            <a href="#those_vulnerable" className="home-link04 Anchor">
                                Those Vulnerable
                            </a>
                            <a href="#signs" className="home-link05 Anchor">
                                Signs
                            </a>
                            <a href="#protective_factors" className="home-link06 Anchor">
                                Protective Factors
                            </a>
							<a href="#resources" className="home-link06 Anchor">
                                Resources
                            </a>
                            <a href="#victim_story" className="home-link07 Anchor">
                                Victim Story
                            </a>
                            <Link className="home-link11 Anchor" to="/facts">
                                Facts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="those_vulnerable" className="home-hero" style={{backgroundImage: 'url(' + require('./bound_hands.jpg') + ')'}}>
                <div className="home-content-container">
                    <div className="home-hero-text">
                        <h1 className="home-heading Section-Heading">
                            Marginalized groups are most at risk
                        </h1>
                        <span className="home-text Section-Text">
                            Human traffickers frequently prey on individuals from vulnerable or marginalized communities,
							including Indigenous women and girls, migrants, LGBTQ+ individuals, persons with disabilities,
							children within the child welfare system, at-risk youth, and those facing social or economic adversity<br />
							(Conroy & Sutton, 2022).
                        </span>
                    </div>
                </div>
            </div>
			<div id="those_vulnerable" className="home-hero2" style={{backgroundImage: 'url(' + require('./trafficking_definition.png') + ')'}}>
                <div className="home-content-container2">
                    <div className="home-hero-text2">
                        <h1 className="home-heading2 Section-Heading">
                        </h1>
                        <span className="home-text2 Section-Text">
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
                        </span>
                    </div>
                </div>
            </div>
            <div id="signs" className="home-features">
                <div className="home-heading-container">
                    <h2 className="home-text01 Section-Heading">
                        Indicators of human trafficking
                    </h2>
                </div>
                <div className="home-cards-container">
                    <div className="home-features-card">
                        <div className="home-icon-container">
                            <svg viewBox="0 0 1024 1024" className="home-icon04">
                                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                            </svg>
                        </div>
                        <div className="home-text-container">
                            <span className="home-heading01 Card-Heading">Poor Living and Working Conditions</span>
                            <span className="home-text02 Card-Text">
                                * Excessively long work hours over long periods<br />
								* No days off, poor or substandard accommodations<br />
								* No access to medical care<br />
								* Little or no payment<br />
								* Unable to negotiate working conditions
                            </span>
                        </div>
                    </div>
                    <div className="home-features-card1">
                        <div className="home-icon-container1">
                            <svg viewBox="0 0 1024 1024" className="home-icon07">
                                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                            </svg>
                        </div>
                        <div className="home-text-container1">
                            <span className="home-heading02 Card-Heading">Emotional and Physical Control</span>
                            <span className="home-text03 Card-Text">
                                * Believe that they must work against their will<br />
								* Unable to leave their work environment<br />
								* Show signs that their movements are being controlled<br />
								* Feel that they cannot leave, and are in a situation of dependence<br />
								* Show fear or anxiety<br />
								* Be subjected to violence or threats of violence against themselves or against their family members and loved ones<br />
								* Suffer injuries that appear to be the result of an assault<br />
								* Be distrustful of the authorities
                            </span>
                        </div>
                    </div>
                    <div className="home-features-card2">
                        <div className="home-icon-container2">
                            <svg viewBox="0 0 1024 1024" className="home-icon10">
                                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                            </svg>
                        </div>
                        <div className="home-text-container2">
                            <span className="home-heading03 Card-Heading">Limited Communication and Social Interaction</span>
                            <span className="home-text04 Card-Text">
                                * Allow others to speak for them when addressed directly<br />
								* Act as if they were instructed by someone else<br />
								* Have limited or no social interaction<br />
								* Have limited contact with their families or with people outside of their immediate environment<br />
								* Be unable to communicate freely with others
                            </span>
                        </div>
                    </div>
                    <div className="home-features-card3">
                        <div className="home-icon-container3">
                            <svg viewBox="0 0 1024 1024" className="home-icon13">
                                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                            </svg>
                        </div>
                        <div className="home-text-container3">
                            <span className="home-heading04 Card-Heading">Restricted Freedom of Movement</span>
                            <span className="home-text05 Card-Text">
                                * Afraid of revealing their immigration status<br />
								* Not in possession of their passports or other travel or identity documents, as those documents are being held by someone else<br />
								* Have false identity or travel documents<br />
								* Not know their home or work address
                            </span>
                        </div>
                    </div>
					<div className="home-features-card5">
                        <div className="home-icon-container5">
                        </div>
                        <div className="home-text-container5">
                            <span className="home-heading06 Card-Heading"></span>
							<span className="home-heading06 Card-Heading"></span>
							<span className="home-heading06 Card-Heading"></span>
                            <span className="home-text07 Card-Text">
								(United Nations Office on Drugs and Crime, n.d.)
                            </span>
                        </div>
                    </div>
                    <div className="home-features-card4">
                        <div className="home-icon-container4">
                            <svg viewBox="0 0 1024 1024" className="home-icon16">
                                <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                                <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                            </svg>
                        </div>
                        <div className="home-text-container4">
                            <span className="home-heading05 Card-Heading">Sexual Exploitation</span>
                            <span className="home-text06 Card-Text">
                                * Move between brothels or work in various locations<br />
								* Escorted to and from work and activities<br />
								* Have tattoos or marks indicating “ownership” by their exploiters<br />
								* Sleep where they work or travel in a group, sometimes with other women who do not speak the same language<br />
								* Have no cash of their own and unable to show any identity documents<br />
								* Have very few items of clothing, mostly the kind typically worn for doing sex work
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="protective_factors" className="home-services">
                <div className="home-heading-container1">
                    <h1 className="home-text08 Section-Heading">
                        Protective Factors
                    </h1>
                    <span className="home-text09 Section-Text">
                        
                    </span>
                </div>
                <div className="home-cards-container1">
                    <div className="home-service-card">
                        <span className="home-text11 Card-Text">
                            Regions, policies, and enforcement
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
                        <a href="https://www.justice.gc.ca/eng/cj-jp/tp/legis-loi.html" className="Anchor">
                            Learn More
                        </a>
                    </div>
                    <div className="home-service-card1">
                        <span className="home-text13 Card-Text">
                            Citizenship<br />
							<br />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
						<span className="Anchor">(Perry & McEwing, 2013)</span>
                    </div>
                    <div className="home-service-card2">
                        <span className="home-text15 Card-Text">
                            Education<br />
							<br />
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: ' ',
                                }}
                            />
                        </span>
						<a href="https://notinmycity.ca/learn/" className="Anchor">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-section-separator"></div>
            <div id="resources" className="home-team">
                <div className="home-heading-container2">
                    <h1 className="home-text16 Section-Heading">Resources</h1>
                    <span className="home-text17 Section-Text">
                    </span>
                </div>
                <div className="home-cards-container2">
                    <div className="home-team-card">
                        <div className="home-avatar-container">
							<FontAwesomeIcon icon={faPhone} />
                        </div>
                        <span className="home-name Card-Heading">RESET Society of Calgary</span>
                        <span className="home-position Card-Text">403-237-8477  reception@resetcalgary.ca</span>
                    </div>
                    <div className="home-team-card1">
                        <div className="home-avatar-container">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <span className="home-name1 Card-Heading">The Canadian Centre to End Human Trafficking</span>
                        <span className="home-position1 Card-Text">1-833-900-1010</span>
                    </div>
                    <div className="home-team-card2">
                        <div className="home-avatar-container">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <span className="home-name2 Card-Heading">Immediate danger</span>
                        <span className="home-position2 Card-Text">911</span>
                    </div>
                    <div className="home-team-card3">
                        <div className="home-avatar-container">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <span className="home-name3 Card-Heading">Alberta Community and Social Services Helpline</span>
                        <span className="home-position3 Card-Text">211</span>
                    </div>
                    <div className="home-team-card4">
                        <div className="home-avatar-container">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <span className="home-name4 Card-Heading">ACT Alberta (The Action Coalition on Human Trafficking)</span>
                        <span className="home-position4 Card-Text">780-474-1104</span>
                    </div>
                </div>
            </div>
            <div className="home-section-separator1"></div>
            <div id="victim_story" className="home-our-story">
                <div className="home-heading-container3">
                    <h1 className="home-text18 Section-Heading">A story of a survivor</h1>
                    <span className="home-text19 Section-Text">
                        At the age of 6, Sona lost her mother, leaving her and her brother in the care of their abusive and alcoholic father.
						Sona had to work from a young age to provide for her family, missing out on the opportunity to attend school.
						Her dream was to move to a big city one day to learn and earn a better living. One day, while walking home,
						Sona was approached by two older boys, one of whom claimed to be her childhood friend.
						They convinced her to join them for a meal at his mother's house. Feeling hungry, Sona agreed. During the meal,
						Amir's mother made Sona feel at home by expressing how much she missed her own family.
						This sense of belonging was something Sona hadn't felt since her mother's passing. After the meal,
						Amir's mother invited Sona to go on an adventure to Kolkata. Despite her initial hesitation,
						Sona found the idea exciting as she had never left her village before and was curious about the city.
						They crossed the border into India, where Amir's mother suggested spending the night at her sister's house.
						However, upon arrival, Sona was informed that she would stay there alone.
						The woman promised to help Sona find a job in Kolkata and assured her that her father would be proud of her for seeking opportunities.
						Overwhelmed by the sudden turn of events, Sona trusted the woman and eventually found herself in Kolkata,
						meeting her new boss who praised her appearance and encouraged her to follow his instructions.
						Sona eventually reached Kolkata and met her new employer. He praised her appearance and assured her that she 
						would succeed if she followed his instructions. At just 13 years old, Sona was unaware of her whereabouts or the nature of her work.
						However, she soon discovered that she had been brought to a brothel. When her first "client" arrived, Sona was filled with terror
						and refused to comply. The brothel owner forcefully dragged Sona outside and threatened her life, leaving her with no choice.
						"They threatened me, saying, 'If you refuse to do this work, we will kill you. We will bury you and you will never return to Nepal.'
						Every day, there were new customers, sometimes numbering 30, 40, or even 50 people. I felt as though I had no life,
						questioning why my existence had turned out this way. Gradually, I abandoned all my dreams and accepted this as my fate."
						Sona remained trapped in that dreadful place for three long years. However, fortunately,
						rescue and healing were on the horizon for her.
						<br />
						(Ally, n.d)
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home
