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
        item => item.postId === action.payload,
      );
    },
    setLike: (state, action) => {
      const selectedPostIndex = state.postData.findIndex(
        item => item.postId === action.payload,
      );
      const post = state.postData[selectedPostIndex];
      post.post.isLiked = !post.post.isLiked;
      {
        post.post.isLiked ? post.post.likes++ : post.post.likes--;
      }
    },

    setBookMark: (state, action) => {
      const selectedPostIndex = state.postData.findIndex(
        item => item.postId === action.payload,
      );
      const selectedPost = state.postData[selectedPostIndex];
      selectedPost.post.isBookmarked = !selectedPost.post.isBookmarked;
    },
    setCommentLike: (state, action) => {
      const selectedPostIndex = state.postData.findIndex(
        item => item.postId === action.payload.postId,
      );

      const selectedCommentIndex = state.postData[
        selectedPostIndex
      ].post.comments.findIndex(
        item => item.commentId === action.payload.commentId,
      );

      const selectedComment =
        state.postData[selectedPostIndex].post.comments[selectedCommentIndex];
      selectedComment.isLiked = !selectedComment.isLiked;
      console.log('llksdjf', selectedComment.isLiked);
      {
        selectedComment.isLiked
          ? selectedComment.likes++
          : selectedComment.likes--;
      }
    },
  },
});
