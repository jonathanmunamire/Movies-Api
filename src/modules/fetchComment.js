const fetchComment = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OQzrUx0TOY2CTkVMSpNy/comments?item_id=${id}`;
  const commentSection = document.querySelector('.comments-section');
  const commentTitle = document.querySelector('.comment-title');

  await fetch(url,
    {
      method: 'GET',
    }).then((res) => res.json())
    .then((data) => {
      commentTitle.innerHTML = `Comments (${data.length})`;
      data.forEach((comment) => {
        commentSection.insertAdjacentHTML('beforeend', `<p>${comment.creation_date} - ${comment.username} : ${comment.comment}</p> <hr>`);
      });
    })
    .catch((error) => {
      Error(error);
      commentTitle.innerHTML = 'Comments (0)';
      commentSection.insertAdjacentHTML('beforeend', '<p>no comments to show</p>');
    });
};

export default fetchComment;
