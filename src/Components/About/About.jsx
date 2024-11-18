import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="src\assets\theme_pattern.svg" alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="src\assets\about_profile.svg" alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Creative and detail-oriented 3D artist with over 2 years of experience specializing in video game and product design. </p>
                    <p>Adept at collaborating with cross-functional teams to deliver innovative designs under tight deadlines. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>3D artist</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Maya</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Hudini</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Lumion</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement"><h1>2+</h1><p>YEARS OF EXPERIENCE</p></div>
            <hr/>
            <div className="about-achievement"><h1>25+</h1><p>Projects completed</p></div>
            <hr/>
            <div className="about-achievement"><h1>50+</h1><p>happy clients</p></div>

        </div>
    </div>
  )
}

export default About