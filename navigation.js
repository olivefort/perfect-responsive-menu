const toggleMenu = document.querySelector('.navigation button');
const menu = document.querySelector('.navigation ul');

toggleMenu.addEventListener('click', function() {
	const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
	toggleMenu.setAttribute('aria-expanded', !open);
	menu.hidden = !menu.hidden;
});

window.addEventListener('scroll', function (evt) {
    evt.preventDefault();    // cours toujours...
});
 
// solution full JS
function noScroll(evt) {
	var x = document.documentElement.scrollLeft;
    var y = document.documentElement.scrollTop;
    window.scrollTo(x, y);
}
 
// on bloque le scroll
window.addEventListener('scroll', noScroll);
 
// on débloque le scroll
window.removeEventListener('scroll', noScroll);