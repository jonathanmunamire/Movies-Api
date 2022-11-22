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

    commentBtn.addEventListener('click', () => {
      const popupWindow = document.querySelector('.popup-window');
      popupWindow.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      popupWindow.innerHTML = `<i class="fa-solid fa-xmark fa-2x cancel-button"></i>
      <div class="information-section">
        <img
          src="${movie.image.original}"
          alt="movie-image"
          class="popup-image"
        />
        <h2>${movie.name}</h2>
        <div class="about-movie">
          <p>language: ${movie.language}</p>
          <p>Genre: ${movie.genres}</p>
          <p>${movie.summary}</p>
          <p>You can watch the movie by clicking <a href="${movie.url}" class="movie-link">here</a></p>
        </div>
      </div>
      <div class="comments-section">
        <h3>Comments</h3>
        <p>Jonathan : A Wonderful Movie</p>
        <p>Joshua : Well Performed</p>
      </div>
      <div class="form-section">
        <h3>Add a Comment</h3>
        <input type="text" class="name-input" placeholder="Your Name" />
        <input
          type="text"
          class="comment-input"
          placeholder="Your Insights"
        />
        <button class="comment-button">Add</button>
      </div>`;

      const cancel = document.querySelector('.cancel-button');
      cancel.addEventListener('click', () => {
        const popupWindow = document.querySelector('.popup-window');
        popupWindow.style.display = 'none';
        document.body.style.overflow = 'initial';
      });
    });
  });
};

export { display, createMovie };