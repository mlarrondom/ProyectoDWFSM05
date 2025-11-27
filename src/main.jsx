//Importar Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import React from 'react'; // Importa React (necesario para JSX)
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar en el navegador
import {
    createBrowserRouter, // Función para crear el router basado en la URL del navegador
    RouterProvider, // Componente que conecta React Router con tu app
} from 'react-router-dom';

// Importar layout definido y páginas
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import CountriesPage from './pages/CountriesPage';
import CountryDetailPage from './pages/CountryDetailPage';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary'; // Importamos el Error Boundary

// Definimos el "mapa" de rutas de la aplicación
const router = createBrowserRouter([
    {
        // Se define la URL padre
        path: '/',
        element: <AppLayout />,

        // Acá se definen las URL hijas, que se mostrarán en el Outlet de la ruta padre
        children: [
            // Definir las páginas que mostrará según la URL
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/countries',
                element: (
                    <ErrorBoundary>
                        <CountriesPage />
                    </ErrorBoundary>
                ),
            },
            {
                path: '/countries/:code',
                element: (
                    <ErrorBoundary>
                        <CountryDetailPage />
                    </ErrorBoundary>
                ),
            },
        ],
    },
]);

// Esta es la parte donde React se "monta" en el HTML y se considera el ErrorBoundary
ReactDOM.createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
        <RouterProvider router={router} />
    </ErrorBoundary>
);
