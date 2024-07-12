import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Footer = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            user_email: email,
            message: message,
        };


        emailjs.send('service_43pmv64', 'template_fk7rmkc', templateParams, 'kAEzOSm0C_jiCZecP')
            .then((response) => {
                toast.success('SUCCESS!', response.status, response.text);
                // Réinitialiser le formulaire après l'envoi
                setEmail('');
                setMessage('');
            }, (error) => {
                toast.error('FAILED...', error);
            });
    };

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
                            <li>Email: marcelhenribryan@gmail.com</li>
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
                        <h2 className="text-xl font-bold mb-4">Vos remarques sur ce site</h2>
                        <form onSubmit={sendEmail}>
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full p-2 mb-4 text-gray-800 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                name="message"
                                id="message"
                                placeholder='Votre message et note'
                                className='w-full p-2 mb-4 text-gray-800 rounded'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                            >
                                Envoyer vos remarques
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
