import React, { useState } from 'react';
import MenuEnseignant from './MenuEnseignant';
import NavigationCompteEnseignant from './NavigationCompteEnseignant';

function NavigationEnseignant() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-3 md:left-0 md:right-0 z-10 flex justify-center">
            <div className="md:shadow-md md:rounded-3xl md:p-3 w-full max-w-screen-lg md:bg-slate-300 bg-none">
                <div className="flex justify-between items-center px-4">
                    <div className="flex items-center space-x-4">
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-800 focus:outline-none bg-slate-300 rounded-full p-2 shadow-md"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <MenuEnseignant />
                        </div>
                    </div>
                    <div className="hidden md:block mx-20">
                        <h1 className="text-2xl font-bold text-gray-800">QuestionsAI</h1>
                    </div>
                    <div className="hidden md:block md:ml-20">
                        <NavigationCompteEnseignant />
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-300 shadow-md rounded-3xl p-3 w-64 absolute top-12 left-3 z-20">
                    <div className="flex flex-col space-y-4">
                        <MenuEnseignant />
                        <NavigationCompteEnseignant />
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavigationEnseignant;
