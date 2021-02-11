import React from 'react';

export default class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {spans:0};
        this.imageRef = React.createRef();
    }
 
    componentDidMount(){
        //will see values of 0 beacsue we are console logging these up before
        //we even had a chance of loading the image up. so we do a callback on an image
        //load
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () =>{
        const heigth = this.imageRef.current.clientHeight;
        //see how much grids it should span to not overlap another pic
        const spans = Math.ceil(heigth/10);
        this.setState({spans:spans});
    };
    render(){
        const {description, urls} = this.props.image;
        return(
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img src = {urls.regular} alt = {description} ref = {this.imageRef}/>
            </div>
        );
    }
};