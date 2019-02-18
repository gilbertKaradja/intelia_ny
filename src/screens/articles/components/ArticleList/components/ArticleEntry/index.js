import React from 'react';

import FadeImage from '../../../../../../components/FadeImage/index.js';

import icon from '../../../../../../assets/icons/right-chevron.svg';

const ArticleEntry = (props) => {



    let imageLocation;

    try {
        props.media[0]['media-metadata'].map(item => {
            if (item.format === 'Standard Thumbnail') {
                imageLocation = item.url;
            }
        });
    } catch (e) {
        imageLocation = '';
    }


    return (
        <div className={props.selected ? 'ArticleEntry selected' : 'ArticleEntry'} onClick={props.onClickHandler}>

            <div className="thumbnail_wrapper">
                <FadeImage src={imageLocation} />
            </div>

            <div className="details_wrapper">

                <div className="title_author">
                    <div className="title">{props.title}</div>
                    <div className="author">{props.byline}</div>
                </div>

                <div className="date">
                    <label>{props.published_date}</label>
                </div>

            </div>

            <div className="button_wrapper">
                <img src={icon} />
            </div>

        </div>
    );
}

export default ArticleEntry;