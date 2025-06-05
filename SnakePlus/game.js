        // --- Config ---
        const COLS = 20, ROWS = 20, CELL = 20;
        // --- Level Data ---
        let level = Array.from({length: ROWS}, () => Array(COLS).fill(0)); // 0=empty, 1=wall
        // --- Snake Game State ---
        let snake, dir, food, running, gameInterval;
        // --- DOM ---
        const gameCanvas = document.getElementById('game');
        const gameCtx = gameCanvas.getContext('2d');
        const editorCanvas = document.getElementById('editor');
        const editorCtx = editorCanvas.getContext('2d');
        // --- Level Editor ---
        function showEditor() {
            clearInterval(gameInterval);
            gameCanvas.style.display = 'none';
            editorCanvas.style.display = 'block';
            drawEditor();
        }
        function drawEditor() {
            editorCtx.clearRect(0,0,400,400);
            for(let y=0; y<ROWS; y++) {
                for(let x=0; x<COLS; x++) {
                    if(level[y][x] === 1) {
                        editorCtx.fillStyle = '#888';
                        editorCtx.fillRect(x*CELL, y*CELL, CELL, CELL);
                    }
                    editorCtx.strokeStyle = '#444';
                    editorCtx.strokeRect(x*CELL, y*CELL, CELL, CELL);
                }
            }
        }
        editorCanvas.addEventListener('click', e => {
            const rect = editorCanvas.getBoundingClientRect();
            const x = Math.floor((e.clientX - rect.left) / CELL);
            const y = Math.floor((e.clientY - rect.top) / CELL);
            if(x >= 0 && x < COLS && y >= 0 && y < ROWS) {
                level[y][x] = level[y][x] ? 0 : 1;
                drawEditor();
            }
        });
        function saveLevel() {
            localStorage.setItem('snake_level', JSON.stringify(level));
            alert('Level saved!');
        }
        function loadLevel() {
            const data = localStorage.getItem('snake_level');
            if(data) {
                level = JSON.parse(data);
                drawEditor();
                alert('Level loaded!');
            }
        }
        // --- Snake Game ---
        function startGame() {
            editorCanvas.style.display = 'none';
            gameCanvas.style.display = 'block';
            snake = [{x:10, y:10}];
            dir = {x:1, y:0};
            running = true;
            placeFood();
            gameInterval = setInterval(gameLoop, 100);
        }
        function placeFood() {
            let empty = [];
            for(let y=0; y<ROWS; y++)
                for(let x=0; x<COLS; x++)
                    if(!snake.some(s=>s.x===x&&s.y===y) && level[y][x]===0)
                        empty.push({x,y});
            food = empty[Math.floor(Math.random()*empty.length)];
        }
        function gameLoop() {
            let head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
            // Check wall
            if(head.x<0||head.x>=COLS||head.y<0||head.y>=ROWS||level[head.y][head.x]===1||snake.some(s=>s.x===head.x&&s.y===head.y)) {
                running = false;
                clearInterval(gameInterval);
                alert('Game Over!');
                return;
            }
            snake.unshift(head);
            if(head.x===food.x && head.y===food.y) {
                placeFood();
            } else {
                snake.pop();
            }
            drawGame();
        }
        function drawGame() {
            gameCtx.clearRect(0,0,400,400);
            // Draw walls
            for(let y=0; y<ROWS; y++)
                for(let x=0; x<COLS; x++)
                    if(level[y][x]===1) {
                        gameCtx.fillStyle = '#888';
                        gameCtx.fillRect(x*CELL, y*CELL, CELL, CELL);
                    }
            // Draw food
            gameCtx.fillStyle = 'red';
            gameCtx.fillRect(food.x*CELL, food.y*CELL, CELL, CELL);
            // Draw snake
            for(let i=0; i<snake.length; i++) {
                gameCtx.fillStyle = i===0 ? '#0f0' : '#0a0';
                gameCtx.fillRect(snake[i].x*CELL, snake[i].y*CELL, CELL, CELL);
            }
        }
        // --- Controls ---
        document.addEventListener('keydown', e => {
            if(!running) return;
            if(e.key==='ArrowUp' && dir.y!==1) dir={x:0,y:-1};
            else if(e.key==='ArrowDown' && dir.y!==-1) dir={x:0,y:1};
            else if(e.key==='ArrowLeft' && dir.x!==1) dir={x:-1,y:0};
            else if(e.key==='ArrowRight' && dir.x!==-1) dir={x:1,y:0};
        });
        // --- Init ---
        showEditor();
