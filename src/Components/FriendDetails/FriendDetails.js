import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    const {name, username, email, phone} = friend;
    return (
        <div>
            <h1>Details About: {name}</h1>
            <h2>Everything you need to know this person</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>UserName:{username}</small></p>
            <p>Call him/her : {phone} </p>
        </div>
    );
};

export default FriendDetails;