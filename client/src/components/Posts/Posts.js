import React from 'react'
import { Post } from './Post/Post.js'
import useStyles from "./styles.js"
import { useSelector } from 'react-redux'

export const Posts = () => {
    const posts = useSelector((store)=> store.posts)
    console.log(posts)
    const classes = useStyles();
    return (
        <>
            <div>Posts</div>
            <Post />
            <Post />
        </>
    )
}
