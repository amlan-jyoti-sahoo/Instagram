import {createSlice} from '@reduxjs/toolkit';
import {reelData, ReelDataItem} from '../data/reelData';
import { RootState } from './store';

const initialState = {
  reelData: reelData,
  selectedReel: null,
};

export const reelSlice = createSlice({
  name: 'reel',
  initialState,
  reducers: {
    setSelectedReel: (state: RootState, action) => {
      state.selectedReel = state.reelData.find(
        (item: ReelDataItem) => item.reelId === action.payload,
      );
    },
    setLike: (state, action) => {
      const selectedReelIndex = state.reelData.findIndex(
        item => item.reelId === action.payload,
      );
      const reel = state.reelData[selectedReelIndex];
      reel.reel.isLiked = !reel.reel.isLiked;
      {
        reel.reel.isLiked ? reel.reel.likes++ : reel.reel.likes--;
      }
    },
    setBookMark: (state, action) => {
      const selectedReelIndex = state.reelData.findIndex(
        item => item.reelId === action.payload,
      );
      const selectedReel = state.reelData[selectedReelIndex];
      selectedReel.reel.isBookmarked = !selectedReel.reel.isBookmarked;
    },
  },
});
