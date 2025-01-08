import React, { useState } from 'react';
import Article from './components/Article';

export default function App(){
  const [showArticle, setShowArticle] = useState(false);

  const handleGetStarted = () => {
    console.log('User clicked Get Started');
    setShowArticle(true);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-between p-4 sm:p-8">
      {!showArticle ? (
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-md w-full">
          <h1 className="text-3xl font-serif text-primary mb-4">Welcome to My App</h1>
          <p className="text-base font-sans text-neutral-700 mb-6">
            This is a sample application to demonstrate a comprehensive design system using Tailwind CSS.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded cursor-pointer w-full sm:w-auto">
            Get Started
          </button>
        </div>
      ) : (
        <Article />
      )}
      <footer className="mt-8">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 hover:text-primary"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}