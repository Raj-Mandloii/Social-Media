import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { Form } from "../Form/Form.js";
import {Posts} from "../Posts/Posts.js"
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';
import useStyles from "./styles.js"

 const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    console.log("Comp is rendering")
    useEffect(() => {
        console.log("User effect is calling ++ Current Id",currentId)
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}
export default Home