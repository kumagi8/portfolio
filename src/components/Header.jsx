import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="main-header">
      <div className="what">Kumar,Girish</div>
      <div className="navigate">
      <nav>
        <Link to="/">Frontend Developer</Link> 
        {/* <Link to="/">Skills</Link> 
        <Link to="/">Projects</Link> 
        <Link to="/">Contact</Link>  */}
      </nav>
      </div>
    
   </header>
     
    </>
  

   
  )
}

export default Header
