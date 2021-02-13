import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import MessageModal from './MessageModal';
import UpdateModal from './UpdateModal';
import SettingsModal from './SettingsModal';
import { connect } from 'react-redux';
import './css/Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showMessageModal: false, 
            showUpdateModal: false,
            showSettingsModal: false,
            activePath: window.location.pathname
        };
    };

    componentDidUpdate(){
        if(window.location.pathname !==this.state.activePath ){
            this.setState({activePath:window.location.pathname});
        }
    }
   

    render(){
        return (
            <div className = "header">
                <Link to = "/">
                    <button
                        onClick = {()=> this.setState({activePath:'/'})}
                    >
                        <i className = " large plane icon"> </i>
                    </button>
                </Link>
                <Link to="/">
                    <button 
                        className = {this.state.activePath==='/'? "button active": ""} 
                        onClick = {()=> this.setState({activePath:'/'})}
                    > Home
                    </button>
                </Link>
                <Link to = "/today">
                    <button 
                        className = {this.state.activePath==='/today'? "button active": ""}
                        onClick = {()=> this.setState({activePath:'/today'})}
                    > Today
                    </button>
                </Link>
                <Link to="/following">
                    <button 
                        className = {this.state.activePath==='/following'? "button active": ""}
                        onClick = {()=> this.setState({activePath:'/following'})}
                    > Following
                    </button>
                </Link>
                <SearchBar />
                <button onClick = {() => this.setState({showUpdateModal: !this.state.showUpdateModal, showMessageModal: false, showSettingsModal:false})}>
                    <i className = " large bell icon"> </i>
                </button>
                
                <button onClick = {() => this.setState({showMessageModal: !this.state.showMessageModal, showUpdateModal:false, showSettingsModal:false})}>
                    <i className = " large comment alternate icon"> </i>
                </button>
                
                <Link to = "/profile">
                    <button 
                        className = {this.state.activePath==='/profile'? " user button active": "user"}
                        onClick = {()=> this.setState({activePath:'/profile'})}
                    >T
                    </button>
                </Link>
                
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

const mapStateToProps = (state) =>{
    return {linkChange: state.linkChange};
 }
export default connect(mapStateToProps)(Header); 


