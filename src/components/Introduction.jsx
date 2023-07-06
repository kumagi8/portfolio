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
                <h1>Hi, Welcome to My Portfolio</h1>
                <h3>I'm Girish, passionate about creating user-friendly and visually appealing websites.</h3>
                </div>
            </div>
            
        </div>
    )
}

export default Introduction