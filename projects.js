    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Open modal when project card is clicked
    projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

    // Close modal when close button is clicked
    closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none';
    });
});

    // Close modal when clicking outside the content
    window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
}
});
