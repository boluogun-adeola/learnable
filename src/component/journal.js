import React from 'react'
import journal from '../images/img52.png'
import person1 from '../images/img62.png'
import person2 from '../images/img63.png'
import person3 from '../images/img64.png'
import person4 from '../images/img65.png'
import Footer from './footer.js'
import '../styles/journal.css'


const Journal = () =>{
    return(
        <div className="main-container">
               <section className="journal-head">
                    <div className="journal-head-text">
                        <h1>Journal</h1>
                    </div>
                    <div className="journal-button">
                        <button>Categories</button>
                    </div>

                </section>
                <section className="inspiration-section">
                    <div className="inspiration-media">
                        <img src={journal} id="journal-image"/>
                    </div>
                    <div className="inspiration-text">
                        <p className="inspiration-link"><a href="#">Inspiration</a></p>
                        <h3>Learn Design Thinking like a Pro and Build Projects that People will care about</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. 
                           Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus.
                           Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. 
                           Ipsum sem ut tortor ac ullamcorper. Lacus.
                        </p>
                        
                            <p>David Mong, Apr 9, 2020</p>
                      
                    </div>
                </section>
                <section className="journal-grid-1">
                    <div className="journal-grid-box">
                        <img src={person1} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong">David Mong, Apr 9, 2020</p>
                    </div>
                    <div className="journal-grid-box">
                        <img src={person2} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong"> David Mong, Apr 9, 2020</p>
                    </div>
                    <div className="journal-grid-box">
                        <img src={person3} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong">David Mong, Apr 9, 2020</p>
                    </div>
                    <div className="journal-grid-box">
                        <img src={person4} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong">David Mong, Apr 9, 2020</p>
                    </div>
                </section>
                <section className="journal-grid-2">
                    <div className="journal-box-2">
                        <img src={person1} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong-2">David Mong, Apr 9, 2020</p>
                    </div>
                    <div className="journal-box-2">
                        <img src={person2} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong-2"> David Mong, Apr 9, 2020</p>
                    </div>
                    <div className="journal-box-2">
                        <img src={person3} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong-2">David Mong, Apr 9, 2020</p>
                    </div>
                    <div className="journal-box-2">
                        <img src={person4} alt=""/>
                        <p className="inspiration-link"><a href="#">inspiration</a></p>
                        <h4>Learn Design Thinking like a Pro and Build Projects that People will care about</h4>
                        <p className="mong-2">David Mong, Apr 9, 2020</p>
                    </div>
                </section>
                <Footer/>
        </div>
    )
}

export default Journal;