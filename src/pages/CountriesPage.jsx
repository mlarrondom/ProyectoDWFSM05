import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchCountries from '../hooks/useFetchCountries'; // Importamos el hook creado para utilizarlo acá

function CountriesPage() {
    const { countries, loading, error } = useFetchCountries(); // Utilizamos el hoook
    const [expandedRegion, setExpandedRegion] = useState(null);

    // Mensaje a mostrar en pantalla si está cargando o si hay un error
    if (loading) {
        return <p>Cargando países...</p>;
    }

    if (error) {
        return <p>Ocurrió un error: {error}</p>;
    }

    // Definir arreglo de continentes para mostrar los países agrupados
    const regions = Array.from(
        new Set(
            countries.map((country) => country.region).filter(Boolean) // saca null/undefined/""
        )
    );

    // Permite mantener expandido solo el continente que se seleccionó
    function toggleRegion(region) {
        if (expandedRegion === region) {
            setExpandedRegion(null); // si haces clic en el mismo → colapsa
        } else {
            setExpandedRegion(region); // si haces clic en otro → abre ese
        }
    }

    // En caso contrario, se carga el listado de países con enlace a cada uno de ellos
    return (
        <section>
            <h1>Listado de países</h1>
            <p>Total de países: {countries.length}</p>

            {/* Agrupar los países por región/continente */}
            {regions.map((region) => (
                <div key={region}>
                    <button onClick={() => toggleRegion(region)}>
                        {region} 🔽
                    </button>

                    {expandedRegion === region && (
                        <ul>
                            {/* Mostrar solo los países del continente seleccionado */}
                            <ul>
                                {countries
                                    .filter(
                                        (country) => country.region === region
                                    )
                                    .map((country) => (
                                        <li key={country.cca3}>
                                            <Link
                                                to={`/countries/${country.cca3}`}
                                            >
                                                {country.name?.common}
                                                {' ('}
                                                {country.flag}
                                                {')'}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </ul>
                    )}
                </div>
            ))}
        </section>
    );
}

export default CountriesPage;
