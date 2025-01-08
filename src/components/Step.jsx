import React from 'react';

export default function Step({ title, children }) {
  return (
    <li>
      <h2 className="text-xl font-semibold text-primary mb-2">
        {title}
      </h2>
      {children}
    </li>
  );
}