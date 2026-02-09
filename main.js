const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

function drawSky() {
    const g = ctx.createLinearGradient(0,0,0,canvas.height);
    g.addColorStop(0,"#6ec6ff");
    g.addColorStop(1,"#eaf8ff");
    ctx.fillStyle = g;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function loop() {
    drawSky();
    plane.update();
    camera.update();
    updateBullets();
    drawWorld(ctx, camera);
    drawBullets(ctx, camera);
    drawPlane(ctx, camera);
    if (plane.alive) checkCollisions();
    updateHUD();
    requestAnimationFrame(loop);
}
loop();
