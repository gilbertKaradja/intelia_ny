import React, { Component } from 'react';
import ArticleEntry from './components/ArticleEntry/index.js';

import noPostsImg from '../../../../assets/images/empty.png';

class ArticleList extends Component {

    render() {
        let { loading, errorLoading, data, activeArticleData } = this.props;
        let content;

        if (loading) {

            content = (
                <div className="center_wrapper">
                    <div>
                        <div className="loader">Loading...</div>
                    </div>
                </div>
            );

        } else if (!loading && errorLoading) {

            content = (
                <div className="center_wrapper">
                    <div>
                        <div className="description">WE COULDN'T GET THE POSTS</div>
                        <button>Try Again</button>
                    </div>
                </div>
            );

        } else if (data && data.length > 0) {

            let itemRows = data.map(item => {
                return (
                    <ArticleEntry
                        key={item.id}
                        {...item}
                        onClickHandler={() => this.props.selectArticleHandler(item)}
                        selected={activeArticleData && activeArticleData.id == item.id}
                    />
                );
            });

            content = (
                <div className="">
                    {itemRows}

                    <div onClick={this.props.loadMoreClickHandler} className="">
                        Load More
                    </div>
                </div>
            );

        } else {
            content = (
                <div className="center_wrapper">
                    <div>
                        <img src={noPostsImg} />
                        <div className="description">THERE AREN'T ANY</div>
                        <div className="description">POSTS HERE</div>
                    </div>
                </div>
            );
        }

        return (
            <div className="ArticleList">
                {content}
            </div>
        );
    }
}

export default ArticleList;