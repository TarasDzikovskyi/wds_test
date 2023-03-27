// const PostReducer = (state, action) => {
//     switch (action.type) {
//         case 'GET_START':
//             return {
//                 posts: null,
//                 isFetching: true,
//                 error: false
//             };
//         case 'GET_SUCCESS':
//             return {
//                 posts: action.payload,
//                 isFetching: false,
//                 error: false
//             };
//         case 'GET_FAILURE':
//             return {
//                 posts: null,
//                 isFetching: false,
//                 error: true
//             };
//         default:
//             return {...state}
//     }
// }
//
// export default PostReducer