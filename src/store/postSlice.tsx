import {createSlice} from '@reduxjs/toolkit';
import {PostData,PostDataItem} from '../data/postData';
import { RootState } from './store';

const initialState = {
  postData: PostData,
  selectedPost: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setSelectedPost: (state: RootState, action) => {
      state.selectedPost = state.postData.find(
        (item: PostDataItem) => item.postId === action.payload,
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

    setNewPost: (state, action) => {
      const newPost = {
        userId: 1,
        postId: state.postData.length + 1,
        post: {
          postImage: action.payload,
          likes: 0,
          isLiked: false,
          isBookmarked: false,
          comments: [],
        },
      };
      state.postData.push(newPost);
    },

    setNewComment: (state, action) => {
      const selectedPostIndex = state.postData.findIndex(
        item => item.postId === action.payload.postId,
      );

      const comments = state.postData[selectedPostIndex].post.comments;
      const newComment = {
        commentId: comments.length + 1,
        userId: 1,
        comment: action.payload.comment,
        likes: 0,
        isLiked: false,
      };

      comments.push(newComment);
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
