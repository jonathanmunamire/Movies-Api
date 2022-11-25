const movieCount = () => {
  const items = document.querySelector('#movies');
  const itemCount = items.children.length;
  return itemCount;
};

export default movieCount;