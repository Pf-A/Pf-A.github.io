/*
        Simple Open World Snake Game Script
        - Uses the #game canvas
        - Arrow keys to move
        - Snake can move beyond the visible area (open world)
        - No boundaries, world wraps around
        - Food spawns randomly in a larger world
    */

    const worldSize = 2000; // Open world size (pixels)
    const tileSize = 20;
    let snake = [{x: 1000, y: 1000}];
    let direction = {x: 1, y: 0};
    let food = {x: 0, y: 0};
    let snakeLength = 5;
    let camera = {x: 0, y: 0};
    let openWorldActive = false;

    //function showOpenWorld() {
    function showOpenWorld() {
            openWorldActive = true;
            // Hide editor if open
            document.getElementById('editor').style.display = 'none';
            // Show game canvas
            document.getElementById('game').style.display = 'block';
            // Reset snake and food
            snake = [{x: 1000, y: 1000}];
            direction = {x: 1, y: 0};
            snakeLength = 5;
            placeFood();
            requestAnimationFrame(openWorldLoop);
    }
    function placeFood() {
    function openWorldLoop() {
            if (!openWorldActive) return;
            updateSnake();
            drawOpenWorld();
            setTimeout(() => requestAnimationFrame(openWorldLoop), 1000 / 15); // 15 FPS
    }
            updateSnake();
            drawOpenWorld();
            setTimeout(() => requestAnimationFrame(openWorldLoop), 100);
    }

    function updateSnake() {
            const head = {
                    x: (snake[0].x + direction.x * tileSize + worldSize) % worldSize,
                    y: (snake[0].y + direction.y * tileSize + worldSize) % worldSize
            };
            snake.unshift(head);
            if (head.x === food.x && head.y === food.y) {
                    snakeLength++;
                    placeFood();
            }
            while (snake.length > snakeLength) snake.pop();
            // Self collision
            for (let i = 1; i < snake.length; i++) {
                    if (snake[i].x === head.x && snake[i].y === head.y) {
                            openWorldActive = false;
                            alert('Game Over!');
                            break;
                    }
            }
            // Camera follows snake head
            camera.x = head.x - 200;
            camera.y = head.y - 200;
    }

    function drawOpenWorld() {
            const canvas = document.getElementById('game');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 400, 400);
            // Draw food
            ctx.fillStyle = 'red';
            ctx.fillRect(food.x - camera.x, food.y - camera.y, tileSize, tileSize);
            // Draw snake
            ctx.fillStyle = 'lime';
            for (let part of snake) {
    document.addEventListener('keydown', function(e) {
            if (!openWorldActive) return;
            if (e.key === 'ArrowUp' && direction.y !== 1) direction = {x: 0, y: -1};
            else if (e.key === 'ArrowDown' && direction.y !== -1) direction = {x: 0, y: 1};
            else if (e.key === 'ArrowLeft' && direction.x !== 1) direction = {x: -1, y: 0};
            else if (e.key === 'ArrowRight' && direction.x !== -1) direction = {x: 1, y: 0};
            else if (e.key === 'Escape') {
                openWorldActive = false;
                // Optionally clear the canvas
                const canvas = document.getElementById('game');
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, 400, 400);
            }
    });
            else if (e.key === 'ArrowDown' && direction.y !== -1) direction = {x: 0, y: 1};
            else if (e.key === 'ArrowLeft' && direction.x !== 1) direction = {x: -1, y: 0};
            else if (e.key === 'ArrowRight' && direction.x !== -1) direction = {x: 1, y: 0};
    });
