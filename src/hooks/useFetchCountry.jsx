// Hook para consumir la API y obtener el detalle de un país específico

import { useEffect, useState } from 'react';

function useFetchCountry(code) {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCountry() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,region,subregion,capital,population,flags,flag`
                );

                if (!response.ok) {
                    throw new Error(
                        'No se pudo cargar la información del país'
                    );
                }

                const data = await response.json();
                const countryData = Array.isArray(data) ? data[0] : data;
                setCountry(countryData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCountry();
    }, [code]);

    return { country, loading, error };
}

export default useFetchCountry;
