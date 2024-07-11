import React from 'react'
import CustomMenu from './CustomMenu';
import NavCompte from './NavCompte';

const Navigation = () => {
    return (
        <div className="flex  items-center justify-center space-x-20 fixed top-3 left-0 right-0 z-10">
            <div className="bg-white shadow-md rounded-3xl p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="mr-20">
                        <CustomMenu />
                    </div>
                    <div className="mx-20">
                        {/* Titre QuestionsAI */}
                        <h1 className="text-2xl font-bold text-gray-800">QuestionsAI</h1>
                    </div>
                    <div className="ml-20">
                        {/* Profil de l'utilisateur */}
                        <NavCompte />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navigation