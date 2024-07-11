import React from 'react';
import PageEnseignant from '../../Components/Enseignant/AutoEnseignant/PageEnseignant';

function HomePageEnseignant() {
    return (
        <div className="bg-gradient-to-b from-blue-500 via-transparent to-white min-h-screen">
            <div className='pt-20 md:pt-40 text-center px-4'>
                <div className='max-w-screen-md mx-auto mb-4'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>QuestionsAI : Votre Générateur de Questions en Ligne Gratuit</h1>
                </div>
                <div className='max-w-screen-md mx-auto'>
                    <p className='text-center text-sm md:text-base'>
                        QuestionsAI est une application en ligne gratuite qui automatise le processus de génération de questions, permettant aux utilisateurs de créer rapidement et facilement des questionnaires, des quiz et des évaluations. Vous avez une variété de types de questions, de la création de questions à choix multiples à la génération de questions à réponses courtes ou ouvertes, tout en offrant la possibilité de personnaliser les questions selon vos besoins spécifiques.
                    </p>
                </div>
            </div>
            <div className='mt-8 md:mt-16 px-4'>
                <PageEnseignant />
            </div>
        </div>
    );
}

export default HomePageEnseignant;
