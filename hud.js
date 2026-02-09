const hud = document.getElementById("hud");

function updateHUD() {
    hud.innerHTML = `
<b>Vitesse</b> : ${plane.speed.toFixed(1)}<br>
<b>État</b> : ${plane.alive ? "✈️ EN VOL" : "💥 CRASH"}<br><br>
⬆️ Accélérer<br>
⬇️ Freiner<br>
⬅️ ➡️ Tourner<br>
Espace Tir
`;
}
