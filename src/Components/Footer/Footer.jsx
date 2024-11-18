import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="src\assets\footer_logo.svg" alt="" />
                <p>I am a 3d artist</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="src\assets\user_icon.svg" alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Tayyab Khan. All right reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer