import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TodayPage from './components/TodayPage';
import FollowingPage from './components/FollowingPage';
import ProfilePage from './components/ProfilePage';
import unsplash from './api/unsplash';


class App extends React.Component {
    state = {images:[]};
    componentDidMount(){
        this.onSearchBarSubmit('adventure');
    };
    onSearchBarSubmit= async(term) =>{
        const response = await unsplash.get('search/photos', {
            params: {query:term, per_page:30, orientation:'portrait', color:'black'}
        })
        this.setState({images:response.data.results})
    };
    render(){
        return(
            <div style = {{padding: "1% 2%"}} >
                <BrowserRouter>
                        {/* <Header searchBarSubmited = {this.onSearchBarSubmit}/> */}
                        <Route path="/"  render={props => <Header searchBarSubmited = {this.onSearchBarSubmit} />}/>
                        <Route path="/" exact render={props => <HomePage images={this.state.images} />}/>
                        <Route path="/today" exact component = {TodayPage}/>
                        <Route path="/following" exact component = {FollowingPage}/>
                        <Route path="/profile" exact component = {ProfilePage}/>
                </BrowserRouter>
            </div>
        );
    }
};


export default App;