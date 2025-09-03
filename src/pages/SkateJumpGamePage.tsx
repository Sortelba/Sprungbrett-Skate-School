import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SkaterSideProfileIcon, ConeIcon } from '../constants/icons';

// --- GAME CONSTANTS ---
const GAME_WIDTH = 800;
const GAME_HEIGHT = 300;
const GRAVITY = 0.6;
const JUMP_FORCE = -13;
const GROUND_Y = GAME_HEIGHT - 50;

const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 60;
const PLAYER_X = 50;

const OBSTACLE_WIDTH = 30;
const OBSTACLE_HEIGHT = 50;

const INITIAL_SPEED = 5;
const MAX_SPEED = INITIAL_SPEED * 1.25; // 25% max speed increase
const SPEED_INCREMENT = INITIAL_SPEED * 0.05; // 5% speed increase
const SCORE_THRESHOLD = 150;

type Obstacle = { x: number; scored: boolean };

const SkateJumpGamePage: React.FC = () => {
    // --- STATE MANAGEMENT ---
    const [gameState, setGameState] = useState<'waiting' | 'playing' | 'gameOver'>('waiting');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('skateJumpHighScore')) || 0);
    
    // Using state for rendering, refs for game logic values that change every frame
    const [playerTop, setPlayerTop] = useState(GROUND_Y - PLAYER_HEIGHT);
    const [currentObstacles, setCurrentObstacles] = useState<Obstacle[]>([]);
    
    const playerVelocityY = useRef(0);
    const gameSpeed = useRef(INITIAL_SPEED);
    const obstacleTimer = useRef(0);
    const frameId = useRef<number>();

    // --- GAME LOGIC ---
    // FIX: Add state setters to the dependency array to satisfy exhaustive-deps linting rules, which may be causing the misleading error.
    const resetGame = useCallback(() => {
        setPlayerTop(GROUND_Y - PLAYER_HEIGHT);
        playerVelocityY.current = 0;
        setCurrentObstacles([]);
        gameSpeed.current = INITIAL_SPEED;
        obstacleTimer.current = 100; // Initial delay for first obstacle
        setScore(0);
        setGameState('playing');
    }, [setGameState, setPlayerTop, setCurrentObstacles, setScore]);
    
    const gameLoop = useCallback(() => {
        // Player physics
        playerVelocityY.current += GRAVITY;
        let newPlayerY = playerTop + playerVelocityY.current;

        if (newPlayerY >= GROUND_Y - PLAYER_HEIGHT) {
            newPlayerY = GROUND_Y - PLAYER_HEIGHT;
            playerVelocityY.current = 0;
        }
        setPlayerTop(newPlayerY);

        // Obstacle management
        let newObstacles = [...currentObstacles];
        obstacleTimer.current -= 1;
        if (obstacleTimer.current <= 0) {
            newObstacles.push({ x: GAME_WIDTH, scored: false });
            // Spawn next obstacle faster at higher speeds
            const baseInterval = 120 / gameSpeed.current;
            obstacleTimer.current = baseInterval + (Math.random() * 60 / gameSpeed.current);
        }

        let newScore = score;
        let collisionDetected = false;

        newObstacles = newObstacles.map(obstacle => {
            const newX = obstacle.x - gameSpeed.current;

            // Scoring
            if (!obstacle.scored && newX + OBSTACLE_WIDTH < PLAYER_X) {
                newScore += 10;
                return { ...obstacle, x: newX, scored: true };
            }

            // Collision detection
            const playerRect = { x: PLAYER_X, y: newPlayerY, width: PLAYER_WIDTH, height: PLAYER_HEIGHT };
            const obstacleRect = { x: newX, y: GROUND_Y - OBSTACLE_HEIGHT, width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT };
            if (
                playerRect.x < obstacleRect.x + obstacleRect.width &&
                playerRect.x + playerRect.width > obstacleRect.x &&
                playerRect.y < obstacleRect.y + obstacleRect.height &&
                playerRect.y + playerRect.height > obstacleRect.y
            ) {
                collisionDetected = true;
            }
            return { ...obstacle, x: newX };
        }).filter(o => o.x + OBSTACLE_WIDTH > 0); // Remove off-screen obstacles
        
        setCurrentObstacles(newObstacles);

        // Update score and check difficulty
        if (newScore > score) {
            setScore(newScore);
             // Check if a score threshold has been crossed
            if (gameSpeed.current < MAX_SPEED && Math.floor(newScore / SCORE_THRESHOLD) > Math.floor((newScore - 10) / SCORE_THRESHOLD)) {
                gameSpeed.current = Math.min(MAX_SPEED, gameSpeed.current + SPEED_INCREMENT);
            }
        }
        
        // Handle Game Over
        if (collisionDetected) {
            setGameState('gameOver');
            if (newScore > highScore) {
                setHighScore(newScore);
                localStorage.setItem('skateJumpHighScore', String(newScore));
            }
        } else {
            frameId.current = requestAnimationFrame(gameLoop);
        }
    }, [playerTop, currentObstacles, score, highScore]);
    
    // --- EVENT HANDLERS & EFFECTS ---
    const handleJump = useCallback(() => {
        if (gameState === 'waiting') {
            resetGame();
        } else if (gameState === 'playing' && playerTop >= GROUND_Y - PLAYER_HEIGHT) {
            playerVelocityY.current = JUMP_FORCE;
        }
    }, [gameState, resetGame, playerTop]);

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
                
                {/* Obstacles */}
                {currentObstacles.map((obstacle, index) => (
                    <div key={index} className="absolute" style={{ width: OBSTACLE_WIDTH, height: OBSTACLE_HEIGHT, left: obstacle.x, top: GROUND_Y - OBSTACLE_HEIGHT }}>
                        <ConeIcon className="w-full h-full text-brand-green" />
                    </div>
                ))}

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