// Diese Datei ist der absolute Startpunkt deiner React-Anwendung.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importiert die Haupt-App-Komponente
import './index.css'; // Importiert die grundlegenden CSS-Styles (TailwindCSS)

// Sucht das HTML-Element mit der ID 'root' in der index.html.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Erstellt die "Wurzel" für die React-Anwendung.
const root = ReactDOM.createRoot(rootElement);

// "Rendert" (zeichnet) die Haupt-App-Komponente (<App />) in das 'root'-Element.
// React.StrictMode ist ein Helfer, der während der Entwicklung auf mögliche Probleme im Code hinweist.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
