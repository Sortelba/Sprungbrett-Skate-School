import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CrossedDecksIcon, SkateWheelIcon } from '../constants/icons';

type Player = 'X' | 'O';
type SquareValue = Player | null;

// Helper function to determine the winner
const calculateWinner = (squares: SquareValue[]): Player | null => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6],             // diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Reusable Square component
const Square: React.FC<{ value: SquareValue, onClick: () => void }> = ({ value, onClick }) => (
  <button
    className="aspect-square w-full h-full flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green"
    onClick={onClick}
    aria-label={`Square ${value ? `with ${value}` : 'empty'}`}
  >
    {value === 'X' && <CrossedDecksIcon className="w-3/4 h-3/4 text-white" />}
    {value === 'O' && <SkateWheelIcon className="w-3/4 h-3/4 text-brand-green" />}
  </button>
);

const TicTacToeGamePage: React.FC = () => {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  // Ref for the game over sound effect
  const gameOverSound = useRef(new Audio('/sounds/gameover.mp3'));


  // Load scores from localStorage on component mount
  useEffect(() => {
    const savedScores = localStorage.getItem('ticTacToeScores');
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);

  const winner = calculateWinner(board);
  const isTie = !winner && board.every(Boolean);

  const handleClick = (i: number) => {
    if (winner || board[i]) {
      return;
    }
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  
  const handleResetScores = () => {
    const newScores = { X: 0, O: 0 };
    setScores(newScores);
    localStorage.setItem('ticTacToeScores', JSON.stringify(newScores));
    handleNewGame();
  };

  // Update score, save to localStorage, and play sound when game ends
  useEffect(() => {
    if (winner || isTie) {
        gameOverSound.current.play().catch(e => console.error("Error playing game over sound:", e));
        if(winner) {
            const newScores = { ...scores, [winner]: scores[winner] + 1 };
            setScores(newScores);
            localStorage.setItem('ticTacToeScores', JSON.stringify(newScores));
        }
    }
  }, [winner, isTie]);


  let status;
  if (winner) {
    status = `Gewinner: Spieler ${winner}`;
  } else if (isTie) {
    status = 'Unentschieden!';
  } else {
    status = `Nächster Spieler: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 flex flex-col items-center animate-fade-in-up">
      <div className="w-full text-left mb-8">
        <Link to="/minigames" className="text-brand-green hover:underline transition-colors duration-200">
            &larr; Zurück zur Spielauswahl
        </Link>
      </div>
      
      <h1 className="text-4xl font-black mb-4 tracking-tighter">
        SKATE <span className="text-brand-green">TIC-TAC-TOE</span>
      </h1>
      
      {/* Score Board */}
      <div className="flex justify-around w-full max-w-sm bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-xl font-bold">
        <div className="text-center">
            <span className="text-white">Spieler X (Decks)</span>
            <p className="text-3xl text-white">{scores.X}</p>
        </div>
        <div className="text-center">
            <span className="text-brand-green">Spieler O (Wheel)</span>
            <p className="text-3xl text-brand-green">{scores.O}</p>
        </div>
      </div>
      
      {/* Game Board */}
      <div className="w-full max-w-sm mb-6">
        <div className="grid grid-cols-3 gap-3">
          {board.map((_, i) => (
            <Square key={i} value={board[i]} onClick={() => handleClick(i)} />
          ))}
        </div>
      </div>

      {/* Status and Controls */}
      <div className="text-center">
        <div className={`text-2xl font-bold mb-4 ${winner ? 'text-brand-green' : 'text-white'}`}>
          {status}
        </div>
        {(winner || isTie) && (
          <button onClick={handleNewGame} className="w-full sm:w-auto bg-brand-green text-gray-900 font-bold py-3 px-10 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 mb-4">
            Nochmal spielen
          </button>
        )}
        <button onClick={handleResetScores} className="text-gray-500 hover:text-white text-sm transition-colors">
            Punktestand zurücksetzen
        </button>
      </div>
    </div>
  );
};

export default TicTacToeGamePage;