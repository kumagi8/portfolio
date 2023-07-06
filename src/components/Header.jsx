import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="main-header">
      <div className="what">Frontend Developer</div>
      <div className="navigate">
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/skills">Skills</Link> 
        <Link to="/projects">Projects</Link> 
        <Link to="/contact">Contact</Link> 
      </nav>
      </div>
    
   </header>
     
    </>
  

   
  )
}

export default Header
