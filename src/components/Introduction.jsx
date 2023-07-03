import React from "react";
import profile from '../images/profile.svg'
function Introduction(){
    return (
        <div className="intro-section">
            <div className="profile">
               <img className="profile-photo" src={profile} alt="profile" />
            </div>
            <div className="profile">
                <div className="name">
                <h1>Welcome to My Portfolio</h1>
                <h2>Hi, I'm a frontend developer passionate about creating user-friendly and visually appealing websites.</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Introduction