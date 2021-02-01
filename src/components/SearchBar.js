import React from 'react';
// import {Link} from 'react-router-dom';
import './css/SearchBar.css';


export default class SearchBar extends React.Component{
    state = {term: ''};
    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.props.searchBarSubmited(this.state.term);
        // <Link to = "/"/>
    };

    render(){
        return(

            <form onSubmit={this.handleFormSubmit} className="ui  left icon input">
                <input 
                    value= {this.state.term} 
                    onChange= {(e) => this.setState({term:e.target.value})} 
                    type="text" 
                    placeholder="Search"
                />
                <i className="large search icon"></i>
            </form>

        );
    }
};