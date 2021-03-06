import { createSelector } from '@ngrx/store';
import { StatePost, Post } from './post.reducer';

export const selectPosts = (state: StatePost) => state.posts.map((post) => {
    const rating = state.ratingOfPosts.find(({ postId }) => postId === post.id);
    if (!rating) {
        return post;
    }

    return {
        ...post,
        stars: rating.stars
    };
});

export const selectPostsAsc = createSelector(
    selectPosts,
    (posts: Post[]) => [...posts].sort((a, b) => {
        return b.id - a.id;
    })
);

export const selectPostsDesc = createSelector(
    selectPosts,
    (posts: Post[]) => [...posts].sort((a, b) => {
        return a.id - b.id;
    })
);


interface PropsSelectPostById {
    postId: number;
}

export const selectPostById = createSelector(
    selectPosts,
    (posts: Post[], { postId }: PropsSelectPostById) => posts.find(({ id }) => id === postId)
);
