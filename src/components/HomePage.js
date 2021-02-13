import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import './css/ImageGrid.css';

class HomePage extends React.Component{
   
   render(){
      const images = this.props.homeImages.map(image =>{
         return<ImageCard key = {image.id} image = {image} />
      });
      return(
            <div className = "image-list">{images}</div>  
      );
   }
};


const mapStateToProps = (state) =>{
   return {homeImages: state.homeImages};
}

export default connect(mapStateToProps)(HomePage); 