const camera = {
    x: 0,
    y: 0,
    update() {
        this.x += (plane.x - this.x) * 0.08;
        this.y += (plane.y - this.y) * 0.08;
    }
};
