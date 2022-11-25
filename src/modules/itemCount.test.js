/**
 * @jest-environment jsdom
 */

import movieCount from './__mocks__/itemCount.js';

describe('Test for Items', () => {
  test('Number of Movies should be 6', () => {
    document.body.innerHTML = `
      <div id="movies">
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
      </div>
      `;
    expect(movieCount()).toBe(6);
  });

  test('Number of Movies should be 10', () => {
    document.body.innerHTML = `
      <div id="movies">
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
        <div class=card></div>
      </div>
      `;
    expect(movieCount()).toBe(10);
  });
});
