document.addEventListener("DOMContentLoaded", function() {
    const aboutItems = document.querySelectorAll('.about-item');

    aboutItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Toggle the 'flip' class to flip the div
            this.classList.toggle('flip');

            // Get the text elements inside the div
            const frontText = this.querySelector('.front');
            const backText = this.querySelector('.back');

            // Toggle the visibility of front and back text
            frontText.style.display = frontText.style.display === 'none' ? 'flex' : 'none';
            backText.style.display = backText.style.display === 'flex' ? 'none' : 'flex';
        });
    });
});
