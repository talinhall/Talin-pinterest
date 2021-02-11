import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TodayPage from './components/TodayPage';
import FollowingPage from './components/FollowingPage';
import ProfilePage from './components/ProfilePage';


class App extends React.Component {
    render(){
        return(
            <div style = {{padding: "1% 2%"}} >
                <BrowserRouter>
                        <Header />
                        {/* <Route path="/"  render={props => <Header searchBarSubmited = {this.onSearchBarSubmit} />}/> */}
                        {/* <Route path="/" exact render={props => <HomePage images={this.state.images} />}/> */}
                        <Route path="/" exact component = {HomePage}/>
                        <Route path="/today" exact component = {TodayPage}/>
                        <Route path="/following" exact component = {FollowingPage}/>
                        <Route path="/profile" exact component = {ProfilePage}/>
                </BrowserRouter>
            </div>
        );
    }
};


export default App;