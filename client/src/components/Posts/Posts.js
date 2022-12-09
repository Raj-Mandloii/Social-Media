import React from 'react'
import { Post } from './Post/Post.js'
import useStyles from "./styles.js"
import { useSelector } from 'react-redux'

export const Posts = () => {
    const posts = useSelector((state)=> state.posts)
    
    const classes = useStyles();
    return (
        <>
            <div>Posts</div>
            <Post />
            <Post />
        </>
    )
}
