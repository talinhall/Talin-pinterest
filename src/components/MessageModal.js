import React from 'react';
import './css/Modal.css';
import './css/MessageModal.css';


class MessageModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }
    }
    handleFormSubmit = (e) =>{
        e.preventDefault();
    };
    render(){
        return( 
            <div className= "full ui modal active" > 
                <button 
                    className = 'close-modal-btn'
                    onClick = {()=>this.props.closeMessageModal()} 
                >
                    <i className="close icon"></i>
                </button>
                <div className = "message-modal-header">
                
                    <div className = "header-context">Inbox</div>
                    <button className = "list-icon-btn"> <i className = " list icon"> </i></button>
                    <button><i className = "  pencil alternate icon"> </i></button>
                    
                </div>
                <form  onSubmit = {this.handleFormSubmit} className="ui  left icon input friend searchbar">
                    <input 
                        value = {this.state.value} 
                        onChange= {(e)=> this.setState({term:e.target.value})}
                        type="text" 
                        placeholder="Search by name or email"
                    />
                    <i className="large search icon"></i>
                </form>
                <div className = "message-modal-bottom-text">
                    Suggested
                </div>
            </div>
        );
    }
    

};

export default MessageModal;