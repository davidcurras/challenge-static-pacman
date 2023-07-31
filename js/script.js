var pacman;
var ghost;
var cookie;

var move = function(direction, step) {
    var position = pacman['offset'+direction];
    var newPosition = position + step;
    pacman.style[direction.toLowerCase()] = newPosition+'px';
};

var movePacman = function(evt) {
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
    if (evt.isComposing || evt.keyCode === 229) return;
    switch(evt.code) {
        case 'ArrowRight': move('Left', 3); break;
        case 'ArrowLeft': move('Left', -3); break;
        case 'ArrowDown': move('Top', 3); break;
        case 'ArrowUp': move('Top', -3); break;
    }
};

var init = function() {
    pacman = document.getElementById('pacman');
    ghost = document.getElementById('ghost');
    cookie = document.getElementById('cookie');
    document.addEventListener('keydown', movePacman);
};

window.addEventListener('DOMContentLoaded', init);