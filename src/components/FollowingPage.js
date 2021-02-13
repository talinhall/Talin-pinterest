import React from 'react';
import ImageCard from './ImageCard';
import unsplash from '../api/unsplash';
import './css/FollowingPage.css';
// import './css/ImageGrid.css';



class FollowingPage extends React.Component{
    
    // future to do: add fuctionality to the buttons 
    state = {images:[]};
    componentDidMount = async() =>{
        const response = await unsplash.get('search/photos', {
            params: {query:'people', per_page:30}
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
            <div className = "flowwing page container" >
                <p className= "following page header">From people you follow</p>
                <div className = "people-follwing-container">
                    <div className= "people">
                        <i className = " first big circle outline icon "></i>
                        <i className = " big circle outline icon "></i>
                        <i className = " big circle outline icon "></i>
                        <i className = " big circle outline icon "></i>
                        <i className = " big circle outline icon "></i>
                        <button className = "pencil-btn"><i className = " large pencil alternate icon"> </i></button>
                        <button className = "find-people-btn">Find people to follow </button>
                    </div>
                </div>  
                <div className = "image-list people-images">{this.state.images}</div>       
            </div> 
        );
    }
};

export default FollowingPage;