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
                        <div className="loader_bars">Loading...</div>
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
                <div className="articles_wrapper">
                    {itemRows}

                    <div className="load_control" onClick={this.props.loadMoreClickHandler}>
                        {this.props.fetchingMoreArticles && (
                            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        )}

                        {!this.props.fetchingMoreArticles && (
                            <div className="text">Load More</div>
                        )}


                    </div>
                </div>
            );

        } else {
            content = (
                <div className="center_wrapper">
                    <div>
                        <img src={noPostsImg} />
                        <div className="description">These aren't the articles you are</div>
                        <div className="description">looking for</div>
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