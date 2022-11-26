import postComment from './addComment.js';
import fetchComment from './fetchComment.js';
import { postLike } from './postLike.js';

const movies = document.getElementById('movies');
const navBar = document.querySelector('.nav');
const movieCount = document.querySelector('.movieCount');

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
  const responses = await display();
  const response = responses.slice(79, 103);
  movieCount.innerHTML = `Movies(${response.length})`;
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
    iconEl.setAttribute('class', 'like');
    iconEl.innerHTML = '<i class="fa-regular fa-heart"></i>';
    const likeCount = document.createElement('p');
    likeCount.setAttribute('class', 'likeCount');
    likeCount.setAttribute('id', `${movie.name}`);
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.innerText = 'Comment';
    movieEl.append(likeCount, iconEl, commentBtn);
    divEl.append(imgEl, h4El, movieEl);
    movies.append(divEl);

    commentBtn.addEventListener('click', () => {
      const popupWindow = document.querySelector('.popup-window');
      popupWindow.style.display = 'flex';
      movies.style.filter = 'blur(6px)';
      navBar.style.filter = 'blur(6px)';
      movieCount.style.filter = 'blur(6px)';
      document.body.style.overflow = 'hidden';
      popupWindow.innerHTML = `<i class="fa-solid fa-xmark fa-2x cancel-button"></i>
      <div class="information-section">
        <img
          src="${movie.image.original}"
          alt="movie-image"
          class="popup-image"
        />
        <h2 class="popup-name">${movie.name}</h2>
        <div class="about-movie">
          <div class="popup-summary"><p>${movie.summary}</p></div>
          <div><p>Language: ${movie.language}</p>
          <p>Genre: ${(movie.genres).join(', ')}</p>
          <p>You can watch the movie by clicking <a href="${movie.url}" class="movie-link">here</a></p>
          </div>
        </div>
      </div>
      <div class="comments-section">
        <h3 class="comment-title">Comments</h3>
      </div>
      <div class="form-section">
        <h3 class="form-title">Add a Comment</h3>
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
        movies.style.filter = 'initial';
        navBar.style.filter = 'initial';
        movieCount.style.filter = 'initial';
        document.body.style.overflow = 'initial';
      });

      const submitButton = document.querySelector('.comment-button');
      submitButton.addEventListener('click', () => {
        const nameInput = document.querySelector('.name-input');
        const commentInput = document.querySelector('.comment-input');
        if (nameInput.value && commentInput.value) {
          postComment(movie.id);
          nameInput.value = '';
          commentInput.value = '';
          const popupWindow = document.querySelector('.popup-window');
          popupWindow.style.display = 'none';
          movies.style.filter = 'initial';
          navBar.style.filter = 'initial';
          movieCount.style.filter = 'initial';
          document.body.style.overflow = 'initial';
        }
      });
      fetchComment(movie.id);
    });
    iconEl.addEventListener('click', () => {
      postLike(`${movie.name}`);
      let likeNum = Number(likeCount.textContent);
      likeNum += 1;
      likeCount.textContent = String(likeNum);
    });
  });
};

const aboutPage = document.querySelector('.about-us');
const firstPage = document.querySelector('.first-us');
const actorsPage = document.querySelector('.actors');
const aboutLink = document.querySelector('.about-link');
const firstLink = document.querySelector('.first-link');
const actorsLink = document.querySelector('.actors-link');

// actorsPage.innerHTML = ``;

aboutPage.innerHTML = `<div class="about-body">
<h1 class="about-title">About Us</h1>
<p class="about-p">
  This project has been build by a group of two persons. If You want to
  know more about us, you can still reach out to us through the links
  below
</p>
<div class="about-information-section">
  <div class="jonathan-section">
    <h2>Jonathan Munamire</h2>
    <ul>
      <li>
        <a href="https://github.com/jonathanmunamire" target="_blank"
          ><i class="fa-brands fa-github fa-2x"></i
        ></a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jonathanmunamire/"
          target="_blank"
          ><i class="fa-brands fa-linkedin fa-2x"></i
        ></a>
      </li>
      <li>
        <a href="https://twitter.com/amanimunamire" target="_blank"
          ><i class="fa-brands fa-twitter fa-2x"></i
        ></a>
      </li>
      <li>
        <a href="mailto:jonathanmunamire@gmail.com"
          ><i class="fa-regular fa-envelope fa-2x"></i
        ></a>
      </li>
    </ul>
  </div>
  <div class="joshua-section">
    <h2>Joshua Tamunokuro</h2>
    <ul>
      <li>
        <a href="https://github.com/Tamunokuro" target="_blank"
          ><i class="fa-brands fa-github fa-2x"></i
        ></a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/joshua-blue-jack/"
          target="_blank"
          ><i class="fa-brands fa-linkedin fa-2x"></i
        ></a>
      </li>
      <li>
        <a href="https://twitter.com/tamuno____" target="_blank"
          ><i class="fa-brands fa-twitter fa-2x"></i
        ></a>
      </li>
      <li>
        <a href="mailto:tamunokrobluejack@gmail.com"
          ><i class="fa-regular fa-envelope fa-2x"></i
        ></a>
      </li>
    </ul>
  </div>
</div>
</div>
<footer class="footer">
<p>&copy; Copyright 2021 | Designed by Joshua and Jonathan</p>
</footer>`;

aboutPage.classList.add('hide');
actorsPage.classList.add('hide');

aboutLink.addEventListener('click', () => {
  aboutPage.classList.remove('hide');
  firstPage.classList.add('hide');
  actorsPage.classList.add('hide');
});

firstLink.addEventListener('click', () => {
  aboutPage.classList.add('hide');
  firstPage.classList.remove('hide');
  actorsPage.classList.add('hide');
});

actorsLink.addEventListener('click', () => {
  aboutPage.classList.add('hide');
  firstPage.classList.add('hide');
  actorsPage.classList.remove('hide');
});

export { display, createMovie };