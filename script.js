
function openSpecificPost(id) {
    const cards = document.querySelectorAll('.news-card');
    const hero = document.getElementById('heroImage');
    
    hero.style.display = 'none'; // Hide header image for focus
    cards.forEach(card => {
        if (card.id === id) {
            card.classList.add('active');
            card.style.display = 'block';
        } else {
            card.style.display = 'none'; // Hide other posts
        }
    });
}

function showAllPosts() {
    const cards = document.querySelectorAll('.news-card');
    const hero = document.getElementById('heroImage');
    
    hero.style.display = 'flex';
    cards.forEach(card => {
        card.classList.remove('active');
        card.style.display = 'block';
    });
}

function submitComment(event, id) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input').value;
    const msg = form.querySelector('textarea').value;
    const list = document.getElementById(`comments-list-${id}`);

    const comment = document.createElement('p');
    comment.style.background = "#eee";
    comment.style.padding = "10px";
    comment.style.borderRadius = "5px";
    comment.innerHTML = `<strong>${name}:</strong> ${msg}`;
    
    list.appendChild(comment);
    form.reset();
}