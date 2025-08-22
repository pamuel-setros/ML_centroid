const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('generatePoints');

const size = 400;
const axisMin = -10;
const axisMax = 10;

function toCanvas(x, y) {
    return [
        ((x - axisMin) / (axisMax - axisMin)) * size,
        size - ((y - axisMin) / (axisMax - axisMin)) * size
    ];
}

function drawAxis() {
    ctx.clearRect(0, 0, size, size);
    ctx.strokeStyle = "#aaa";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, size / 2);
    ctx.lineTo(size, size / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(size / 2, size);
    ctx.stroke();
}

function drawPoints(points) {
    ctx.fillStyle = "blue";
    points.forEach(([x, y]) => {
        const [cx, cy] = toCanvas(x, y);
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function drawCentroid(points) {
    if (points.length === 0) return;
    const x = points.reduce((a, p) => a + p[0], 0) / points.length;
    const y = points.reduce((a, p) => a + p[1], 0) / points.length;
    const [cx, cy] = toCanvas(x, y);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, 2 * Math.PI);
    ctx.fill();
}

function generatePoints() {
    const n = Math.floor(Math.random() * 3) + 2;
    const points = [];
    for (let i = 0; i < n; i++) {
        const x = Math.random() * (axisMax - axisMin) + axisMin;
        const y = Math.random() * (axisMax - axisMin) + axisMin;
        points.push([x, y]);
    }
    drawAxis();
    drawPoints(points);
    drawCentroid(points);
}

drawAxis();
btn.onclick = generatePoints;
