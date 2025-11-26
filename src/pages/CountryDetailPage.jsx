import { useParams, Link } from 'react-router-dom';
import useFetchCountry from "../hooks/useFetchCountry"; // Importamos el hook 

function CountryDetailPage() {
    const { code } = useParams();
    const { country, loading, error } = useFetchCountry(code); // Utilizamos el hook

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
