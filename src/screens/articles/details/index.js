import React, { Component } from 'react';

import { ReactComponent as BackIcon } from '../../../assets/icons/back-arrow.svg';

import place from '../../../assets/images/details_placeholder.jpg';

class DetailsScreen extends Component {

    constructor() {
        super();

        this.goBack = this.goBack.bind(this);
    }

    render() {

        let { articleData } = this.props;

        return (
            <div className="DetailsScreen">

                <div className="header">

                    <div className="wrapper">
                        <div className="button_container" onClick={this.goBack}>
                            <BackIcon />
                        </div>

                        <div className="text">
                            <div className="title">The New York Times</div>
                            <div className="section">{articleData.section}</div>
                        </div>

                        <div className=""></div>
                    </div>

                </div>

                <div className="content">

                    <div className="wrapper">
                        <div className="image_wrapper">
                            <img src={place} />
                        </div>

                        <div className="article_details">

                            <div className="title">{articleData.title}</div>

                            <div className="author">{articleData.byline}</div>

                            <div className="date">{articleData.published_date}</div>

                            <div className="abstract">{articleData.abstract}</div>

                            <div className="redirect_wrapper">
                                <a href={articleData.url} target="_blank">Read More</a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }

    goBack() {
        this.props.history.goBack();
    }
}

export default DetailsScreen;