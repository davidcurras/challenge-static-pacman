var init = function() {
    pacman.init();
    ghost.init();
    cookie.init();
    document.addEventListener('keydown', pacman.move.bind(pacman));
};

window.addEventListener('DOMContentLoaded', init);