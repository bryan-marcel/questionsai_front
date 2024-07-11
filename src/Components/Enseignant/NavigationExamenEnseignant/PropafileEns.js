import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function InviteStudentsModal({ isModalOpen, setModalOpen }) {
    const [students, setStudents] = useState([{ id: 1, email: '' }]);

    // eslint-disable-next-line no-unused-vars
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleAddStudent = () => {
        const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
        setStudents([...students, { id: newId, email: '' }]);
    }

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
    }

    const handleStudentEmailChange = (email, id) => {
        const updatedStudents = students.map((student) =>
            student.id === id ? { ...student, email } : student
        );
        setStudents(updatedStudents);
    }

    return isModalOpen ? (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute z-10 mt-2 origin-center bg-white shadow-lg ring-1 ring-black ring-opacity-5 w-80 focus:outline-none rounded-md overflow-y-auto max-h-96">
                <div className="py-4 px-4 text-center sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Créer une invitation</h3>
                </div>
                <div className="px-4 py-2">
                    {students.map((student) => (
                        <div key={student.id} className="flex items-center mb-4">
                            <input
                                type="text"
                                className="flex-1 shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={student.email}
                                onChange={(e) => handleStudentEmailChange(e.target.value, student.id)}
                            />
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
                                onClick={() => handleDeleteStudent(student.id)}
                            >
                                Supprimer
                            </button>
                        </div>
                    ))}
                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleAddStudent}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-4 py-2">
                        <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setModalOpen(false)}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}

function PropafileEns() {
    const navigation = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openInviteStudentsModal = () => {
        setIsModalOpen(true);
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full gap-x-1.5 rounded-full px-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </Menu.Button>
            </div>

            <InviteStudentsModal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} />

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-10 mt-2 md:origin-top-right md:right-1 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 w-64 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm w-full'
                                    )}
                                    onClick={openInviteStudentsModal}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    Inviter des étudiants
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
                                    )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                    </svg>
                                    Créer une copie
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
                                    )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5H21m0 0v4.5m0-4.5h-3.75a2.25 2.25 0 00-2.25 2.25V18m0 0h-6m6 0a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18m0 0V8.25A2.25 2.25 0 016.75 6h2.158a2.25 2.25 0 011.59.66l2.182 2.182a2.25 2.25 0 001.59.66H15m6 0V15m0-4.5V8.25A2.25 2.25 0 0018.75 6h-2.158a2.25 2.25 0 00-1.59.66l-2.182 2.182a2.25 2.25 0 01-1.59.66H9m-4.5 9.75h6" />
                                    </svg>
                                    Exporter vers PDF
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
                                    )}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 11-12.728 0m0 0L12 12" />
                                    </svg>
                                    Afficher le rapport
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm md:w-full'
                                    )}
                                    onClick={() => {
                                        // Add logout functionality here
                                        navigation('/homePageEnseignant');
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m-3.25 5.25h15m-15 0l3.75 3.75m-3.75-3.75l3.75-3.75" />
                                    </svg>
                                    Déconnexion
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default PropafileEns;
