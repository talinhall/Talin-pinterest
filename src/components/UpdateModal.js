import React from 'react';
import './css/Modal.css';
import './css/UpdateModal.css';


class UpdateModal extends React.Component{
    render(){ 
        return(
            <div className=" full ui modal active" >
                <button 
                    className = 'close-modal-btn'
                    onClick = {()=>this.props.closeUpdateModal()} 
                >
                    <i className="close icon"></i>
                </button>
                
                <div className="update-modal">
                    <div className = "update-modal-header">
                        Updates
                    </div>
                </div>
            </div>
        );
    }
    

};

export default UpdateModal;