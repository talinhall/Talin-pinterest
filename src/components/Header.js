import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {displayMobilNavBar} from '../actions';
import SearchBar from './SearchBar';
import MessageModal from './MessageModal';
import UpdateModal from './UpdateModal';
import SettingsModal from './SettingsModal';
import './css/Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showMessageModal: false, 
            showUpdateModal: false,
            showSettingsModal: false
        };
    };

    closeMessageModal = () => {
        this.setState({showMessageModal:false});
    }

    closeUpdateModal = () => {
        this.setState({showUpdateModal:false});
    }

    closeSettingsModal = () => {
        this.setState({showSettingsModal:false});
    }

    render(){
        return (
         <div>
            <div className = "header">
                <div className = " mobil-menu-top">
                    <Link to = "/">
                        <button>
                            <i className = " large plane icon"> </i>
                        </button>
                    </Link>
                    <button className = "mobile-menu" 
                        onClick = {()=> this.props.displayMobilNavBar()}> 
                        <i className = " list icon"> </i>
                    </button>
                </div >
                <NavLink to="/" exact 
                    className = {this.props.showyMobilNavBars ? "nav-bar-btn display":"nav-bar-btn" }
                >
                    <button> Home</button>
                </NavLink>
                <NavLink to = "/today"  
                    className = {this.props.showyMobilNavBars ? "nav-bar-btn display":"nav-bar-btn" }
                >
                    <button> Today</button>
                </NavLink>
                <NavLink to="/following" 
                    className = {this.props.showyMobilNavBars ? "nav-bar-btn display":"nav-bar-btn" }
                >
                    <button> Following</button>
                </NavLink>
                <SearchBar />
                <button 
                    className = "nav-bar-modal-btn"
                    onClick = {() => this.setState({showUpdateModal: !this.state.showUpdateModal, showMessageModal: false, showSettingsModal:false})}>
                    <i className = " large bell icon"> </i>
                </button>
                
                <button 
                    className = "nav-bar-modal-btn"
                    onClick = {() => this.setState({showMessageModal: !this.state.showMessageModal, showUpdateModal:false, showSettingsModal:false})}>
                    <i className = " large comment alternate icon"> </i>
                </button>
                
                <NavLink to = "/profile" 
                    className = {this.props.showyMobilNavBars ? "nav-bar-btn display":"nav-bar-btn" }
                >
                    <button 
                        className= "user"
                    >T
                    </button>
                </NavLink>
                
                <button 
                    className = "nav-bar-modal-btn"
                    onClick = {() => this.setState({showSettingsModal: !this.state.showSettingsModal,showUpdateModal:false,showMessageModal: false})}
                >
                    <i className = " large angle down icon"> </i>
                </button>
                     
            </div>
                {this.state.showUpdateModal && <UpdateModal closeUpdateModal= {this.closeUpdateModal}/>}
                {this.state.showMessageModal && <MessageModal  closeMessageModal= {this.closeMessageModal}/>}
                {this.state.showSettingsModal && <SettingsModal closeSettingsModal= {this.closeSettingsModal} />}
        </div>
        );
    }
};
const mapStateToProps = (state) =>{
    return {showyMobilNavBars: state.displayMobilNavBar};
 }

export default connect(mapStateToProps, {displayMobilNavBar})(Header);



