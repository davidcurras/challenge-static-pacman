var cookie = {
    element: null,
    width: 30,
    height: 30,
    position: {},
    init: function() {
        this.element = document.getElementById('cookie');
        // @see https://thisthat.dev/client-height-vs-offset-height-vs-scroll-height
        this.position.left = this.element.offsetLeft;
        this.position.top = this.element.offsetTop;
        this.updateCenter();
    },
    updateCenter: function() {
        this.position.centerX = this.position.left + (this.width / 2);
        this.position.centerY = this.position.top + (this.height / 2);
    }
};