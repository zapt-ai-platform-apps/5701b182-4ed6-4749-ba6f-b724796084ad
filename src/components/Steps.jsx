import React from 'react';
import Step from './Step';
import stepsData from './stepsData.jsx';

export default function Steps() {
  return (
    <ol className="list-decimal list-inside space-y-6">
      {stepsData.map((step, index) => (
        <Step key={index} title={step.title}>
          {step.content}
        </Step>
      ))}
    </ol>
  );
}