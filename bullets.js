const bullets = [];

function shoot() {
    bullets.push({
        x: plane.x,
        y: plane.y,
        angle: plane.angle,
        speed: 12,
        life: 60
    });
}

addEventListener("keydown", e => {
    if (e.code === "Space" && plane.alive) shoot();
});

function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.x += Math.sin(b.angle) * b.speed;
        b.y -= Math.cos(b.angle) * b.speed;
        b.life--;
        if (b.life <= 0) bullets.splice(i, 1);
    }
}

function drawBullets(ctx, camera) {
    ctx.fillStyle = "yellow";
    bullets.forEach(b => {
        ctx.beginPath();
        ctx.arc(
            b.x - camera.x + canvas.width/2,
            b.y - camera.y + canvas.height/2,
            3, 0, Math.PI*2
        );
        ctx.fill();
    });
}
