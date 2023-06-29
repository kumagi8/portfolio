import React from "react";
import profile from '../images/profile.svg'
function Introduction(){
    return (
        <div className="intro-section">
            <div className="profile">
                <div className="name">
                <h1>Hi,</h1>
                <h1>Girish Kumar</h1>
                </div>
            </div>
            <div className="profile">
               <img className="profile-photo" src={profile} alt="profile" />
            </div>
        </div>
    )
}

export default Introduction