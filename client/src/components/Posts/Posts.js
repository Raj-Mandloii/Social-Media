import React from 'react'
import { Post } from './Post/Post.js'
import useStyles from "./styles.js"
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'

export const Posts = ({setCurrentId}) => {
    const posts = useSelector((store) => store.posts)

    const classes = useStyles();
    return (
        !posts.length ?
            <CircularProgress /> :
            <Grid className={classes.mainContainer}>
                {
                    posts.map((el) => (
                        <Grid item key={el._id} xs={12} sm={6}>
                            <Post post={el} setCurrentId={setCurrentId}/>

                        </Grid>
                    ))
                }

            </Grid>
    )
}
