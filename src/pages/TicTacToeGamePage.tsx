import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CrossedDecksIcon, SkateWheelIcon } from '../constants/icons';
// Importiert die zentrale Sound-Funktion
import { playSound } from '../utils/playSound';

type Player = 'X' | 'O';
type SquareValue = Player | null;

// Hilfsfunktion, um den Gewinner zu ermitteln
const calculateWinner = (squares: SquareValue[]): Player | null => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Reihen
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Spalten
    [0, 4, 8], [2, 4, 6],             // Diagonalen
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

// Wiederverwendbare Komponente für ein einzelnes Spielfeld
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
  const winner = calculateWinner(board);
  const isTie = !winner && board.every(Boolean);

  // Lade Punktestände aus dem localStorage, wenn die Komponente geladen wird
  useEffect(() => {
    const savedScores = localStorage.getItem('ticTacToeScores');
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);
  
  // Aktualisiere den Punktestand, wenn sich ein Gewinner ergibt
  useEffect(() => {
    if (winner) {
      const newScores = { ...scores, [winner]: scores[winner] + 1 };
      setScores(newScores);
      localStorage.setItem('ticTacToeScores', JSON.stringify(newScores));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

  // Behandelt den Klick auf ein Spielfeld
  const handleClick = (i: number) => {
    if (winner || board[i]) {
      return; // Beendet die Funktion, wenn schon ein Gewinner feststeht oder das Feld besetzt ist
    }
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    // Prüft *sofort* nach dem Zug auf einen Gewinner oder ein Unentschieden
    const newWinner = calculateWinner(newBoard);
    const newIsTie = !newWinner && newBoard.every(Boolean);

    // --- SOUND: GAME OVER ---
    // Spielt den Sound direkt hier ab, was zuverlässiger ist.
    if (newWinner || newIsTie) {
        playSound('/sounds/gameover.mp3');
    }
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
      
      <div className="w-full max-w-sm mb-6">
        <div className="grid grid-cols-3 gap-3">
          {board.map((_, i) => (
            <Square key={i} value={board[i]} onClick={() => handleClick(i)} />
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <div className={`text-2xl font-bold ${winner ? 'text-brand-green' : 'text-white'}`}>
          {status}
        </div>
        {(winner || isTie) && (
          <button onClick={handleNewGame} className="w-full sm:w-auto bg-brand-green text-gray-900 font-bold py-3 px-10 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105">
            Nochmal spielen
          </button>
        )}
        <button 
          onClick={handleResetScores} 
          className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-2 px-6 rounded-md transition-colors"
        >
            Punktestand zurücksetzen
        </button>
      </div>
    </div>
  );
};

export default TicTacToeGamePage;