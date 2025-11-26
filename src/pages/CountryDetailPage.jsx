import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetailPage() {
    const { code } = useParams();

    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCountry() {
            try {
                setLoading(true);
                setError(null);

                // Llamado a la API pero especificando codigo de país específico
                const response = await fetch(
                    `https://restcountries.com/v3.1/alpha/${code}?fields=cca3,name,region,subregion,capital,population,flags,flag`
                );

                if (!response.ok) {
                    throw new Error('Error al cargar el detalle del país');
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

    if (loading) {
        return <p>Cargando detalle del país...</p>;
    }

    if (error) {
        return <p>Ocurrió un error: {error}</p>;
    }

    if (!country) {
        return <p>No se encontró información para este país.</p>;
    }

    const capital = country.capital?.[0] ?? 'No registrada';

    // Se despliegan los datos seleccionados en la página
    return (
        <section>
            <Link to="/countries">← Volver al listado</Link>

            <h1>
                {country.name?.common} - {country.flag}
            </h1>

            <p>
                <strong>Código:</strong> {country.cca3}
            </p>
            <p>
                <strong>Región:</strong> {country.region}
            </p>
            <p>
                <strong>Subregión:</strong> {country.subregion}
            </p>
            <p>
                <strong>Capital:</strong> {capital}
            </p>
            <p>
                <strong>Población:</strong>{' '}
                {country.population?.toLocaleString('es-CL')}
            </p>

            {country.flags?.png && (
                <img
                    src={country.flags.png}
                    alt={country.name?.common}
                    style={{
                        marginTop: '1rem',
                        maxWidth: '300px',
                        display: 'block',
                    }}
                />
            )}
        </section>
    );
}

export default CountryDetailPage;
