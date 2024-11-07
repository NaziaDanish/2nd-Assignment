function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
    const topButton = document.querySelector('.top-btn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.classList.add('show'); // Show button when scrolling down
    } else {
        topButton.classList.remove('show'); // Hide button when at the top
    }
};
