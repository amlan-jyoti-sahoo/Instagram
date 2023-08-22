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
    setLike: (state, action) => {
      const selectedPostIndex = state.postData.findIndex(
        item => item.post.postId === action.payload,
      );
      const selectedPost = state.postData[selectedPostIndex];
      selectedPost.post.isLiked = !selectedPost.post.isLiked;
      {
        selectedPost.post.isLiked
          ? selectedPost.post.likes++
          : selectedPost.post.likes--;
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
