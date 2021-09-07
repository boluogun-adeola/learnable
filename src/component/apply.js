import React from 'react'
import laptop from '../images/img51.png'
import item from '../images/img52.png'
import Footer from './footer.js'
import '../styles/apply.css'

const Apply = () =>{
    return(
        <div className="main-container">
            <section className="knowledge-section">
                    <div className="knowledge-text">
                        <h1>Apply Your Knowledge</h1>
                        
                    </div>
                    <div className="knowledge-media">
                        <img src={laptop} alt="a laptop"/>
                    </div>
                </section>
            <section className="apply-knowledge">
                <p>Before you’re done with Learnable, you will apply everything you’ve learned.
                            You’ll be part of a team made up of 2 designers and 4 developers. 
                            You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made.
                            By combining technology, design, and great ideas, your team will have the unique opportunity 
                            to collaborate with the Genesys team to bring your own concept to life,
                            from the first pen sketches to the final functioning product. 
                            You’ll then get to show off your special project to everyone.
                </p>
            </section>
                <section className="application-section">
                    <div className="application-media">
                        <img src={item} alt="items"/>
                    </div>
                    <div className="application-text">
                        <div className="how-to-get-in">
                            <h3>How to get in</h3>
                            <p>We are very deliberate with our selection process. We are on a quest to find amazing people who are
                                 passionate about learning and growing their careers in the software industry. 
                                To this end, we have designed our selection process to help us get such people.
                            </p>
                        </div>
                        <div className="online-application">
                            <h3>Online Application</h3>
                            <p>Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our
                                 prep curriculum that contains everything you need to prepare for the physical and technical assessment.
                            </p>
                            
                        </div>
                        <div className="interview">
                            <h3>Phone Call Interview</h3>
                            <p>We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. 
                                It’s supposed to be a chat, getting nervous defeats the aim.
                            </p>

                        </div>
                        <div className="assesment">
                            <h3>Final Assessment</h3>
                            <p>At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment,
                                 a psychometric test and a face-to-face chat with our team.
                            </p>
                        </div>
                        <div className="get-in">
                            <h3>Get In</h3>
                            <p>If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help,
                                 support and love that we can muster along the way!
                            </p>
                        </div>
                    </div>
                </section>
                <Footer/>
            
        </div>
    )
}

export default Apply;