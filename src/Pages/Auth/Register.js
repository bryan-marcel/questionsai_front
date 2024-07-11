import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="max-w-md mx-auto mt-6 p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">S'inscrire</h2>
            <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-2">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <label htmlFor="name" className="block text-gray-700">Nom</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border rounded-md px-3 py-2"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="prenom" className="block text-gray-700">Prénom</label>
                        <input
                            type="text"
                            id="prenom"
                            className="w-full border rounded-md px-3 py-2"
                            placeholder="Prénom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border rounded-md px-3 py-2"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border rounded-md px-3 py-2"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirmer mot de passe</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full border rounded-md px-3 py-2"
                        placeholder="Confirmer mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <p className="text-sm text-gray-600">
                        En cliquant sur S’inscrire, vous acceptez nos{' '}
                        <Link to="#" className="text-blue-500 hover:underline">
                            Conditions générales
                        </Link>
                        , notre{' '}
                        <Link to="#" className="text-blue-500 hover:underline">
                            Politique de confidentialité
                        </Link>
                        , et notre{' '}
                        <Link to="#" className="text-blue-500 hover:underline">
                            Politique d’utilisation des cookies
                        </Link>
                        .
                    </p>
                </div>
                <div className="pt-4">
                    <button
                        type="button"
                        className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 w-full hover:bg-blue-600"
                        onClick={() => navigate('/homePageEnseignant')}
                    >
                        S'inscrire
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
