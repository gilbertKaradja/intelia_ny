import React from 'react';

const ErrorLoadingContent = (props) => {
    return (
        <div className="center_wrapper">
            <div>
                <div className="description">WE COULDN'T GET THE POSTS</div>
                <button className="retry_button" onClick={props.retryButtonHandler}>Try Again</button>
            </div>
        </div>
    );
}

export default ErrorLoadingContent;