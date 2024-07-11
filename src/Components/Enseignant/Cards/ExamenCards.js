import React from 'react';

function ExamCardsEns() {
    const username = 'username';
    const role = 'Enseignant';
    const exams = [
        {
            title: 'Mon cahier d\'Exercice',
            teacherName: 'Professeur Jean Dupont',
        },
    ];

    return (
        <div className="bg-indigo-900 text-white py-16 rounded-md">
            <div className="container mx-auto text-center">
                {exams.map((exam, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="text-4xl font-bold">{exam.title}</h2>
                        <p className="mt-2">{role} {username}</p>
                        <p className="mt-2 text-lg">{exam.teacherName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExamCardsEns;
