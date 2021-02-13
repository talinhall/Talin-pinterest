import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import {fetchHomeImages} from './actions';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TodayPage from './components/TodayPage';
import FollowingPage from './components/FollowingPage';
import ProfilePage from './components/ProfilePage';


class App extends React.Component {
    componentDidMount(){
        console.log("went in here");
        this.props.fetchHomeImages('adventure');
     };
    render(){
        return(
            <div style = {{padding: "0 2%"}} >
                <BrowserRouter>
                        <Header />
                        <Route path="/" exact component = {HomePage}/>
                        <Route path="/today" exact component = {TodayPage}/>
                        <Route path="/following" exact component = {FollowingPage}/>
                        <Route path="/profile" exact component = {ProfilePage}/>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, {fetchHomeImages})(App); 
