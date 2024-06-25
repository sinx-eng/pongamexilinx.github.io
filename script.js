// Constants
const gameContainer = document.querySelector('.game-container');
const paddleLeft = document.querySelector('.paddle-left');
const paddleRight = document.querySelector('.paddle-right');
const ball = document.querySelector('.ball');
const player1ScoreDisplay = document.getElementById('player1-score');
const player2ScoreDisplay = document.getElementById('player2-score');
const box = document.querySelector('.box');

// Game variables
let ballSpeedX = 2; // Constant slow horizontal speed of the ball
let ballSpeedY = 2; // Constant slow vertical speed of the ball
let player1Score = 0;
let player2Score = 0;
const gameWidth = gameContainer.offsetWidth;
const gameHeight = gameContainer.offsetHeight;
const ballSize = 20; // Diameter of the ball
const paddleHeight = paddleLeft.offsetHeight; // Height of the paddles

// Function to start the game
function startGame() {
    // Initialize ball position
    resetBall();

    // Start ball movement
    moveBall();

    // Listen for paddle movement
    gameContainer.addEventListener('mousemove', movePaddle);
}

// Function to reset ball position
function resetBall() {
    ball.style.top = `${Math.floor(Math.random() * (gameHeight - ballSize))}px`;
    ball.style.left = `${Math.floor(Math.random() * (gameWidth - ballSize))}px`;
}

// Function to move the ball
function moveBall() {
    // Update ball position
    let ballX = parseFloat(ball.style.left);
    let ballY = parseFloat(ball.style.top);

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check collision with top and bottom walls
    if (ballY <= 0 || ballY >= gameHeight - ballSize) {
        ballSpeedY = -ballSpeedY; // Reverse vertical direction
    }

    // Check collision with paddles
    if (ballX <= paddleLeft.offsetWidth && ballY + ballSize >= paddleLeft.offsetTop && ballY <= paddleLeft.offsetTop + paddleHeight) {
        ballSpeedX = -ballSpeedX; // Reverse horizontal direction
        paddleLeft.classList.add('animate'); // Animate paddle on collision
    } else if (ballX + ballSize >= gameWidth - paddleRight.offsetWidth && ballY + ballSize >= paddleRight.offsetTop && ballY <= paddleRight.offsetTop + paddleHeight) {
        ballSpeedX = -ballSpeedX; // Reverse horizontal direction
        paddleRight.classList.add('animate'); // Animate paddle on collision
    }

    // Check for scoring and reset ball position
    if (ballX <= 0) {
        player2Score++; // Player 2 scores
        updateScore();
        resetBall();
    } else if (ballX >= gameWidth - ballSize) {
        player1Score++; // Player 1 scores
        updateScore();
        resetBall();
    }

    // Update ball position
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // Repeat movement
    requestAnimationFrame(moveBall);
}

// Function to move paddles based on mouse position
function movePaddle(event) {
    const mouseY = event.clientY - gameContainer.offsetTop;

    // Restrict paddle movement within game container
    if (mouseY >= 0 && mouseY <= gameContainer.offsetHeight - paddleHeight) {
        paddleLeft.style.top = `${mouseY}px`;
        paddleRight.style.top = `${mouseY}px`;
    }
}

// Function to update scores on the screen
function updateScore() {
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
}

// Start the game when the script loads
startGame();
