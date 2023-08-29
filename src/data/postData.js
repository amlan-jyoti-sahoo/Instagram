import Mountain from '../assets/images/Mountain.jpeg';
import delhi from '../assets/images/delhi.jpg';
import goa1 from '../assets/images/goa1.jpeg';
import goa2 from '../assets/images/goa2.jpeg';
import SnowMountain from '../assets/images/SnowMountain.jpeg';
import valley from '../assets/images/valley.jpeg';
import valley2 from '../assets/images/valley2.jpeg';

export const PostData = [
  {
    userId: 2,
    postId: 1,
    post: {
      postImage: Mountain,
      likes: 100,
      isLiked: true,
      isBookmarked: false,
      comments: [
        {
          commentId: 1,
          userId: 2,
          comment: 'awesome photo',
          likes: 25,
          isLiked: true,
        },
        {
          commentId: 2,
          userId: 5,
          comment: 'nice  photo bro',
          likes: 232,
          isLiked: false,
        },
        {
          commentId: 3,
          userId: 3,
          comment: 'I waana go that place.',
          likes: 304,
          isLiked: true,
        },
      ],
    },
  },
  {
    userId: 1,
    postId: 2,
    post: {
      postImage: delhi,
      likes: 100,
      isLiked: true,
      isBookmarked: false,
      comments: [
        {
          commentId: 1,
          userId: 2,
          comment: 'awesome photo',
          likes: 25,
          isLiked: true,
        },
        {
          commentId: 2,
          userId: 5,
          comment: 'nice  photo bro',
          likes: 232,
          isLiked: false,
        },
        {
          commentId: 3,
          userId: 3,
          comment: 'I waana go that place.',
          likes: 304,
          isLiked: true,
        },
      ],
    },
  },
  {
    userId: 3,
    postId: 3,
    post: {
      postImage: goa1,
      likes: 100,
      isLiked: true,
      isBookmarked: false,
      comments: [
        {
          commentId: 1,
          userId: 2,
          comment: 'awesome photo',
          likes: 25,
          isLiked: true,
        },
        {
          commentId: 2,
          userId: 5,
          comment: 'nice  photo bro',
          likes: 232,
          isLiked: false,
        },
        {
          commentId: 3,
          userId: 3,
          comment: 'I waana go that place.',
          likes: 304,
          isLiked: true,
        },
      ],
    },
  },
  {
    userId: 5,
    postId: 4,
    post: {
      postImage: goa2,
      likes: 100,
      isLiked: true,
      isBookmarked: false,
      comments: [
        {
          commentId: 1,
          userId: 2,
          comment: 'awesome photo',
          likes: 25,
          isLiked: true,
        },
        {
          commentId: 2,
          userId: 5,
          comment: 'nice  photo bro',
          likes: 232,
          isLiked: false,
        },
        {
          commentId: 3,
          userId: 3,
          comment: 'I waana go that place.',
          likes: 304,
          isLiked: true,
        },
      ],
    },
  },
  {
    userId: 1,
    postId: 5,
    post: {
      postImage: SnowMountain,
      likes: 132,
      isLiked: false,
      isBookmarked: false,
      comments: [
        {
          commentId: 1,
          userId: 2,
          comment: 'awesome photo',
          likes: 25,
          isLiked: true,
        },
        {
          commentId: 2,
          userId: 5,
          comment: 'nice  photo bro',
          likes: 232,
          isLiked: false,
        },
        {
          commentId: 3,
          userId: 3,
          comment: 'I waana go that place.',
          likes: 304,
          isLiked: true,
        },
      ],
    },
  },
  {
    userId: 1,
    postId: 6,
    post: {
      postImage: valley,
      likes: 354,
      isLiked: false,
      isBookmarked: false,
      comments: [
        {
          commentId: 1,
          userId: 2,
          comment: 'awesome photo',
          likes: 25,
          isLiked: true,
        },
        {
          commentId: 2,
          userId: 5,
          comment: 'nice  photo bro',
          likes: 232,
          isLiked: false,
        },
        {
          commentId: 3,
          userId: 3,
          comment: 'I waana go that place.',
          likes: 304,
          isLiked: true,
        },
      ],
    },
  },
  {
    userId: 1,
    postId: 7,
    post: {
      postImage: valley2,
      likes: 523,
      isLiked: false,
      isBookmarked: false,
      comments: [
        {
          commentId: 1,
          userId: 2,
          comment: 'awesome photo',
          likes: 25,
          isLiked: true,
        },
        {
          commentId: 2,
          userId: 5,
          comment: 'nice  photo bro',
          likes: 232,
          isLiked: false,
        },
        {
          commentId: 3,
          userId: 3,
          comment: 'I waana go that place.',
          likes: 304,
          isLiked: true,
        },
      ],
    },
  },
];
