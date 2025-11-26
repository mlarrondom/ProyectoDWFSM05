// Este hook permite utilizarlo desde otras partes para consumir la API, devolverá el listado de países, cargando o error. Esto nos permite que el fetch no se utilice desde CountriesPage, sino que desde ahí se utilizará este hook.

import { useEffect, useState } from 'react';

function useFetchCountries() {
    // Se definen los 3 estados posibles --> Listado de países, cargando, error
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCountries() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    'https://restcountries.com/v3.1/all?fields=cca3,name,region,flag'
                );

                if (!response.ok) {
                    throw new Error('Error al cargar los países');
                }

                const data = await response.json();
                setCountries(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCountries();
    }, []);

    return { countries, loading, error };
}

export default useFetchCountries;
