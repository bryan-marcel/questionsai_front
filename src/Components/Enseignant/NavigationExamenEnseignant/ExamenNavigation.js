import React from 'react';
import PropafileEns from './PropafileEns';

function ExamNavigationEnseignant() {
    return (
        <div className="bg-white shadow-md p-4 fixed top-0 left-0 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
                <div className="mb-2 md:mb-0 md:mr-20">
                    <h1 className="text-lg md:text-xl">Titre du formulaire</h1>
                </div>
                <div className="mb-2 md:mb-0 md:mx-20">
                    {/* Titre QuestionsAI */}
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">QuestionsAI - Exercice</h1>
                </div>
                <div className="mb-2 md:mb-0 md:mx-20">
                    <PropafileEns />
                </div>
            </div>
        </div>
    );
}

export default ExamNavigationEnseignant;
