import axios from 'axios'
import {createPostStart,createPostSuccess,createPostFailure, deletePostStart,
    deletePostSuccess, getPostsFailure, getPostsStart, getPostsSuccess, deletePostFailure, } from './PostActions'

export const getPosts = async (dispatch) => {
    dispatch(getPostsStart())
    try{
        const res = await axios.get('/posts')
        dispatch(getPostsSuccess(res.data))
    } catch(e){
        dispatch(getPostsFailure())
    }
}

export const createPost = async (post, dispatch) => {
    dispatch(createPostStart())
    try{
        const res = await axios.post('/posts', post)
        dispatch(createPostSuccess(res.data))
    } catch(e){
        dispatch(createPostFailure())
    }
}

export const deletePost = async (id, dispatch) => {
    dispatch(deletePostStart())
    try{
        await axios.delete('/posts/'+ id)
        dispatch(deletePostSuccess(id))
    } catch(e){
        dispatch(deletePostFailure())
    }
}