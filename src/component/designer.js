import React from 'react'
import profile from '../images/profile.png'
import design from '../images/img41.png'
import Footer from './footer.js'
import '../styles/devdesign.css'

const Designer = () =>{
    return(
        <div className="main-container">
            <section className="devdesign-head">
                    <div className="devdesign-text">
                        <h1>The <br/> Learnable Product Designer</h1>
                        
                    </div>
                    <div className="devdesign-image">
                        <img src={profile} alt="product designer" id="product-image"/>

                    </div>
                </section>
                <section className="creativity">
                <p>At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. 
                            You’ll be part of a dynamic team that's made up of like-minded, talented people. 
                            You'll work hard with them to create things that will amaze everyone everywhere.
                        </p>

                        <p> In addition to your team projects, you’ll be lending a hand to the creative team.
                             Participating in brainstorm sessions, building winning pitches, preparing assets, 
                             and design scriptures for productions, you'll be in the thick of it all.
                        </p>

                        <p>Oh, and you’ll make amazing friends while you're at it!</p>
                </section>
                <section className="quote product-quote">
                    <h2>“The greats weren’t great because at birth they could paint. 
                        The greats were great because they painted a lot.” - Macklemore
                    </h2>
                </section>
                <section className="expectation">
                    <div className="expectation-media">
                        <img src={design} alt="design process"/>

                    </div>
                    <div className="expectation-text">
                    <h3>We Expect You to ...</h3>
                   <p> Play nice with other people.</p>
                    <p>Be an actively engaged person. That means you are present, motivated, and social.</p>
                    <p>Understand how to use the Figma design software</p>
                    <p>Be able to create initial design layouts with confidence and know-how to effectively 
                        communicate concepts to everyone on your team.
                    </p>
                     <p>Have a basic understanding of design principles and theories
                        To have creative courage. This is a tough industry, only the brave and sturdy remain.
                    </p>
                    <p>Be prepared to defend your decisions and take constructive criticism.</p>
                    <p>To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, 
                        so we’re constantly on the lookout for not only the how but also the why
                    </p>
                    </div>
                </section>
                <Footer/>
        </div>
    )
}

export default Designer;