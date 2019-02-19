import React from 'react';
import ArticleEntry from './ArticleEntry/index.js';

const ArticlesContent = (props) => {
    let itemRows = props.data.map(item => {
        return (
            <ArticleEntry
                key={item.id}
                {...item}
                onClickHandler={() => props.selectArticleHandler(item)}
                selected={props.activeArticleData && props.activeArticleData.id === item.id}
            />
        );
    });

    return (
        <div className="articles_wrapper">
            {itemRows}

            <div className="load_control" onClick={props.loadMoreClickHandler}>
                {props.fetchingMoreArticles && (
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                )}

                {!props.fetchingMoreArticles && (
                    <div className="text">Load More</div>
                )}


            </div>
        </div>
    );
}

export default ArticlesContent;