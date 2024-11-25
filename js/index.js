/*script de el scroll*/
const scrollButton = document.getElementById('scroll');
const scrollContainer = document.getElementById('scroll-container');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        scrollContainer.style.display = 'block';
    } else {
        scrollContainer.style.display = 'none';
    }
};

scrollButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
});


/*script de menu hamburguesa*/
function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('open');
}








