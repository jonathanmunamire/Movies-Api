import displayLikes from './displayLikes.js';

const postLike = async (movieID) => {
  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvgYXeRHqKK3VQP7d7fw/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: movieID,
      }),
    });
    return null;
  } catch (err) {
    return err;
  }
};

const getLikes = async () => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvgYXeRHqKK3VQP7d7fw/likes');
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

getLikes().then((response) => displayLikes(response));

export { postLike, getLikes };