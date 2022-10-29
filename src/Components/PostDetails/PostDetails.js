import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body, userId} = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Details About Post: {id}</h2>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={handleNavigate}>Get the author</button>
        </div>
    );
};

export default PostDetails;