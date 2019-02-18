import React, { Component } from 'react';

import icon from '../../../../../../assets/icons/right-chevron.svg';

const ArticleEntry = (props) => {
    return (
        <div className={props.selected ? 'ArticleEntry selected' : 'ArticleEntry'} onClick={props.onClickHandler}>

            <div className="thumbnail_wrapper">
                <img src={'https://static01.nyt.com/images/2019/01/31/world/00sheika2/merlin_150012405_aeff8c17-9448-45d4-9de6-804206d4c3c9-thumbStandard.jpg'} />
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