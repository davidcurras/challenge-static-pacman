// HTML Elements
var ghost = {
    element: null,
    width: 60,
    height: 60,
    position: {},
    init: function() {
        this.element = document.getElementById('ghost');
        // @see https://thisthat.dev/client-height-vs-offset-height-vs-scroll-height
        this.position.left = this.element.offsetLeft;
        this.position.right = this.position.left + this.width;
        this.position.top = this.element.offsetTop;
        this.position.bottom = this.position.top + this.height;
    }
};

var cookie = {
    element: null,
    width: 30,
    height: 30,
    position: {},
    init: function() {
        this.element = document.getElementById('cookie');
        // @see https://thisthat.dev/client-height-vs-offset-height-vs-scroll-height
        this.position.left = this.element.offsetLeft;
        this.position.right = this.position.left + this.width;
        this.position.top = this.element.offsetTop;
        this.position.bottom = this.position.top + this.height;
    }
};

var pacman = {
    element: null,
    width: 60,
    height: 60,
    step: 10,
    position: {},
    init: function() {
        this.element = document.getElementById('pacman');
        // @see https://thisthat.dev/client-height-vs-offset-height-vs-scroll-height
        this.position.left = this.element.offsetLeft;
        this.position.right = this.position.left + this.width;
        this.position.top = this.element.offsetTop;
        this.position.bottom = this.position.top + this.height;
    },
    updateBoxBoundaries: function() {
        this.position.right = this.position.left + this.width;
        this.position.bottom = this.position.top + this.height;
    },
    move: function(evt) {
        var orientation = 'left';
        var direction = 1;
        switch(evt.code) {
            case 'ArrowDown': orientation = 'top'; break;
            case 'ArrowLeft': direction = -1; break;
            case 'ArrowUp':
                orientation = 'top';
                direction = -1;
                break;
        }
        this.position[orientation] += this.step * direction;
        this.element.style[orientation] = this.position[orientation]+'px';
        this.updateBoxBoundaries();
        this.checkCollision(cookie, this.win);
        this.checkCollision(ghost, this.lose);
    },
    checkCollision: function(obj, action) {
        var p = pacman.position;
        // Check Sides
        var right = p.right > obj.position.left && p.right < obj.position.right;
        var bottom = p.bottom > obj.position.top && p.bottom < obj.position.bottom;
        var left = p.left < obj.position.right && p.left > obj.position.left;
        var top = p.top < obj.position.bottom && p.top > obj.position.top;
        // Check Corners
        var rbCorner = right && bottom;
        var lbCorner = left && bottom;
        var rtCorner = right && top;
        var ltCorner = left && top;
        // Check Collision Pacman/Object
        if(rbCorner || lbCorner || rtCorner || ltCorner) {
            return action();
        }
        return false;
    },
    win: function() {
        alert('Yay! You win! :D');
    },
    lose: function() {
        alert('Oops! Game over :(');
    }
};

var init = function() {
    pacman.init();
    ghost.init();
    cookie.init();
    document.addEventListener('keydown', pacman.move.bind(pacman));
};

window.addEventListener('DOMContentLoaded', init);