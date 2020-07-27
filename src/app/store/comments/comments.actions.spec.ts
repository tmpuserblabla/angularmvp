import * as fromComments from './comments.actions';

describe('loadComments', () => {
  it('should return an action', () => {
    expect(fromComments.loadCommentsByPostId({ postId: 1})).toBe('[Comments] Load Comments By Post Id');
  });
});
