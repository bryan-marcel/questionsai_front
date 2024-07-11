import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ExamCardsEns from '../../Components/Enseignant/Cards/ExamenCards';

function ExamPageEnseignant() {
    const location = useLocation();
    const questions = location.state ? location.state.questions : [];
    const titles = location.state ? location.state.titles : [];

    // Create local state to store answers
    const [answers, setAnswers] = useState(questions.map(() => ""));

    // Function to update answer for a question
    const handleAnswerChange = (index, event) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = event.target.value;
        setAnswers(updatedAnswers);
    };

    const handleSendAnswers = () => {
        // Send answers (answers) to the server or perform any other necessary action
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 via-transparent to-white">
            <div className="p-4 mt-20 md:mt-32">
                <ExamCardsEns />
                <div className="mt-2">
                    <div className="bg-blue-950 text-black mb-2 py-6 rounded-md flex justify-center items-center">
                        <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                            Sujet : {titles}
                        </h3>
                    </div>
                    <div className="bg-gray-200 text-black py-6 rounded-md">
                        <div className="container mx-auto mt-0 px-4">
                            {questions.map((question, index) => (
                                <div key={index} className="mb-4">
                                    <p className="text-md md:text-lg text-black">{question}</p>
                                    <textarea
                                        className="w-full border p-2 mt-2 bg-gray-50 mb-2 rounded-lg"
                                        placeholder="Votre réponse"
                                        value={answers[index]}
                                        onChange={(e) => handleAnswerChange(index, e)}
                                        rows={Math.max(1, Math.ceil(answers[index].length / 100))}
                                        style={{ resize: "none" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3 flex justify-center">
                        <button
                            className="bg-blue-700 rounded-md hover:bg-blue-900 text-white py-3 px-6 font-semibold"
                            onClick={handleSendAnswers}
                        >
                            Envoyer la réponse de l'examen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamPageEnseignant;
