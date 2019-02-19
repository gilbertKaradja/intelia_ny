import React, { Component } from 'react';



import LoadingContent from './components/LoadingContent.js';
import ErrorLoadingContent from './components/ErrorLoadingContent.js';
import ArticlesContent from './components/ArticlesContent.js';
import EmptyContent from './components/EmptyContent.js';

class ArticleList extends Component {

    render() {
        let {
            loading,
            errorLoading,
            data,
            fetchingMoreArticles,
            loadMoreClickHandler,
            selectArticleHandler
        } = this.props;

        let content;


        if (loading) {
            content = <LoadingContent />

        } else if (!loading && errorLoading) {

            content = (
                <ErrorLoadingContent retryButtonHandler={this.props.retryButtonHandler} />
            );

        } else if (data && data.length > 0) {

            content = (
                <ArticlesContent
                    data={data}
                    fetchingMoreArticles={fetchingMoreArticles}
                    loadMoreClickHandler={loadMoreClickHandler}
                    selectArticleHandler={selectArticleHandler}
                />
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