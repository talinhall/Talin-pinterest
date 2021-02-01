import React from 'react';
import './css/Modal.css';
// import { Modal } from "react-bootstrap";

const MessageModal = (props) =>{
    return(
        <div className="ui modal active" >
            
            <div className="content">
                <div>
                    <div className = "ui four column grid header context ">
                    <div className="row">
                        <div className="column"> </div>
                        <div className="column"> Inbox</div>
                        <div className="column">
                            {/* <select className="ui dropdown">
                                <i className = " list icon"> </i>
                                <option value="1">Mark All As Read</option>
                                
                            </select> */}

                        <div className="ui floating dropdown icon button">
                        <i className = " list icon"> </i>
                        <div className="menu">
                        <div className="divider"></div>
                        <div className="header">
                        <i className="tags icon"></i>
                        Tag Label
                        </div>
                        
                        </div>
                        </div>




                        </div>
                        <div className="column">
                             <button><i className = "  pencil alternate icon"> </i></button>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <p className = "big modal context">Share ideas with your friends</p>
                <form className="ui  left icon input friend searchbar">
                    <input type="text" placeholder="Search by name or email"/>
                    <i className="large search icon"></i>
                 </form>
            </div>
        </div>
    );

};

export default MessageModal;