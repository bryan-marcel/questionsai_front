/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Register from './Register';
import { Link, useNavigate } from 'react-router-dom';
import Image1 from '../../assets/image/Image2.png';

const Login = () => {
    const navigate = useNavigate();
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

    const openRegisterModal = () => {
        setRegisterModalOpen(true);
    };

    const closeRegisterModal = () => {
        setRegisterModalOpen(false);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Image Section */}
            <div className="lg:w-1/2 flex items-center justify-center p-2">
                <img src={Image1} alt="Login Visual" className="max-w-full max-h-full" />
            </div>

            {/* Login Form Section */}
            <div className="flex flex-col justify-center max-w-md mx-auto p-4 w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Se connecter</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="text-right">
                        <Link to="#" className="text-blue-500 hover:underline">Mot de passe oublié ?</Link>
                    </div>
                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white font-bold rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
                        onClick={() => navigate('/homePageEnseignant')}
                    >
                        Se Connecter
                    </button>
                </form>
                <p className="mt-6 text-center">
                    Pas de compte ?{' '}
                    <span onClick={openRegisterModal} className="text-blue-700 cursor-pointer hover:underline">
                        Créer un compte
                    </span>
                </p>

                {isRegisterModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                        <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                            <button
                                onClick={closeRegisterModal}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            >
                                Fermer
                            </button>
                            <Register />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
