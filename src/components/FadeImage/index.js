import React, { Component } from 'react';

class FadeImage extends Component {
    constructor() {
        super();

        this.state = {
            imageLoaded: false
        }

        this.onLoadHandler = this.onLoadHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.src !== this.props.src) {
            this.setState({imageLoaded: false})
        }
    }

    render() {
        
        return (
            <div className="FadeImage">

                <img src={this.props.src} onLoad={this.onLoadHandler} />

                <div className={this.state.imageLoaded ? 'placeholder hidden' : 'placeholder'}></div>
            </div>
        );
    }

    onLoadHandler() {
        this.setState({ imageLoaded: true });
    }
}

export default FadeImage;