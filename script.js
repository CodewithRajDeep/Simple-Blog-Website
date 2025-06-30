let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

//main header onclick
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

//searchIcon onclick toggle
searchIcon.onclick = () => {
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}
document.querySelectorAll('.comment-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const input = document.querySelectorAll('.comment-input')[index];
        const commentList = document.querySelectorAll('.comment-list')[index];
        const commentText = input.value.trim();

        if (commentText !== '') {
            const comment = document.createElement('p');
            comment.textContent = commentText;
            comment.classList.add('comment');
            commentList.appendChild(comment);
            input.value = '';
        }
    });
});


document.querySelectorAll('.clickable-post').forEach(img => {
    img.addEventListener('click', () => {
        const postId = img.dataset.post;
        alert("Open full post for ID: " + postId);
    });
});