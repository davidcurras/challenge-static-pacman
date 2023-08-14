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
        this.position.top = this.element.offsetTop;
        this.updateCenter();
    },
    updateCenter: function() {
        this.position.centerX = this.position.left + (this.width / 2);
        this.position.centerY = this.position.top + (this.height / 2);
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
        this.updateCenter();
        this.checkCollision(cookie, this.win);
        this.checkCollision(ghost, this.lose);
    },
    checkCollision: function(obj, action) {
        // @see http://cgp.wikidot.com/circle-to-circle-collision-detection
        var diffRadius = this.width/2 + obj.width/2;
        var diffX = this.position.centerX - obj.position.centerX;
        var diffY = this.position.centerY - obj.position.centerY;
        if (diffRadius > Math.sqrt((diffX * diffX) + (diffY * diffY))) {
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