
import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionType"
// action creaters 

export const getPosts = () => async (dispatch) => {
    console.log("The get api is calling ______")
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (e) {
        console.log(e.message)
    }


}

export const createPost = (post) => async (dispatch) => {
    console.log("POST", post)


    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        console.log('This is the updated data :::::',data)
        dispatch({ type: UPDATE, payload: data })
    } catch (e) {
        console.log(e)
    }
}

export const deletePost = (id) => async (dispatch) => {

    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (e) {
        console.log(e)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE, payload: data })
    } catch (e) {
        console.log(e)
    }
}