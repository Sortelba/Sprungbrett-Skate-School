import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
    SkaterSideProfileIcon, 
    ConeIcon,
    TrashCanIcon,
    CactusIcon,
    FlowerPotIcon,
} from '../constants/icons';

// --- GAME CONSTANTS ---
const GAME_WIDTH = 800;
const GAME_HEIGHT = 300;
const GRAVITY = 0.6;
const JUMP_FORCE = -13;
const GROUND_Y = GAME_HEIGHT - 50;

const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 60;
const PLAYER_X = 50;

// --- DIFFICULTY ADJUSTMENTS ---
// Initial speed is set to 3 as requested.
const INITIAL_SPEED = 3; 
const MAX_SPEED = 6; // Max speed can be slightly higher now
const SPEED_INCREMENT = 1; // Speed increases by 1 level at each threshold
const SCORE_THRESHOLD = 150;

// --- OBSTACLE TYPES ---
// Define different obstacles with their specific icons and collision sizes.
const obstacleTypes = [
    { Icon: ConeIcon, width: 30, height: 50 },
    { Icon: TrashCanIcon, width: 40, height: 55 },
    { Icon: CactusIcon, width: 45, height: 60 },
    { Icon: FlowerPotIcon, width: 35, height: 40 },
];

// Define the shape of an obstacle object in the game state.
type Obstacle = { 
    x: number; 
    scored: boolean; 
    typeIndex: number; // Index to reference the obstacleTypes array
};

const SkateJumpGamePage: React.FC = () => {
    // --- STATE MANAGEMENT ---
    const [gameState, setGameState] = useState<'waiting' | 'playing' | 'gameOver'>('waiting');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('skateJumpHighScore')) || 0);
    
    // State for rendering positions and objects.
    const [playerTop, setPlayerTop] = useState(GROUND_Y - PLAYER_HEIGHT);
    const [currentObstacles, setCurrentObstacles] = useState<Obstacle[]>([]);
    
    // Refs for game logic values that change every frame without causing re-renders.
    const playerVelocityY = useRef(0);
    const gameSpeed = useRef(INITIAL_SPEED);
    const obstacleTimer = useRef(0);
    const frameId = useRef<number | null>(null);

    // --- SOUND EFFEKTE ---
    // Die folgenden Zeilen laden die Sound-Dateien.
    // Damit dies funktioniert, musst du einen Ordner `public/sounds` erstellen
    // und darin die Dateien `jump.mp3`, `score.mp3` und `gameover.mp3` ablegen.
    
    const jumpSound = useRef(new Audio('/sounds/jump.mp3'));
    const scoreSound = useRef(new Audio('/sounds/score.mp3'));
    const gameOverSound = useRef(new Audio('/sounds/gameover.mp3'));


    // --- GAME LOGIC ---
    const resetGame = useCallback(() => {
        setPlayerTop(GROUND_Y - PLAYER_HEIGHT);
        playerVelocityY.current = 0;
        setCurrentObstacles([]);
        gameSpeed.current = INITIAL_SPEED;
        obstacleTimer.current = 120; // Initial delay for the first obstacle.
        setScore(0);
        setGameState('playing');
    }, []);
    
    const gameLoop = useCallback(() => {
        // Player physics: Apply gravity and update position.
        playerVelocityY.current += GRAVITY;
        let newPlayerY = playerTop + playerVelocityY.current;

        // Prevent player from falling through the ground.
        if (newPlayerY >= GROUND_Y - PLAYER_HEIGHT) {
            newPlayerY = GROUND_Y - PLAYER_HEIGHT;
            playerVelocityY.current = 0;
        }
        setPlayerTop(newPlayerY);

        // Obstacle management: Spawning new obstacles.
        let newObstacles = [...currentObstacles];
        obstacleTimer.current -= 1;
        if (obstacleTimer.current <= 0) {
            // Randomly select an obstacle type to spawn.
            const typeIndex = Math.floor(Math.random() * obstacleTypes.length);
            newObstacles.push({ x: GAME_WIDTH, scored: false, typeIndex: typeIndex });
            
            // The interval between obstacles. A larger base value means more space.
            const baseInterval = 220 / gameSpeed.current; 
            const randomInterval = Math.random() * 120 / gameSpeed.current;
            obstacleTimer.current = baseInterval + randomInterval;
        }

        let newScore = score;
        let collisionDetected = false;

        // Move obstacles, check for scoring and collisions.
        newObstacles = newObstacles.map(obstacle => {
            const type = obstacleTypes[obstacle.typeIndex];
            const newX = obstacle.x - gameSpeed.current;

            // Scoring: Add points when the player passes an obstacle.
            if (!obstacle.scored && newX + type.width < PLAYER_X) {
                newScore += 10;
                return { ...obstacle, x: newX, scored: true };
            }

            // Collision detection using bounding boxes.
            const playerRect = { x: PLAYER_X, y: newPlayerY, width: PLAYER_WIDTH, height: PLAYER_HEIGHT };
            const obstacleRect = { x: newX, y: GROUND_Y - type.height, width: type.width, height: type.height };
            if (
                playerRect.x < obstacleRect.x + obstacleRect.width &&
                playerRect.x + playerRect.width > obstacleRect.x &&
                playerRect.y < obstacleRect.y + obstacleRect.height &&
                playerRect.y + playerRect.height > obstacleRect.y
            ) {
                collisionDetected = true;
            }
            return { ...obstacle, x: newX };
        }).filter(o => o.x + obstacleTypes[o.typeIndex].width > 0); // Remove off-screen obstacles.
        
        setCurrentObstacles(newObstacles);

        // Update score and increase difficulty when thresholds are met.
        if (newScore > score) {
            setScore(newScore);
            // Play scoring sound effect
            scoreSound.current.currentTime = 0; // Rewind to start to allow rapid playing
            scoreSound.current.play().catch(e => console.error("Error playing score sound:", e));

            // Check if a score threshold is crossed to increase speed
            const oldLevel = Math.floor(score / SCORE_THRESHOLD);
            const newLevel = Math.floor(newScore / SCORE_THRESHOLD);
            if (newLevel > oldLevel) {
                 gameSpeed.current = Math.min(MAX_SPEED, INITIAL_SPEED + (newLevel * SPEED_INCREMENT));
            }
        }
        
        // Handle Game Over state.
        if (collisionDetected) {
            setGameState('gameOver');
            // Play game over sound effect
            gameOverSound.current.play().catch(e => console.error("Error playing game over sound:", e));
            if (newScore > highScore) {
                setHighScore(newScore);
                localStorage.setItem('skateJumpHighScore', String(newScore));
            }
        } else {
            frameId.current = requestAnimationFrame(gameLoop);
        }
    }, [playerTop, currentObstacles, score, highScore, resetGame]);
    
    // --- EVENT HANDLERS & EFFECTS ---
    const handleJump = useCallback(() => {
        if (gameState === 'waiting') {
            resetGame();
        } else if (gameState === 'playing' && playerTop >= GROUND_Y - PLAYER_HEIGHT - 1) { // -1 allows for small floating point inaccuracies
            playerVelocityY.current = JUMP_FORCE;
            // Play jump sound effect
            jumpSound.current.currentTime = 0; // Rewind to start for quick jumps
            jumpSound.current.play().catch(e => console.error("Error playing jump sound:", e));
        }
    }, [gameState, resetGame, playerTop]);

    // Main game loop effect.
    useEffect(() => {
        if (gameState === 'playing') {
            frameId.current = requestAnimationFrame(gameLoop);
        }
        return () => {
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, [gameState, gameLoop]);
    
    // Keyboard input listener.
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                handleJump();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleJump]);
    
    return (
        <div className="max-w-4xl mx-auto py-12 flex flex-col items-center animate-fade-in-up">
            <h1 className="text-4xl font-black mb-4 tracking-tighter">
                SKATE <span className="text-brand-green">JUMP</span>
            </h1>
            <div className="flex justify-between w-full max-w-[800px] mb-4 text-2xl font-bold">
                <span>Score: <span className="text-brand-green">{score}</span></span>
                <span>High Score: <span className="text-brand-green">{highScore}</span></span>
            </div>
            
            <div 
                onClick={handleJump}
                className="relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer border-2 border-gray-700 w-full"
                style={{ maxWidth: GAME_WIDTH, height: GAME_HEIGHT }}
            >
                {/* Ground */}
                <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gray-700 border-t-4 border-gray-600"></div>

                {/* Player */}
                <div className="absolute transition-transform duration-0" style={{ width: PLAYER_WIDTH, height: PLAYER_HEIGHT, left: PLAYER_X, top: playerTop }}>
                    <SkaterSideProfileIcon className="w-full h-full text-white" />
                </div>
                
                {/* Render randomly chosen obstacles */}
                {currentObstacles.map((obstacle, index) => {
                    const type = obstacleTypes[obstacle.typeIndex];
                    const ObstacleIcon = type.Icon;
                    return (
                        <div key={index} className="absolute" style={{ width: type.width, height: type.height, left: obstacle.x, top: GROUND_Y - type.height }}>
                           <ObstacleIcon className="w-full h-full text-brand-green" />
                        </div>
                    );
                })}

                {/* Game State Overlays */}
                {gameState === 'waiting' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <p className="text-3xl font-bold text-white animate-pulse">Klicken oder Leertaste drücken zum Starten</p>
                    </div>
                )}
                {gameState === 'gameOver' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white">
                        <h2 className="text-5xl font-black text-red-500 mb-4">GAME OVER</h2>
                        <p className="text-2xl mb-6">Dein Score: {score}</p>
                        <button 
                            onClick={resetGame}
                            className="bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105"
                        >
                            Neustart
                        </button>
                    </div>
                )}
            </div>
             <p className="text-gray-500 mt-4">Tipp: Benutze die Leertaste oder klicke, um zu springen.</p>
        </div>
    );
};
export default SkateJumpGamePage;