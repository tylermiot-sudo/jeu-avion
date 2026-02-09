const plane = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 0,
    maxSpeed: 9,
    accel: 0.18,
    friction: 0.97,
    radius: 18,
    alive: true,

    update() {
        if (!this.alive) return;

        if (keys["ArrowLeft"]) this.angle -= 0.05;
        if (keys["ArrowRight"]) this.angle += 0.05;

        if (keys["ArrowUp"]) this.speed += this.accel;
        else this.speed *= this.friction;

        if (keys["ArrowDown"]) this.speed *= 0.9;

        this.speed = Math.min(this.speed, this.maxSpeed);

        this.x += Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }
};

function drawPlane(ctx, camera) {
    if (!plane.alive) return;

    ctx.save();
    ctx.translate(
        plane.x - camera.x + canvas.width / 2,
        plane.y - camera.y + canvas.height / 2
    );
    ctx.rotate(plane.angle);

    ctx.fillStyle = "#90a4ae";
    ctx.fillRect(-30, -5, 60, 10);

    ctx.fillStyle = "#cfd8dc";
    ctx.fillRect(-6, -22, 12, 44);

    ctx.beginPath();
    ctx.moveTo(-6, -22);
    ctx.lineTo(6, -22);
    ctx.lineTo(0, -38);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
}
