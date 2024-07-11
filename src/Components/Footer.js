// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Navigation</h2>
                        <ul>
                            <li><a href="/" className="hover:underline">Accueil</a></li>
                            <li><a href="/" className="hover:underline">À propos</a></li>
                            <li><a href="/" className="hover:underline">Contact</a></li>
                            <li><a href="/" className="hover:underline">Blog</a></li>
                            <li><a href="/" className="hover:underline">FAQ</a></li>
                            <li><a href="/" className="hover:underline">Conditions d'utilisation</a></li>
                            <li><a href="/" className="hover:underline">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact</h2>
                        <ul>
                            <li>Email:marcelhenribryan@gmail.com</li>
                            <li>Téléphone: +261 34 33 616 48</li>
                            <li>Adresse: Rue d'Itaosy, Antananarivo, Madagascar</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Réseaux Sociaux</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebookF /></a>
                            <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter /></a>
                            <a href="https://linkedin.com" className="hover:text-gray-400"><FaLinkedinIn /></a>
                            <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram /></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Newsletter</h2>
                        <form>
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full p-2 mb-4 text-gray-800 rounded"
                            />
                            <button
                                type="submit"
                                className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                            >
                                S'abonner
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>© 2024 QuestionsAI. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
