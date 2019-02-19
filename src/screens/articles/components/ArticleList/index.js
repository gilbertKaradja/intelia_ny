import React, { Component } from 'react';
import ArticleEntry from './components/ArticleEntry/index.js';


import LoadingContent from './components/LoadingContent.js';
import ErrorLoadingContent from './components/ErrorLoadingContent.js';
import EmptyContent from './components/EmptyContent.js';

class ArticleList extends Component {

    render() {
        let { loading, errorLoading, data, activeArticleData } = this.props;
        let content;

        if (loading) {

            content = <LoadingContent />;

        } else if (!loading && errorLoading) {

            content = <ErrorLoadingContent retryButtonHandler={this.props.retryButtonHandler}/>;

        } else if (data && data.length > 0) {

            let itemRows = data.map(item => {
                return (
                    <ArticleEntry
                        key={item.id}
                        {...item}
                        onClickHandler={() => this.props.selectArticleHandler(item)}
                        selected={activeArticleData && activeArticleData.id === item.id}
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
            content = <EmptyContent />;
        }

        return (
            <div className="ArticleList">
                {content}
            </div>
        );
    }
}

export default ArticleList;