import React from 'react';
import { connect } from 'react-redux';
import {fetchHomeImages} from '../actions';
import './css/SearchBar.css';


class SearchBar extends React.Component{
    state = {term: ''};
    handleFormSubmit = (e) =>{
        e.preventDefault();
        // this.props.searchBarSubmited(this.state.term);
        this.props.fetchHomeImages(this.state.term);
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


export default connect(null, {fetchHomeImages})(SearchBar);