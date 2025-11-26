import React from "react"; // Importa React (necesario para JSX)
import ReactDOM from "react-dom/client"; // Importa ReactDOM para renderizar en el navegador
import {
    createBrowserRouter, // Función para crear el router basado en la URL del navegador
    RouterProvider, // Componente que conecta React Router con tu app
} from "react-router-dom";

// Importar layout definido y páginas
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import "./index.css";

// Definimos el "mapa" de rutas de la aplicación
const router = createBrowserRouter([
    {
        // Se define la URL padre
        path: "/",
        element: <AppLayout />,

        // Acá se definen las URL hijas, que se mostrarán en el Outlet de la ruta padre
        children: [
            // Definir las páginas que mostrará según la URL
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/countries",
                element: <CountriesPage />,
            },
            {
                path: "/countries/:code",
                element: <CountryDetailPage />,
            },
        ],
    },
]);

// Esta es la parte donde React se "monta" en el HTML
ReactDOM.createRoot(document.getElementById("root")).render(
    // Busca el <div id="root"> en index.html
    <RouterProvider router={router} />
);
