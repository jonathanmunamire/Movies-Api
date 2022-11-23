const postComment = async (itemId) =>{
    const nameInput = document.querySelector('.name-input');
    const commentInput = document.querySelector('.comment-input');

    const API_KEY = "OQzrUx0TOY2CTkVMSpNy"
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments`

    await fetch(url, 
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            item_id: itemId, 
            username: nameInput.value, 
            comment: commentInput.value })
    }).then((res) => res.json())
    .then((data) => data)
    .catch((error) => new Error(error)); 
};

export {postComment};

