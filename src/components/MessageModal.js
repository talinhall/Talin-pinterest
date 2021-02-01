import React from 'react';
import './css/Modal.css';
// import { Modal } from "react-bootstrap";

class MessageModal extends React.Component{
    constructor(props){
        super(props);
        this.state={term:''}
    }
    handleFormSubmit = (e) =>{
        e.preventDefault();
    };
    render(){
        return(
            <div className="ui modal active" >
                
                <div className="content">
                    <div>
                        <div className = "ui four column grid header context ">
                        <div className="row">
                            <div className="column"> </div>
                            <div className="column"> Inbox</div>
                            <div className="column">
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
                    <form  onSubmit = {this.handleFormSubmit} className="ui  left icon input friend searchbar">
                        <input 
                            value = {this.state.value} 
                            onChange= {(e)=> this.setState({term:e.target.value})}
                            type="text" 
                            placeholder="Search by name or email"
                        />
                        <i className="large search icon"></i>
                     </form>
                </div>
            </div>
        );
    }
    

};

export default MessageModal;