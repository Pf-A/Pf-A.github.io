// --- CONFIGURATION ---
const config = {
    floorHeight: 30,
    player: {
        x: 50,
        width: 30,
        height: 30,
        speed: 5,
        gravity: 0.5,
        jumpStrength: 15
    },
    box: {
        count: 15,
        width: 60,
        height: 20
    },
    enemy: {
        width: 30,
        height: 30,
        speed: 2,
        spawnInterval: 2000
    },
    laserFireRate: 10, // ms
    crosshairSize: 10
};
// --- END CONFIGURATION ---
function loadedMainJs() {
  console.log('Loaded Main.js');
}
  

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game variables
let player = {
    x: config.player.x,
    y: canvas.height - config.floorHeight - config.player.height,
    width: config.player.width,
    height: config.player.height,
    speed: config.player.speed,
    gravity: config.player.gravity,
    jumpStrength: config.player.jumpStrength,
    velocityY: 0,
    onGround: false
};

let enemies = [];
let enemyCount = 0;
let defeatedCount = 0;
let level = 1;
let enemySpeed = config.enemy.speed;
let enemySpawnInterval = config.enemy.spawnInterval;
let gameStarted = false;
let gameOver = false;

let crosshair = { x: canvas.width / 2, y: canvas.height / 2, size: config.crosshairSize };
let boxes = [];
let shootingInterval;
let laserActive = false;

// Initialize boxes using config
for (let i = 0; i < config.box.count; i++) {
    boxes.push({
        x: Math.random() * (canvas.width - config.box.width),
        y: canvas.height - config.floorHeight - config.box.height,
        width: config.box.width,
        height: config.box.height
    });
}

// --- GAME LOGIC ---

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawEnemies() {
    ctx.fillStyle = 'red';
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

function drawBoxes() {
    ctx.fillStyle = 'brown';
    boxes.forEach(box => {
        ctx.fillRect(box.x, box.y, box.width, box.height);
    });
}

function drawCrosshair() {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(crosshair.x - crosshair.size, crosshair.y);
    ctx.lineTo(crosshair.x + crosshair.size, crosshair.y);
    ctx.moveTo(crosshair.x, crosshair.y - crosshair.size);
    ctx.lineTo(crosshair.x, crosshair.y + crosshair.size);
    ctx.stroke();
}

function drawFloor() {
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, canvas.height - config.floorHeight, canvas.width, config.floorHeight);
}

function spawnEnemy() {
    enemies.push({
        x: Math.random() * (canvas.width - config.enemy.width),
        y: canvas.height - config.floorHeight - config.enemy.height,
        width: config.enemy.width,
        height: config.enemy.height,
        speed: enemySpeed
    });
    enemyCount++;
}

function updatePlayer() {
    player.velocityY += player.gravity;
    player.y += player.velocityY;

    // Floor collision
    if (player.y + player.height >= canvas.height - config.floorHeight) {
        player.y = canvas.height - config.floorHeight - player.height;
        player.velocityY = 0;
        player.onGround = true;
    } else {
        player.onGround = false;
    }
}

function updateEnemies() {
    enemies.forEach(enemy => {
        enemy.x += (player.x < enemy.x ? -1 : 1) * enemy.speed;
    });
}

function checkCollisions() {
    enemies.forEach((enemy, i) => {
        if (
            player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y
        ) {
            gameOver = true;
        }
    });
}

function shootLaser() {
    if (!laserActive) return;
    // Remove enemy if crosshair is over it
    enemies = enemies.filter(enemy => {
        const hit = (
            crosshair.x > enemy.x &&
            crosshair.x < enemy.x + enemy.width &&
            crosshair.y > enemy.y &&
            crosshair.y < enemy.y + enemy.height
        );
        if (hit) defeatedCount++;
        return !hit;
    });
}

function gameLoop() {
    if (!gameStarted || gameOver) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawFloor();
    drawBoxes();
    drawPlayer();
    drawEnemies();
    drawCrosshair();

    updatePlayer();
    updateEnemies();
    checkCollisions();

    requestAnimationFrame(gameLoop);
}

function startGame() {
    gameStarted = true;
    gameOver = false;
    enemies = [];
    enemyCount = 0;
    defeatedCount = 0;
    level = 1;
    enemySpeed = config.enemy.speed;
    enemySpawnInterval = config.enemy.spawnInterval;
    player.x = config.player.x;
    player.y = canvas.height - config.floorHeight - config.player.height;
    player.velocityY = 0;
    player.onGround = false;
    spawnEnemy();
    setInterval(spawnEnemy, enemySpawnInterval);
    gameLoop();
}

// --- INPUT HANDLING ---
document.addEventListener('keydown', e => {
    if (e.code === 'ArrowLeft') player.x -= player.speed;
    if (e.code === 'ArrowRight') player.x += player.speed;
    if (e.code === 'Space' && player.onGround) {
        player.velocityY = -player.jumpStrength;
        player.onGround = false;
    }
    if (e.code === 'Enter' && !gameStarted) startGame();
});

canvas.addEventListener('mousemove', e => {
    crosshair.x = e.clientX;
    crosshair.y = e.clientY;
});

canvas.addEventListener('mousedown', () => {
    laserActive = true;
    shootingInterval = setInterval(shootLaser, config.laserFireRate);
});

canvas.addEventListener('mouseup', () => {
    laserActive = false;
    clearInterval(shootingInterval);
});
