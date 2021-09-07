import React from 'react'
import profile from '../images/profile.png'
import laptop from '../images/img31.png'
import Footer from './footer.js'
import '../styles/devdesign.css'

const Developer = () =>{
    return(
        <div className="main-container">
            <section className="devdesign-head">
                <div className="devdesign-text">
                    <h1>The<br/> Learnable Software Developer</h1>
                    
                </div>
                <div className="devdesign-image">
                    <img src={profile} alt="A software developer"/>
                </div>
            </section>
            <section className="creativity">
            <p>Creativity means a lot to us. So we look for people who can think both logistically and artistically,
                        and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who 
                        care about working with their team to add the Genesys flavour to every project. 
                    </p>
                    <p>As a developer, being part of the team exposes you to a range of diverse, like-minded talented 
                        people who are sure to make the experience fun for you. You’ll get a shot at building amazing 
                        things, developing yourself, learning on the job, while exchanging healthy jokes and having random
                        hangouts once in a while.
                    </p>
            </section>
            <section className="quote">
                <h2>“You are someone people can count on. Every day, you come in ready to make great things happen.”</h2>
            </section>
            <section className="expectation">
                <div className="expectation-media">
                    <img src={laptop} alt="monitor screen with codes"/>
                </div>
                <div className="expectation-text">
                    <h3>We Expect You To ...</h3>
                    <p>Play nice with other people.</p>
                    <p>Be an actively engaging person. That means you are present, motivated, and social. 
                        You know how to communicate effectively with your teammates.
                    </p>
                    <p>Love to code. You understand the basics of programming and object-oriented design and development.</p>
                    <p>Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.</p>
                    <p>Be innately curious. Your love for technology is insatiable, so you’re always researching and 
                        experimenting. Learning new technical skills while on the job is something you look forward to.
                    </p>
                    <p>Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.</p>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Developer;