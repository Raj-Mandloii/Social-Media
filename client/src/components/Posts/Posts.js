import React from 'react'
import { Post } from './Post/Post.js'
import useStyles from "./styles.js"
export const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <div>Posts</div>
            <Post />
            <Post />
        </>
    )
}
