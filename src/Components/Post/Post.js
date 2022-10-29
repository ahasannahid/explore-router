import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const posts = useLoaderData();
    // console.log(post);
    return (
        <div>
            <h3>A lot of fb post are here</h3>
            {
                posts.map(post => <SinglePost
                    key={post.id}
                    post={post}
                ></SinglePost>)
            }
        </div>
    );
};

export default Post;