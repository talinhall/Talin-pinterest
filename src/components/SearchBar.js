import React from 'react';
import { connect } from 'react-redux';
import {fetchHomeImages} from '../actions';
import './css/SearchBar.css';


class SearchBar extends React.Component{
    state = {term: ''};
    handleFormSubmit = (e) =>{
        e.preventDefault(); 
        this.props.fetchHomeImages(this.state.term);
        this.setState({term: ''});
    };
     
    render(){
        return(

            <form onSubmit={this.handleFormSubmit} 
                className = {this.props.showyMobilNavBars? "ui left icon input":"disable ui left icon input"}
                // className="ui  left icon input"
            >
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
const mapStateToProps = (state) =>{
    return {showyMobilNavBars: state.displayMobilNavBar};
 }

export default connect(mapStateToProps, {fetchHomeImages})(SearchBar);