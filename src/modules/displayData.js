const movies = document.getElementById('movies');

const display = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

const createMovie = async () => {
  const response = await display();
  response.forEach((movie) => {
    const divEl = document.createElement('div');
    divEl.classList.add('card');
    const imgEl = document.createElement('img');
    imgEl.classList.add('movie-image');
    imgEl.setAttribute('src', `${movie.image.original}`);
    imgEl.setAttribute('alt', 'movie image');
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie-details');
    const h4El = document.createElement('h4');
    h4El.textContent = `${movie.name}`;
    const iconEl = document.createElement('p');
    iconEl.innerHTML = '<i class="fa-regular fa-heart"></i> 1 Like';
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.innerText = 'Comment';
    movieEl.append(iconEl, commentBtn);
    divEl.append(imgEl, h4El, movieEl);
    movies.append(divEl);
  });
};

export { display, createMovie };