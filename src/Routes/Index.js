import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../Pages/Auth/Login";
import HomePageEnseignant from "../Pages/PageEnseignant/HomePageEnseignant";
import ExamPageEnseignant from "../Pages/PageEnseignant/ExamPageEnseignant";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Login />
            },
            {
                path: 'homePageEnseignant',
                element: <HomePageEnseignant />
            },
            {
                path: 'examen-enseignant',
                element: <ExamPageEnseignant />
            }
        ]
    }
])

export default router