import React from 'react';
import './css/SettingsModal.css';


class SettingsModal extends React.Component{
    render(){
        return(
            <div className="ui modal active" >
                 <button 
                        className = 'close-modal-btn'
                        onClick = {()=>this.props.closeSettingsModal()} 
                    >
                        <i className="close icon"></i>
                </button>
               
                <div className="settings content">
                    <div className = "message-modal-text">
                        Accounts
                        
                    </div>
                    <button className = "settings-modal-btn">
                        Add another account
                    </button>
                    <div className = "message-modal-text">
                        More Options
                    </div>
                    <button className = "settings-modal-btn">
                        Settings
                    </button>
                    <button className = "settings-modal-btn">
                        Tune your home page
                    </button>
                    <button className = "settings-modal-btn">
                        Get help
                    </button>
                    <button className = "settings-modal-btn">
                        Log out
                    </button>
                </div>
            </div>
        );
    }
    

};

export default SettingsModal;