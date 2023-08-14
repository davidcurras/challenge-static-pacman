// HTML Elements
var pacman;
var ghost;
var cookie;
// Boundaries
var pacmanLeft;
var pacmanRight;
var pacmanTop;
var pacmanBottom;
var ghostLeft;
var ghostRight;
var ghostTop;
var ghostBottom;
var cookieLeft;
var cookieRight;
var cookieTop;
var cookieBottom;

var checkPacmanGhost = function() {
    // Check Sides
    var checkPacmanRight = pacmanRight > ghostLeft && pacmanRight < ghostRight;
    var checkPacmanBottom = pacmanBottom > ghostTop && pacmanBottom < ghostBottom;
    var checkPacmanLeft = pacmanLeft < ghostRight && pacmanLeft > ghostLeft;
    var checkPacmanTop = pacmanTop < ghostBottom && pacmanTop > ghostTop;
    // Check Corners
    var checkPacmanRightBottomCorner = checkPacmanRight && checkPacmanBottom;
    var checkPacmanLeftBottomCorner = checkPacmanLeft && checkPacmanBottom;
    var checkPacmanRightTopCorner = checkPacmanRight && checkPacmanTop;
    var checkPacmanLeftTopCorner = checkPacmanLeft && checkPacmanTop;
    // Check Collision Pacman/Ghost
    return checkPacmanRightBottomCorner ||
        checkPacmanLeftBottomCorner ||
        checkPacmanRightTopCorner ||
        checkPacmanLeftTopCorner;
};

var checkPacmanCookie = function() {
    // Check Sides
    var checkPacmanRight = pacmanRight > cookieLeft && pacmanRight < cookieRight;
    var checkPacmanBottom = pacmanBottom > cookieTop && pacmanBottom < cookieBottom;
    var checkPacmanLeft = pacmanLeft < cookieRight && pacmanLeft > cookieLeft;
    var checkPacmanTop = pacmanTop < cookieBottom && pacmanTop > cookieTop;
    // Check Corners
    var checkPacmanRightBottomCorner = checkPacmanRight && checkPacmanBottom;
    var checkPacmanLeftBottomCorner = checkPacmanLeft && checkPacmanBottom;
    var checkPacmanRightTopCorner = checkPacmanRight && checkPacmanTop;
    var checkPacmanLeftTopCorner = checkPacmanLeft && checkPacmanTop;
    // Check Collision Pacman/Cookie
    return checkPacmanRightBottomCorner ||
        checkPacmanLeftBottomCorner ||
        checkPacmanRightTopCorner ||
        checkPacmanLeftTopCorner;
};

var checkCollision = function() {
    console.log('pacman', pacmanLeft, pacmanRight, pacmanTop, pacmanBottom);
    if(checkPacmanGhost()) alert('Oops! Game over :(');
    if(checkPacmanCookie()) alert('Yay! You win! :D');
};

var movePacman = function(direction, step) {
    var position = pacman['offset'+direction];
    var newPosition = position + step;
    pacman.style[direction.toLowerCase()] = newPosition+'px';
    //Update Pacman box boundaries
    pacmanLeft = pacman.offsetLeft;
    pacmanRight = pacmanLeft + pacman.clientWidth;
    pacmanTop = pacman.offsetTop;
    pacmanBottom = pacmanTop + pacman.clientHeight;
    checkCollision();
};

var move = function(evt) {
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
    if (evt.isComposing || evt.keyCode === 229) return;
    switch(evt.code) {
        case 'ArrowRight': movePacman('Left', 3); break;
        case 'ArrowLeft': movePacman('Left', -3); break;
        case 'ArrowDown': movePacman('Top', 3); break;
        case 'ArrowUp': movePacman('Top', -3); break;
    }
};

var initBoxBoundaries = function() {
    // @see https://thisthat.dev/client-height-vs-offset-height-vs-scroll-height
    //Pacman box boundaries
    pacmanLeft = pacman.offsetLeft;
    pacmanRight = pacmanLeft + pacman.clientWidth;
    pacmanTop = pacman.offsetTop;
    pacmanBottom = pacmanTop + pacman.clientHeight;
    //Ghost box boundaries
    ghostLeft = ghost.offsetLeft;
    ghostRight = ghostLeft + ghost.clientWidth;
    ghostTop = ghost.offsetTop;
    ghostBottom = ghostTop + ghost.clientHeight;
    //Cookie box boundaries
    cookieLeft = cookie.offsetLeft;
    cookieRight = cookieLeft + cookie.clientWidth;
    cookieTop = cookie.offsetTop;
    cookieBottom = cookieTop + cookie.clientHeight;
};

var init = function() {
    pacman = document.getElementById('pacman');
    ghost = document.getElementById('ghost');
    cookie = document.getElementById('cookie');
    document.addEventListener('keydown', move);
    initBoxBoundaries();
};

window.addEventListener('DOMContentLoaded', init);