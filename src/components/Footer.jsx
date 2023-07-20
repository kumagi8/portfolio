import React from 'react'
// import facebook1 from '../images/facebook1.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import githuub from '../images/githuub.svg'
// import Header from './Header'

const Footer = () => {
  return (
    <>
    {/* <Header/> */}
    <div className='footer-container'>
    <div className="contact">CONTACT</div>
      <div className="socialicon-emailid">
        <div className="email-id"><p>daviddwayne@gmail.com</p></div>
        <div className="social-icons-container">
        {/* <img className='social-icon' src={facebook1} alt="javascript" /> */}
          <img className='social-icon' src={twitter} alt="javascript" />
          <img className='social-icon' src={linkedin} alt="javascript" />
          <img className='social-icon' src={instagram} alt="javascript" />
          <img className='social-icon' src={githuub} alt="javascript" />
        </div>
      </div> 
    </div></>
  )
}

export default Footer
