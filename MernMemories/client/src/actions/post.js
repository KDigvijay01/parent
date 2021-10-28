import * as api from '../api/index';

// Action Creators


export const getPosts=() => async (dispatch) => {
    try {
        const {data}= await api.fetchPosts();

        dispatch({type:'FETCH_ALL', payload: data})
        console.log("the data from getPost", data)
    } 
    catch (error) {
        console.log("error in getpost...",error);   
    }
}


export const createPost=(post)=>async (dispatch)=>{
    try {
        const { data } =await api.createPost(post);
        dispatch({type: 'CREATE_POST', payload: data})
    }
    catch (err) {
        console.log("error in createPost...",err)
    }
}