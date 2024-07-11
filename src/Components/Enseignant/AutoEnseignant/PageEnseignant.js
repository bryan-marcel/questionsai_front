/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCopy } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function PageEnseignant() {
    const [activeTopTab, setActiveTopTab] = useState('saisie');
    const [activeBottomTab, setActiveBottomTab] = useState('questions');
    const [isLoading, setIsLoading] = useState(false);
    const [inputText, setInputText] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedCount, setSelectedCount] = useState('');
    const [generatedQuestions, setGeneratedQuestions] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [title, setTitle] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const navigate = useNavigate();

    const switchTopTab = (tabName) => {
        setActiveTopTab(tabName);
    };

    const switchBottomTab = (tabName) => {
        setActiveBottomTab(tabName);
    };

    const generateQuestion = () => {
        setIsLoading(true);
        // Simulate question generation
        setTimeout(() => {
            setGeneratedQuestions(["Question 1", "Question 2", "Question 3"]);
            setIsLoading(false);
        }, 2000);
    };

    const importPDF = () => {
        setIsLoading(true);
        // Simulate file import
        setTimeout(() => {
            setResponseMessage(["Imported Question 1", "Imported Question 2"]);
            setIsLoading(false);
        }, 2000);
    };

    const editQuestion = (index) => {
        const updatedQuestion = prompt('Modifier la question :', generatedQuestions[index]);
        if (updatedQuestion !== null) {
            const updatedQuestions = [...generatedQuestions];
            updatedQuestions[index] = updatedQuestion;
            setGeneratedQuestions(updatedQuestions);
        }
    };

    const copyQuestion = (index) => {
        const textToCopy = generatedQuestions[index];
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    };

    const handleSelectFile = (file) => {
        setSelectedFile(file);
    };

    function TextArea() {
        return (
            <textarea
                className="w-full h-80 min-h-94 max-h-94 border p-2 overflow-y-auto"
                placeholder="Écrivez votre texte ici"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{ resize: 'none' }}
            />
        );
    }

    function ImportFichier() {
        return (
            <div>
                <h2>Importer fichier PDF</h2>
                {/* <FileUpload onFileSelect={handleSelectFile} /> */}
                {selectedFile && (
                    <div>
                        <h2>Fichier sélectionné</h2>
                        <p>Nom du fichier : {selectedFile.name}</p>
                        <p>Type du fichier : {selectedFile.type} </p>
                    </div>
                )}
                <button onClick={importPDF}>Importer le PDF</button>
            </div>
        );
    }

    function questionGenere() {
        const enableEdit = (index) => {
            setEditIndex(index);
        };

        const disableEdit = () => {
            setEditIndex(-1);
        };

        return (
            <div>
                <div>
                    <h2>Questions Générées :</h2>
                    <h3>Titre : {title}</h3>
                </div>
                {Array.isArray(generatedQuestions) && generatedQuestions.length > 0 ? (
                    <div className="w-full">
                        <div className="space-x-4 mb-7 mt-2">
                            <button
                                className="px-5 py-3 rounded-lg bg-blue-900 text-gray-50 hover:text-white hover:bg-blue-900"
                            >
                                Exporter PDF
                            </button>
                        </div>
                        {generatedQuestions.map((question, index) => (
                            <div key={index} className="mb-2 w-full">
                                <div className="flex rounded-md w-full">
                                    <div className="flex items-center w-full">
                                        <span className="rounded-l-md bg-gray-200 flex items-center space-x-2 p-2">
                                            {index + 1}
                                        </span>
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={question}
                                                onChange={(e) => {
                                                    const updatedQuestions = [...generatedQuestions];
                                                    updatedQuestions[index] = e.target.value;
                                                    setGeneratedQuestions(updatedQuestions);
                                                }}
                                                onBlur={disableEdit}
                                                className="w-full p-2"
                                            />
                                        ) : (
                                            <span className="w-full pl-2 bg-white flex space-x-2 p-2 ">
                                                {question}
                                            </span>
                                        )}
                                        <div className="rounded-r-md bg-gray-200 flex items-center space-x-2 p-2">
                                            <button onClick={() => enableEdit(index)}>
                                                <FontAwesomeIcon icon={faPen} size="lg" />
                                            </button>
                                            <button onClick={() => copyQuestion(index)}>
                                                <FontAwesomeIcon icon={faCopy} size="lg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Il n'y a pas de questions générées.</p>
                )}
            </div>
        );
    }

    function questionGenereFichier() {
        return (
            <div>
                <h2>Questions Générées pour le fichier PDF:</h2>
                {Array.isArray(responseMessage) && responseMessage.length > 0 ? (
                    <ul>
                        {responseMessage.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Il n'y a pas de questions</p>
                )}
            </div>
        );
    }

    function favorites() {
        return (
            <div>
                <h2>Vos favoris s'affichent ici</h2>
            </div>
        );
    }

    function historiques() {
        return (
            <div>
                <h2>Vos historiques s'affichent ici</h2>
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row h-auto md:h-screen p-4 md:p-12">
                <div className="w-full md:w-2/3 p-4 bg-gray-100 rounded-l-3xl">
                    <div className="flex border-b border-gray-300 mb-4">
                        <button
                            className={`px-8 py-5 ${activeTopTab === 'saisie' ? 'text-blue-400 ' : 'text-gray-900'}`}
                            onClick={() => switchTopTab('saisie')}
                            style={{ fontWeight: 'bold', fontSize: '16px' }}
                        >
                            Texte détaillé
                        </button>
                        <button
                            className={`px-8 py-5 ml-4 ${activeTopTab === 'fichier' ? 'text-blue-400 ' : 'text-gray-900'}`}
                            onClick={() => switchTopTab('fichier')}
                            style={{ fontWeight: 'bold', fontSize: '16px' }}
                        >
                            Fichier
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="mb-4 md:w-72">
                            <label>Titre :</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded-md"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        {activeTopTab === 'saisie' ? TextArea() : null}
                        {activeTopTab === 'fichier' ? ImportFichier() : null}
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-4 bg-slate-400 rounded-r-3xl mt-4 md:mt-0">
                    <div className="md:mt-16 ml-2 md:ml-0">
                        <div className="mb-4 w-full">
                            <label>Type de Questions:</label>
                            <select
                                className="w-full border p-2 rounded-md"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                            >
                                <option value="" disabled>
                                    Sélectionnez le type de questions
                                </option>
                                <option value="1">Questions courts</option>
                                <option value="2">Questions à choix multiples</option>
                            </select>
                        </div>
                        <div className="mb-4 w-full">
                            <label>Nombre de Questions:</label>
                            <input
                                type="number"
                                className="w-full border p-2 rounded-md"
                                value={selectedCount}
                                onChange={(e) => setSelectedCount(e.target.value)}
                                min="1"
                            />
                        </div>

                        <button
                            className="bg-blue-500 w-full text-white py-2 px-4 rounded-md hover:bg-blue-800"
                            onClick={activeTopTab === 'fichier' ? importPDF : generateQuestion}
                            style={{ fontSize: 16, fontWeight: 'bold' }}
                        >
                            {activeTopTab === 'fichier' ? 'Importer le PDF' : 'Générer des Questions'}
                        </button>
                    </div>
                </div>
            </div>

            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-opacity-50 bg-gray-300">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-700"></div>
                        <p className="mt-2 text-sm">Chargement en cours...</p>
                    </div>
                </div>
            )}

            <div className="p-4 md:p-12">
                <div className="bg-gray-400 rounded-2xl">
                    <div className="flex border-b border-gray-300">
                        <button
                            className={`px-8 py-5 ${activeBottomTab === 'questions' ? 'text-blue-900 ' : 'text-gray-900'}`}
                            onClick={() => switchBottomTab('questions')}
                            style={{ fontWeight: 'bold', fontSize: '16px' }}
                        >
                            Questions Générées
                        </button>
                        <button
                            className={`px-8 py-5 ml-4 ${activeBottomTab === 'favory' ? 'text-blue-900 ' : 'text-gray-900'}`}
                            onClick={() => switchBottomTab('favory')}
                            style={{ fontWeight: 'bold', fontSize: '16px' }}
                        >
                            Collections
                        </button>
                        <button
                            className={`px-8 py-5 ml-4 ${activeBottomTab === 'history' ? 'text-blue-900 ' : 'text-gray-900'}`}
                            onClick={() => switchBottomTab('history')}
                            style={{ fontWeight: 'bold', fontSize: '16px' }}
                        >
                            Historiques
                        </button>
                    </div>
                    <div className="p-4">
                        {activeBottomTab === 'questions' ? questionGenere() : null}
                        {activeBottomTab === 'questionsFichier' ? questionGenereFichier() : null}
                        {activeBottomTab === 'favory' ? favorites() : null}
                        {activeBottomTab === 'history' ? historiques() : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageEnseignant;