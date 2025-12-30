const formHTML = `
    <form class="comment-form">
        <input type="text" placeholder="Your Name" required>
        <textarea placeholder="Write your message..." required></textarea>
        <button type="submit">Post Comment</button>
    </form>
`;

// Inject the form into all containers
document.querySelectorAll('.form-container').forEach(container => {
    container.innerHTML = formHTML;
});

// Handle submissions
document.addEventListener('submit', function (e) {
    if (e.target.classList.contains('comment-form')) {
        e.preventDefault();
        
        const form = e.target;
        const container = form.closest('.form-container');
        const postId = container.getAttribute('data-post-id');
        const name = form.querySelector('input').value;
        const message = form.querySelector('textarea').value;
        const display = document.getElementById(`comments-${postId}`);

        // Create comment element
        const commentDiv = document.createElement('div');
        commentDiv.style.borderBottom = "1px solid #eee";
        commentDiv.style.padding = "10px 0";
        commentDiv.innerHTML = `<strong>${name}</strong>: <p>${message}</p>`;
        
        display.appendChild(commentDiv);
        form.reset();
    }
});