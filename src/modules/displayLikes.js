const displayLikes = (likesData) => {
  likesData.forEach((like) => {
    const likes = document.querySelectorAll('.likeCount');
    likes.forEach((movie) => {
      if (like.item_id === movie.id) {
        movie.textContent = like.likes;
      }
    });
  });
};

export default displayLikes;
