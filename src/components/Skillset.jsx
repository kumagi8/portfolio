import React from 'react';
import js1 from '../images/js1.svg';
import react from '../images/react.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
// import Header from './Header';


const Skillset = () => {
  return (
    <>
    <div className="skills">
     <div className="stack"> <p>SKILLS</p></div>
    <div className='card-container'>
    <div className="cards">
        <div className='inner-card'>
        <img className='skill-img' src={js1} alt="javascript" />
        </div>
        {/* <div className='skill-title'>Javascript</div> */}
    </div>
    <div className="cards">
    <div className='inner-card'>
    <img  className='skill-img' src={react} alt="react" />
       </div>
       {/* <div className='skill-title'>React</div> */}
    </div>
    <div className="cards">
    <div className='inner-card'>
    <img className='skill-img'  src={html} alt="html" />
       </div>
       {/* <div className='skill-title'>HTML</div> */}
    </div>
    <div className="cards">
    <div className='inner-card'>
    <img className='skill-img'  src={css} alt="ccss" />
       </div>
       {/* <div className='skill-title'>CSS</div> */}
    </div>
    </div>
    </div>
    </>
  )
}

export default Skillset
