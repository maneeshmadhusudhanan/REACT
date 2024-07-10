import React, { useState } from 'react';

const LikeButton = () => {
    // Define state to keep track of like status
    const [liked, setLiked] = useState(false);

    // Function to toggle the liked state
    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <button onClick={toggleLike}>
                {liked ? 'Unlike' : 'Like'}
            </button>
            <p>{liked ? 'Liked' : 'Not Liked'}</p>
        </div>
    );
};

export default LikeButton;
