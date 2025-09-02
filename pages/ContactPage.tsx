
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send to an API endpoint)
    console.log({ name, email, message });
    setStatus('Danke für deine Nachricht! Ich werde mich bald bei dir melden.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-black text-center mb-10 tracking-tighter">
        NIMM <span className="text-brand-green">KONTAKT</span> AUF
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Hast du Fragen oder möchtest du eine Privatstunde buchen? Füll das Formular aus und ich melde mich bei dir.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Nachricht Senden
          </button>
        </div>
        {status && <p className="text-center text-brand-green mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default ContactPage;
