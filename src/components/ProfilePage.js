import React from 'react';
import './css/ProfilePage.css';

export default class ProfilePage extends React.Component{
    render(){
        return(
            <div className= "profile-page-container">
                <button className="profile-btn">
                    T
                </button>
                <div className = " name-text">
                    First LastName
                </div>
                <div className = "username">
                    @username
                </div>
                <div  className= "followers-status">
                    <div className = "num-followers"> 0 followers</div>
                    <div className = "num-following"> 1 followers</div>
                </div>
                <div className = "profile-bottom-text">
                    You haven't saved any Pins yet
                </div>
                <button className = "ideas-btn">
                    Find Ideas
                </button>
            </div> 
        );
    }
};