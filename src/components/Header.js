import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import SearchBar from './SearchBar';
import MessageModal from './MessageModal';
import UpdateModal from './UpdateModal';
import SettingsModal from './SettingsModal';
import './css/Header.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showMessageModal: false, 
            showUpdateModal: false,
            showSettingsModal: false
        };
    };

    render(){
        return (
            <div className = "header">
                <Link to = "/">
                    <button>
                        <i className = " large plane icon"> </i>
                    </button>
                </Link>
                <NavLink to="/" exact className ="nav-bar-btn" >
                    <button> Home</button>
                </NavLink>
                <NavLink to = "/today"  className ="nav-bar-btn" >
                    <button> Today</button>
                </NavLink>
                <NavLink to="/following" className ="nav-bar-btn" >
                    <button> Following</button>
                </NavLink>
                <SearchBar />
                <button onClick = {() => this.setState({showUpdateModal: !this.state.showUpdateModal, showMessageModal: false, showSettingsModal:false})}>
                    <i className = " large bell icon"> </i>
                </button>
                
                <button onClick = {() => this.setState({showMessageModal: !this.state.showMessageModal, showUpdateModal:false, showSettingsModal:false})}>
                    <i className = " large comment alternate icon"> </i>
                </button>
                
                <NavLink to = "/profile" className ="nav-bar-btn" >
                    <button 
                        className= "user"
                    >T
                    </button>
                </NavLink>
                
                <button 
                    onClick = {() => this.setState({showSettingsModal: !this.state.showSettingsModal,showUpdateModal:false,showMessageModal: false})}
                >
                    <i className = " large angle down icon"> </i>
                </button>
                {this.state.showUpdateModal && <UpdateModal />}
                {this.state.showMessageModal && <MessageModal  />}
                {this.state.showSettingsModal && <SettingsModal  />}
                     
            </div>
        );
    }
};



