
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // --- IMPORTANT: Replace with your EmailJS credentials ---
  const SERVICE_ID = 'service_sxq9s8g';
  const TEMPLATE_ID = 'template_xgvny18';
  const PUBLIC_KEY = 'VXhP2N2ZcXkMG6-WC';
  // ---------------------------------------------------------

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    
    // FIX: The check for placeholder credentials has been removed.
    // Since the EmailJS credentials are now hardcoded, the check against placeholder
    // strings like 'YOUR_SERVICE_ID' is obsolete and was causing a TypeScript error
    // for comparing non-overlapping types.

    setIsSubmitting(true);
    setStatusMessage('');
    setIsError(false);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatusMessage('Danke für deine Nachricht! Ich werde mich bald bei dir melden.');
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatusMessage('Ups! Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.');
          setIsError(true);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-black text-center mb-10 tracking-tighter">
        NIMM <span className="text-brand-green">KONTAKT</span> AUF
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Hast du Fragen oder möchtest du eine Privatstunde buchen? Füll das Formular aus und ich melde mich bei dir.
      </p>
      
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-2xl"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? 'Sende...' : 'Nachricht Senden'}
          </button>
        </div>
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
