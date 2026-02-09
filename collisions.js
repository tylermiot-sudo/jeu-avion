function checkCollisions() {
    buildings.forEach(b => {
        const dx = plane.x - (b.x + b.w/2);
        const dy = plane.y - (b.y + b.h/2);
        if (Math.hypot(dx, dy) < plane.radius + b.w/2) {
            plane.alive = false;
            setTimeout(respawn, 1200);
        }
    });
}

function respawn() {
    plane.x = Math.random() * 500 - 250;
    plane.y = Math.random() * 500 - 250;
    plane.speed = 0;
    plane.angle = 0;
    plane.alive = true;
}
