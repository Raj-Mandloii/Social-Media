
import * as api from "../api";

// action creaters 

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (e) {
        console.log(e.message)
    }
    

}