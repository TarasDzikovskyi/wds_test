// import axios from 'axios';
// import {getStart, getSuccess} from './PostAction';

// export const getPosts = async (dispatch) => {
//     dispatch(getStart());
//
//     try{
//         const res = await axios.get(`/posts`);
//         console.log(res)
//         dispatch(getSuccess(res.data));
//     } catch(e){
//         console.log(e);
//     }
// }