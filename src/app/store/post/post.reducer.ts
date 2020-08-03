import { createReducer, on } from '@ngrx/store';
import { loadPostsSuccess, addPostByIdSuccess, setRatingOfPostSuccess } from './post.actions';


export const postFeatureKey = 'post';

export interface Post {
  id: number;
  title: string;
  body: string;
  stars?: number;
}

export interface RatingOfPost {
  stars: number;
  postId: number;
}

export interface StatePost {
  posts: Post[];
  ratingOfPosts: RatingOfPost[];
}

export const initialState: StatePost = {
  posts: [],
  ratingOfPosts: []
};


export const postReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, { data }) => {
    return {
      ...state,
      posts: data
    };
  }),
  on(addPostByIdSuccess, (state, { post }) => {
    return {
      ...state,
      posts: [...state.posts, post]
    };
  }),
  on(setRatingOfPostSuccess, (state, { postId, stars }) => {
    if (state.ratingOfPosts.some((rating) => rating.postId === postId)) {
      return {
        ...state,
        ratingOfPosts: state.ratingOfPosts.map((rating) => {
          if (rating.postId === postId) {
            return {
              postId,
              stars
            };
          }

          return rating;
        })
      };
    }

    return {
      ...state,
      ratingOfPosts: [...state.ratingOfPosts, {
        stars,
        postId
      }]
    };
  }),
);

