// ...existing code...
const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('generatePoints');

const size = 400;
const axisMin = -10;
const axisMax = 10;

function toCanvas(x, y) {
    // Map (-10,10) to (0,400)
    return [
        ((x - axisMin) / (axisMax - axisMin)) * size,
        size - ((y - axisMin) / (axisMax - axisMin)) * size
    ];
}

function drawAxis() {
    ctx.clearRect(0, 0, size, size);
    ctx.strokeStyle = "#aaa";
    ctx.lineWidth = 1;
    // X axis
    ctx.beginPath();
    ctx.moveTo(0, size / 2);
    ctx.lineTo(size, size / 2);
    ctx.stroke();
    // Y axis
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
    const n = Math.floor(Math.random() * 3) + 2; // 2-4 points
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

function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = '#000';
    ctx.stroke();
}

function generateRandomPoints() {
    const numPoints = Math.floor(Math.random() * 3) + 2; // Generates between 2 and 4 points
    const points = [];

    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 20 - 10; // X range from -10 to 10
        const y = Math.random() * 20 - 10; // Y range from -10 to 10
        points.push({ x, y });
    }

    return points;
}

function calculateCentroid(points) {
    const sum = points.reduce((acc, point) => {
        acc.x += point.x;
        acc.y += point.y;
        return acc;
    }, { x: 0, y: 0 });

    return { x: sum.x / points.length, y: sum.y / points.length };
}

function renderPoints(points) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGraph();

    points.forEach(point => {
        const canvasX = (point.x + 10) * (canvas.width / 20);
        const canvasY = (10 - point.y) * (canvas.height / 20);
        ctx.fillStyle = '#00f';
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 5, 0, Math.PI * 2);
        ctx.fill();
    });

    const centroid = calculateCentroid(points);
    const centroidX = (centroid.x + 10) * (canvas.width / 20);
    const centroidY = (10 - centroid.y) * (canvas.height / 20);
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.arc(centroidX, centroidY, 7, 0, Math.PI * 2);
    ctx.fill();
}

generateButton.addEventListener('click', () => {
    const points = generateRandomPoints();
    renderPoints(points);
});

drawGraph();