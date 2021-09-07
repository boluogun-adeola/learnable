import React from 'react'
import { Link } from 'react-router-dom'
import arrowdown from '../images/nextarrow.png'
import image7 from '../images/img9.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.png'
import icon6 from '../images/icon6.png'
import '../styles/footer.css'

const Footer = () =>{
    return(
        <React.Fragment>
            <section className="up-to-date-section">
            <div className="up-to-date-arrow">
                <img src={arrowdown} alt="" />
            </div>
            <div className="up-to-date-text">
                <h1 className="up-to-date-text-heading">
                Stay up to date on what we are doing and new learning
                opportunities
                </h1>
                <div className="up-to-date-text-middle">
                <input
                    className="up-to-date-text-middle-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="YOUR EMAIL"
                />
                <p>View Privacy Policy</p>
                </div>
                <button className="up-to-date-text-button">
                subscribe
                </button>
                <p className="up-to-date-text-hidden">
                View Privacy Policy
                </p>
            </div>
            </section>
            <section className="footer">
                        <ul className="flex link-section">
                            <li className="link">
                                <Link to = "/developer" className="footer-link" >
                                    Build Software
                                </Link>
                            </li>
                            <li className="link">
                                <Link to = "/designer" className="footer-link" >
                                    Design Different
                                </Link>
                            </li>
                            <li className="link">
                                <Link to = "/apply" className="footer-link" >
                                    Apply Your Knowledge
                                </Link>
                            </li>
                        </ul>
                        <div className="flex footer-text">
                            <p>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>
                            <p><a href="#">Get In Touch</a></p>
                        </div>
                        <div className="flex footer-image">
                            <div className="footer-media">
                                <img src={image7} alt="people"/>
                            </div>
                            <div className="footer-media-text">
                                <p>Learnable is proud to be a collaborative effort of all the arms of our product team</p>
                                <p><a href="#">Head to DevStudio</a></p>
                            </div>
                        </div>
                        

                    </section>
                    <section className="icon-section">
                    <p>  <img src={icon1} alt="twitter-icon"/></p>
                    <p> <img src={icon2} alt="facebook-icon"/></p>
                    <p><img src={icon3} alt="linkedln-icon"/></p>
                    <p><img src={icon4} alt="instagram-icon"/></p>
                    <p> <img src={icon5} alt="youtube-icon"/></p>
                    <p> <img src={icon6} alt="video icon"/></p>
                    </section>
                    <section className="privacy-section">
                    <p className="copyright">&copy; Genesys 2020 </p>
                    <p className="privacy">Privacy Statement</p>
                    </section>

        </React.Fragment>
    )
}

export default Footer;