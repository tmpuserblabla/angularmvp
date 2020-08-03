import { createSelector } from '@ngrx/store';
import { StatePost, Post } from './post.reducer';

export const selectPosts = (state: StatePost) => state.posts;
export const selectPostsAsc = (state: StatePost) => [...state.posts].sort((a, b) => {
    return b.id - a.id;
});

export const selectPostsDesc = (state: StatePost) => [...state.posts].sort((a, b) => {
    return a.id - b.id;
});


interface PropsSelectPostById {
    postId: number;
}

export const selectPostById = createSelector(
    selectPosts,
    (posts: Post[], { postId }: PropsSelectPostById) => posts.find(({ id }) => id === postId)
);
