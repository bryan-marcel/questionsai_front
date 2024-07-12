import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import Context from './Context/Context';
import Footer from './Components/Footer';
import NavigationEnseignant from './Components/Enseignant/NavigationEnseignant/NavigationEnseignant';
import ExamNavigationEnseignant from './Components/Enseignant/NavigationExamenEnseignant/ExamenNavigation';

function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/'];

  // Ajout des routes pour les headers
  const ExamHeaders = ['/examen-enseignant'];

  // Vérification pour afficher le bon header
  const showHeader = !noHeaderFooterRoutes.includes(location.pathname);
  const isExamHeader = ExamHeaders.includes(location.pathname);

  return (
    <>
      <Context.Provider value={''}>
        <ToastContainer autoClose={1500} position='top-center' />
        {/* Affiche NavigationEnseignant sauf si c'est '/examen-enseignant' */}
        {showHeader && !isExamHeader && <NavigationEnseignant />}
        {/* Affiche ExamNavigationEnseignant si c'est '/examen-enseignant' */}
        {isExamHeader && <ExamNavigationEnseignant />}
        <main className='min-h-[calc(100vh-20px)]'>
          <Outlet />
        </main>
        {showHeader && <Footer />}
      </Context.Provider>
    </>
  );
}

export default App;
