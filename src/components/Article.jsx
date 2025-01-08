import React from 'react';
import Steps from './Steps';

export default function Article() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif text-primary mb-6">
        How a Game Business Empire Was Built
      </h1>
      <p className="text-base font-sans text-neutral-700 mb-4">
        Building a successful game business empire requires a strategic combination of vision, creativity, and business acumen. Below is a step-by-step overview of how a hypothetical entrepreneur, "The Rich Man," created his game business empire:
      </p>
      <Steps />
    </div>
  );
}