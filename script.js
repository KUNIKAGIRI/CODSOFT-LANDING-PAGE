const hamburger = document.getElementById('hamburger');
const href = document.querySelector('.btn');

hamburger.addEventListener('click', function() {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        href.style.display = "none"
        crossIcon.style.display = "none"
    } else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        href.style.display = "block"
    }
});