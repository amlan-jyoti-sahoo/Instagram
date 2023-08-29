export interface Reel {
  video: number; // Assuming require returns a number
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

export interface ReelDataItem {
  userId: number;
  reelId: number;
  reel: Reel;
}

export const reelData: ReelDataItem[] = [
  {
    userId: 1,
    reelId: 1,

    reel: {
      video: require('../assets/videos/reel4.mp4'),
      likes: 234,
      isLiked: false,
      isBookmarked: false,
    },
  },
  {
    userId: 1,
    reelId: 2,

    reel: {
      video: require('../assets/videos/reel3.mp4'),
      likes: 453,
      isLiked: false,
      isBookmarked: false,
    },
  },
  {
    userId: 2,
    reelId: 3,

    reel: {
      video: require('../assets/videos/reel1.mp4'),
      likes: 353,
      isLiked: false,
      isBookmarked: false,
    },
  },
  {
    userId: 1,
    reelId: 4,

    reel: {
      video: require('../assets/videos/reel2.mp4'),
      likes: 643,
      isLiked: false,
      isBookmarked: false,
    },
  },
];
