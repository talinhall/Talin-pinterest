import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import MessageModal from './MessageModal';
import './css/Header.css';

export default class Header extends React.Component{
    state = {showMessageModal: false};
    searchBarSubmited = (term) =>{
        this.props.searchBarSubmited(term);
    };
    render(){
        return (
            <div className = "header">
                <Link to = "/">
                    {/* <button><i className = " large pinterest icon"> </i></button> */}
                    <button><i className = " large plane icon"> </i></button>
                </Link>
                <Link to="/"><button className = "button active" > Home</button></Link>
                <Link to = "/today">
                    <button > Today</button>
                </Link>
                <Link to="/following">
                    <button > Following</button>
                </Link>
                <SearchBar searchBarSubmited = {this.searchBarSubmited}/>
                <button><i className = " large bell icon"> </i></button>
                <button onClick = {() => this.setState({showMessageModal: !this.state.showMessageModal})}>
                    <i className = " large comment alternate icon"> </i>
                </button>
                {this.state.showMessageModal && <MessageModal showMessageModal= {this.state.showMessageModal} />}
                <Link to = "/profile">
                    <button className= "user">T</button>
                </Link>
                {/* <div className="ui dropdown"> */}
                    <button><i className = " large angle down icon"> </i></button>
                    {/* <div className="menu">
                        <div className="item">New</div>
                    </div>
                </div> */}
                
                
            </div>
        );
    }
};