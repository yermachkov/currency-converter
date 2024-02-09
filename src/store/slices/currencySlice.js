import createSlice from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'currencies',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
});

console.log(postsSlice);
/*
{
    name: 'posts',
    actions : {
        createPost,
        updatePost,
        deletePost,
    },
    reducer
}
*/

const { createPost } = postsSlice.actions;

console.log(createPost({ id: 123, title: 'Hello World' }));
// {type : "posts/createPost", payload : {id : 123, title : "Hello World"}}
