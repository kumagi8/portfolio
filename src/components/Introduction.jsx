import React from "react";
import profile from '../images/profile.svg'
function Introduction(){
    return (
        <div className="intro-section">
            <div className="title"> <p>Front-end Developer</p> </div>
            <div className="profile-image"> <img className="profile-photo" src={profile} alt="profile" /></div>
            <div className="intro-content">I'm Girish, I love creating user-friendly and visually appealing websites.</div>
        </div>
    )
}

export default Introduction