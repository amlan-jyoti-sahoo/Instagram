import {createSlice} from '@reduxjs/toolkit';
import {PostData} from '../data/postData';

const initialState = {
  postData: PostData,
  selectedPost: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = state.postData.find(
        item => item.post.postId === action.payload,
      );
    },
    setLike: (state, action) => {
      const selectedPostIndex = state.postData.findIndex(
        item => item.post.postId === action.payload,
      );
      const post = state.postData[selectedPostIndex];
      post.post.isLiked = !post.post.isLiked;
      {
        post.post.isLiked ? post.post.likes++ : post.post.likes--;
      }
    },
    setBookMark: (state, action) => {
      const selectedPostIndex = state.postData.findIndex(
        item => item.post.postId === action.payload,
      );
      const selectedPost = state.postData[selectedPostIndex];
      selectedPost.post.isBookmarked = !selectedPost.post.isBookmarked;
    },
  },
});
