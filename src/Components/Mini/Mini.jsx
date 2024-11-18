import React from 'react'
import './Mini.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Mini = () => {
  return (
    <div id='home' className='mini'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Tayyab Khan,</span> 3D artist based in India.</h1>
        <p>I am a 3D artist from India, Experienced 3D artist with 2+ years in video game and product design, skilled in creating high-quality assets tailored to client and consumer needs. Eager to contribute to a dynamic team while honing artistic and technical expertise</p>
        <div className="mini-action">
            <div className="mini-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="mini-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Mini