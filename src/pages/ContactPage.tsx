// Diese Komponente stellt die Kontaktseite mit einem funktionierenden Kontaktformular dar.
// Sie verwendet den Dienst "EmailJS", um E-Mails direkt aus dem Browser zu versenden, ohne einen eigenen Server zu benötigen.

import React, { useState, useRef } from 'react';
// Importiert die EmailJS-Bibliothek
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  // 'useRef' wird verwendet, um eine direkte Referenz auf das Formular-Element im DOM zu erhalten.
  const form = useRef<HTMLFormElement>(null);
  
  // 'useState' für die Verwaltung des Formular-Zustands
  const [isSubmitting, setIsSubmitting] = useState(false); // Zeigt an, ob das Formular gerade sendet
  const [statusMessage, setStatusMessage] = useState(''); // Nachricht für den Benutzer (Erfolg oder Fehler)
  const [isError, setIsError] = useState(false); // Unterscheidet, ob die statusMessage ein Fehler ist

  // --- WICHTIG: DEINE EMAILJS ZUGANGSDATEN ---
  // Du musst dich bei https://www.emailjs.com/ anmelden, einen Service und ein Template erstellen
  // und dann die folgenden Werte durch deine eigenen ersetzen.
  const SERVICE_ID = 'service_sxq9s8g';   // Deine Service ID von EmailJS
  const TEMPLATE_ID = 'template_xgvny18'; // Deine Template ID von EmailJS
  const PUBLIC_KEY = 'VXhP2N2ZcXkMG6-WC';   // Dein Public Key (User ID) von EmailJS
  // ---------------------------------------------

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Verhindert das Standard-Neuladen der Seite beim Absenden

    if (!form.current) return;

    setIsSubmitting(true); // Deaktiviert den Senden-Button
    setStatusMessage('');
    setIsError(false);

    // Dies ist die Funktion, die die E-Mail tatsächlich sendet
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          // WIRD AUSGEFÜHRT, WENN DER VERSAND ERFOLGREICH WAR
          console.log('SUCCESS!', result.text);
          setStatusMessage('Danke für deine Nachricht! Ich werde mich bald bei dir melden.');
          setIsError(false);
          form.current?.reset(); // Setzt die Formularfelder zurück
        },
        (error) => {
          // WIRD AUSGEFÜHRT, WENN EIN FEHLER AUFTRAT
          console.log('FAILED...', error.text);
          setStatusMessage('Ups! Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.');
          setIsError(true);
        }
      )
      .finally(() => {
        // WIRD IMMER AUSGEFÜHRT (egal ob Erfolg oder Fehler)
        setIsSubmitting(false); // Aktiviert den Senden-Button wieder
      });
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-black text-center mb-10 tracking-tighter">
        NIMM <span className="text-brand-green">KONTAKT</span> AUF
      </h1>
      {/* Hier kannst du den Einleitungstext anpassen */}
      <p className="text-center text-gray-400 mb-8">
        Hast du Fragen oder möchtest du eine Privatstunde buchen? Füll das Formular aus und ich melde mich bei dir.
      </p>
      
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-2xl"
      >
        {/* --- NAME FELD --- */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // Wichtig: 'name' muss mit dem Feldnamen in deinem EmailJS-Template übereinstimmen
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
            aria-label="Name"
          />
        </div>
        {/* --- E-MAIL FELD --- */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email" // Wichtig: 'name' muss mit dem Feldnamen in deinem EmailJS-Template übereinstimmen
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
            aria-label="E-Mail"
          />
        </div>
        {/* --- NACHRICHT FELD --- */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message" // Wichtig: 'name' muss mit dem Feldnamen in deinem EmailJS-Template übereinstimmen
            rows={5}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
            aria-label="Nachricht"
          ></textarea>
        </div>
        {/* --- SENDEN BUTTON --- */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting} // Button ist während des Sendens deaktiviert
            className="w-full bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? 'Sende...' : 'Nachricht Senden'}
          </button>
        </div>
        {/* --- STATUSMELDUNG --- */}
        {/* Zeigt die Erfolgs- oder Fehlermeldung nach dem Sendeversuch an. */}
        {statusMessage && (
          <p className={`text-center mt-4 ${isError ? 'text-red-500' : 'text-brand-green'}`}>
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
