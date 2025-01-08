import React from 'react';

export default function App(){
    return (
        <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 sm:p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-md w-full">
                <h1 className="text-3xl font-serif text-primary mb-4">Welcome to My App</h1>
                <p className="text-base font-sans text-neutral-700 mb-6">
                    This is a sample application to demonstrate a comprehensive design system using Tailwind CSS.
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded cursor-pointer w-full sm:w-auto">
                    Get Started
                </button>
            </div>
        </div>
    )
}