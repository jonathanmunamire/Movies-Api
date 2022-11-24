
import comments from './__mocks__/commentsCount.js';

const Array = [
  {
    username: 'Jonathan',
    comment: 'One of the best',
  },
  {
    username: 'Joshua',
    comment: 'Not that great',
  },
  {
    username: 'Gedeon',
    comment: 'Can not stop watching it',
  },
  {
    username: 'Gina',
    comment: 'Great Movie',
  },
  {
    username: 'Mancoba',
    comment: 'It is worth watching',
  },
  {
    username: 'James',
    comment: 'Amazing',
  },
];


describe('Test the number of comments on each movie', () => {
  test('Test the number of comments', () => {
    expect(comments(Array)).toBe(6);
  });
});
