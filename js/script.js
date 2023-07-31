var pacman;
var ghost;
var cookie;

var movePacman = function (evt) {
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
    if (evt.isComposing || evt.keyCode === 229) return;
    // @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/which
    console.log(evt.key, evt.code, evt.which);
};

var init = function() {
    pacman = document.getElementById('pacman');
    ghost = document.getElementById('ghost');
    cookie = document.getElementById('cookie');
    document.addEventListener('keydown', movePacman);
};

window.addEventListener('DOMContentLoaded', init);