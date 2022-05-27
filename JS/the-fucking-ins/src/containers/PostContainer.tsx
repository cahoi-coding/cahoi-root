import React, {Component} from 'react';

import {Post} from '../components/Post';

// type PostContainerProps = {
//
// }
//
// type PostContainerState = {
//     posts: [any],
//
// }
//
// class PostContainer extends Component<any, any>
// {
//
// }

export function PostContainer()
{
    return (
        <div className="post__container">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}