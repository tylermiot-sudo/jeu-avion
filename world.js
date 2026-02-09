const WORLD = 6000;
const buildings = [];

for (let i = 0; i < 250; i++) {
    buildings.push({
        x: Math.random() * WORLD - WORLD/2,
        y: Math.random() * WORLD - WORLD/2,
        w: 40 + Math.random() * 40,
        h: 40 + Math.random() * 40,
        height: 30 + Math.random() * 90
    });
}

function drawWorld(ctx, camera) {
    buildings.forEach(b => {
        const x = b.x - camera.x + canvas.width/2;
        const y = b.y - camera.y + canvas.height/2;
        const d = b.height * 0.6;

        ctx.fillStyle = "#9e9e9e";
        ctx.fillRect(x, y, b.w, b.h);

        ctx.fillStyle = "#bdbdbd";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + b.w, y);
        ctx.lineTo(x + b.w - d, y - d);
        ctx.lineTo(x - d, y - d);
        ctx.closePath();
        ctx.fill();
    });
}
