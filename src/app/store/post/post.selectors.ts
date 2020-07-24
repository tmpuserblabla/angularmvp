import { createSelector } from '@ngrx/store';
import { StatePost, Post } from './post.reducer';

export const selectPosts = (state: StatePost) => state.posts;

interface PropsSelectPostById {
    postId: number;
}

export const selectPostById = createSelector(
    selectPosts,
    (posts: Post[], { postId }: PropsSelectPostById) => posts.find(({ id }) => id === postId)
);
