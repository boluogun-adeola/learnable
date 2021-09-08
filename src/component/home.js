import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import '../App.css'
import arrowdown from '../images/nextarrow.png'
import image1 from '../images/Img1.png'
import profile from '../images/profile.png'
import image2 from '../images/img22.png'
import image3 from '../images/img23.png'
import image4 from '../images/img24.png'
import image5 from '../images/img25.png'
import image6 from '../images/img26.png'
import person1 from '../images/profile2.png'
import person2 from '../images/profile3.png'
import person3 from '../images/profile4.png'
import person4 from '../images/profile5.png'
import person5 from '../images/profile6.png'
import person6 from '../images/profile7.png'
import journal1 from '../images/img62.png'
import journal2 from '../images/img63.png'
import journal3 from '../images/img64.png'
import journal4 from '../images/img65.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import Footer from './footer.js'


const Home = () =>{
    return(
        <div className="main-container">
            <section className="coming-soon">
                <div className="learnable">
                    <h4>Coming soon:Learnable '20</h4>
                    <p>We've started taking in applications for the next batch of learnable interns.
                        Applications are on till the 21st of Febuary
                    </p>
                </div>
                <div className="brochure-section">
                    <p>Clink link to download</p>
                    <h4 className="brochure"><a href="#">Learnable ‘20 Brochure</a></h4>
                </div>
            </section>
            <section className="everything-section">
                <div className="everything-text">
                    <h1>Everything <br/>is Learnable</h1>
                    <p>Learnable is the perfect product development internship program brought to you by Genesys.</p>
                </div>
            </section>
            <section className="everything-media">
                <div className="develop-section">
                    <div className="green-section">
                        <a className="green-link"  href="#"> Development &#8250; </a>
                        <p className="green-text"> What to expect </p>
                    </div>
                    <div className="blue-section">
                        <a className="blue-link"  href="#"> Product Design &#8250; </a>
                        <p className="blue-text"> What to expect </p>
                    </div>
                </div>
                <div className="everything-main-media">
                    <div className="arrowdown">
                        <img src={arrowdown} alt="move to next section"/>
                    </div>
                    <div className="main-picture">
                        <img src={image1} alt="people"/>
                    </div>
                </div>
                <div className="everything-data">
                        <div className="data-section">
                            <h3 className="data-value">305</h3>
                            <p className="data-text"> Young Software Developers Trained</p>
                        </div>
                        <div className="data-section">
                            <h3 className="data-value">2100</h3>
                            <p className="data-text">Tech Enthusiast</p>
                        </div>
                        <div className="data-section">
                            <h3 className="data-value">8</h3>
                            <p className="data-text">Startups incubated</p>
                        </div>
                        <div className="data-section">
                            <h3 className="data-value">250</h3>
                            <p className="data-text"> Small Business Supported</p>
                        </div>

                    </div>
            </section>
            <section className="making-section">
                    <div className="making-text">
                        <h3>We Make People Great</h3>
                        <p>As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy 
                            of Nigeria, Learnable is a 6-month product development training program with an emphasis on software 
                            programming and product design. It is for outstanding young individuals who are passionate about building 
                            a career in the software industry. 
                        </p>
                        <p>We primarily educate and groom software developers and designers, preparing them for the 
                            industry. 
                        </p>
                    </div>
                    <div className="making-media">
                        <img src={profile} alt="software developer"/>

                    </div>
            </section>
            <section className="unusual-section">
                    <div className="unusual-media">
                        <img src={image2} alt="people using virtual reality"/>
                    </div>
                    <div className="unusual-text">
                        <h3>An Unusual Learning Experience</h3>
                        <p>At Genesys, we believe in the learning processes as much as we believe in the results.
                             By applying a combination of active and social learning methodologies, 
                             we create an environment that involves the learner in the learning process while providing avenues
                            for collaboration and peer-to-peer mentorship.
                        </p>
                        <p>Our methods over the years have helped us discover ways to take education out of the classroom.
                             We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity 
                            to learn.
                        </p>
                    </div>
            </section>
            <section className="flex-section development">
                <div className="development-text">
                        <small>For  Developers</small>
                        <h3>Learn to Build Software the Right Way</h3>
                        <p>We love to build stuff. Really awesome stuff. 
                            That’s why we have developed a learning program that will empower you to create 
                            amazing software the right way.
                        </p>
                        <p>We believe in learning through experimentation. Our aim is to nurture and grow bright
                             young minds from the get-go because that’s how our industry will thrive.
                        </p>
                        <p><Link to = "/developer">LEARN MORE</Link></p>
                </div>
                <div className="grid develop-box">
                        <div className="blue box">
                            <h4>Program With Javascript</h4>

                        </div>
                        <div className="green box">
                            <h4>Version control with git</h4>
                        </div>
                        <div className="yellow box">
                            <h4>Web development with react</h4>
                        </div>

                        
                        <div className="plum box">
                            <h4>Building APIs with NodeJs</h4>
                        </div>
                        <div className="metal box">
                            <h4>Managing Data with MongoDB</h4>
                        </div>
                        <div className="orange box">
                            <h4>Deploying With Heroku</h4>
                        </div>
                </div>

            </section>
            <section className="flex-section designing">
                    <div className="grid develop-box">
                        <div className="blue box">
                            <h4>Design User Interfaces</h4>

                        </div>
                        <div className="orange box">
                            <h4>Craft User Experiences</h4>
                        </div>
                        <div className="yellow box">
                            <h4>Apply Design Thinking</h4>
                        </div>
                        <div className="metal box">
                            <h4>Build Information Architecture</h4>
                        </div>
                        <div className="sunset box">
                            <h4>Copy Write For Projecs</h4>
                        </div>
                        <div className="green box">
                            <h4>Brand Products</h4>
                        </div>
                    </div>
                    <div className="designing-text">
                        <small>FOR DESIGNERS</small>
                        <h3>Design Different</h3>
                        <p>We love to make things work perfectly. 
                           That’s why our design learning path exposes you to the science of user-oriented design.
                        </p>
                        <p>Design is at the heart of everything we do at Genesys. Right from the start of the program,
                            you’ll get your hands dirty as you get practically involved in the world’s most modern design 
                            concepts. At Genesys, we’re building designers who put the users first.
                        </p>
                        <p><Link to = "/designer">LEARN MORE</Link></p>
                    </div>
            </section>
            <section className="eligibility-section">
                    <div className="eligibility-text">
                        <h3>Who Is Eligible</h3>
                        <p>To be a participant of lernable, you need to be a young and passionate person interested in 
                           launching a super tech career.You will need to have foundational knowledge in whatever 
                           learning path you are applying for and be available for the six month duration of the program.
                        </p>
                        <p>To become a part of the Genesys family, you must express some of the qualities we consider 
                            important. You are someone that takes responsibilities and initiatives. You will also express
                             the ability to produce quality stuff in good time with high consistency. 
                        </p>
                    </div>
                    <div className="eligibility-media">
                        <img src={image3} alt="people in a library"/>
                    </div>
            </section> 
            <section className="culture-section">
                    <div className="culture-media">
                        <img src={image4} alt="women laughing"/>
                        
                    </div>
                    <div className="culture-text">
                        <h3>Our Culture</h3>
                        <p>Our culture are the unspoken things that make us who we are at Genesys. To become one of us, 
                           you need to be like the rest of us. We believe that excellence is a culture, and we are committed 
                           to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust
                           in the power of collaboration.
                        </p>
                    </div>
            </section>
            <section className="learning-fun-section">
                    <div className="learning-text">
                        <h3>Learning can be fun…</h3>
                        <p>We believe learning should be a fun experience. For this reason,
                           we don’t do all the learning in the classroom.
                        </p>
                        <p>The Learnable experience can not be complete without the bag of fun times which you’ll have. 
                           To us, every task is an opportunity to have some fun. But we do well to throw in a good
                           number of activities to add to this. You will find yourself partaking in a lot of healthy
                           activities such as cooking, sports, music, hangouts, and even random dates.
                        </p>
                        <p>Trust us when we say we know how to have fun.</p>

                    </div>
                    <div className="learning-media">
                        <img src={image5} alt="a gallery"/>
                    </div>
            </section>
            <section className="expert-section">
                    <div className="expert-media">
                        <div className="expert-box">
                            <img src={person1} alt="Nnamdi's profile"/>
                            <h6>Nnamdi</h6>
                            <p>Managing Director</p>
                        </div>
                        <div className="expert-box">
                            <img src={person2} alt="Ositadinma's profile"/>
                            <h6>Ositadinma</h6>
                            <p>Learnable Coordinator</p>
                        </div>
                        <div className="expert-box">
                            <img src={person3} alt="Idowu's profile"/>
                            <h6>Idowu</h6>
                            <p>Scrum Proffessional</p>
                        </div>
                        <div className="expert-box">
                            <img src={person4} alt="Ezra's profile"/>
                            <h6>Ezra</h6>
                            <p>Ass. Learnable Coordinator</p>
                        </div>
                        <div className="expert-box">
                            <img src={person5} alt="David's profile"/>
                            <h6>David</h6>
                            <p>Design Lead</p>
                        </div>
                        <div className="expert-box">
                            <img src={person6} alt="Emmanuel's profile"/>
                            <h6>Emmanuel</h6>
                            <p>Software Lead</p>
                        </div>
                    </div>
                    <div className="expert-text">
                        <h3>Learn from the Experts</h3>
                        <p>As a learnable intern, you will be learning from the best software developers and product designers
                           our industry has to offer. You will spend the first 3 months in the classroom with industry experts 
                           who have a wealth of experience from developing amazing products for various customers in our industry.
                        </p>
                    </div>
            </section>
            <section className="classroom-section">
                <div className="classroom-text">
                        <h3>Learning doesn’t always have to be in the classroom</h3>
                        <p>We have designed other learning activities that aren’t classroom-based. You will learn how to be a better
                           person, how to have good conversations, how to work better with people and most importantly, how to lead other
                           people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.
                        </p>
                </div>
                <div className="classroom-media learning-media">
                    <img src={image6} alt="a gallery"/>
                </div>
            </section>
            <section className="culture-section applying-knowledge-section">
                    <div className="culture-media applying-knowledge-media">
                        <img src={image4} alt="Women laughing"/>
                    </div>
                    <div className="applying-knowledge-text culture-text ">
                        <h3>Apply Your Knowledge</h3>
                        <p>Before you’re done with Learnable, you will apply everything you’ve learned. 
                           You’ll be part of a team made up of 2 designers and 4 developers. 
                            You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. 
                            By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate
                            with the Genesys team to bring your own concept to life, from the first pen sketches to the final 
                            functioning product. You’ll then get to show off your special project to everyone.
                        </p>
                    </div>
            </section>
            <section className="journal-section">
                <h2>Journal</h2>
                <p className="view-all"><Link to = "/journal" > View All</Link></p>
                <section className="journal-grid">
                        <div className="journal-box">
                            <img src={journal1} alt="human"/>
                            <p className="journal-grid-link"><a>inspiration</a></p>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p className="mong">David Mong, Apr 9, 2020</p>
                        </div>
                        <div className="journal-box">
                            <img src={journal2} alt="human"/>
                            <p className="journal-grid-link"><a>inspiration</a></p>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p className="mong"> David Mong, Apr 9, 2020</p>
                        </div>
                        <div className="journal-box">
                            <img src={journal3} alt="human"/>
                            <p className="journal-grid-link"><a>inspiration</a></p>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p className="mong">David Mong, Apr 9, 2020</p>
                        </div>
                        <div className="journal-box">
                            <img src={journal4} alt="human"/>
                            <p className="journal-grid-link"><a>inspiration</a></p>
                            <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                            <p className="mong">David Mong, Apr 9, 2020</p>
                        </div>
                </section>
            </section>
            <section className="mentioned-section">
                <div className="mentioned-box">
                    <h5>Mentioned in</h5>
                </div>
                <div className="mentioned-box">
                    <img src={logo2} alt="Fast company logo"/>
                </div>
                <div className="mentioned-box">
                    <img src={logo3} alt="UX Magazine logo"/>
                </div>
                <div className="mentioned-box">
                    <img src={logo4} alt="Wired logo"/>
                </div>
                <div className="mentioned-box">
                    <img src={logo5} alt="Webvisions logo"/>
                </div>
                <div className="mentioned-box">
                    <img src={logo6} alt="Interaction company logo"/>
                </div>
            </section>
            <Footer/>
</div>
    )
}

export default Home;