import React from 'react';
import noPostsImg from '../../../../../assets/images/empty.png';

const EmptyContent = () => {
    return (
        <div className="center_wrapper">
            <div>
                <img src={noPostsImg} alt='no_posts_image' />
                <div className="description">These aren't the articles you are</div>
                <div className="description">looking for</div>
            </div>
        </div>
    );
}

export default EmptyContent;