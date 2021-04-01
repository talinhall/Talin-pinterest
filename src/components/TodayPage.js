import React from 'react';
import {Link} from 'react-router-dom';
import ImageCard from './ImageCard';
import unsplash from '../api/unsplash';
import './css/TodayPage.css';


export default class TodayPage extends React.Component{
    state = {images:[]};

    dayDisplay = () =>{
        let d = new Date();
        let day = d.getDate();
        let month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        let m = month[d.getMonth()];
        let year = d.getFullYear();
        return `${m} ${day},  ${ year}`;
    };
   
    componentDidMount = async() =>{
        const response = await unsplash.get('search/photos', {
            params: {query:'inspiration', per_page:10}
        })
        this.createImages(response.data.results);
    };

    createImages = (images) =>{
        let imageList = images.map(image =>{
            return<ImageCard key = {image.id} image = {image} />
         });
         this.setState({images: imageList})
    };
    

    render(){
        return(
            <div>
                <h2> {this.dayDisplay()} </h2>
                <h1>Daily inspiration</h1>
                <div className = "image-list-today">{this.state.images}</div>
                <div className= "end-statment-1">That's all for Today!</div> 
                <div className= "end-statment-2">Come back tomorrow for
                <div> more inspiration</div>
                </div>
                <Link to ='/'> 
                    <div className= "home-button">
                        <button  > Go To Home Feed</button>
                    </div>
                </Link>
            </div>  
        );
    }
};


