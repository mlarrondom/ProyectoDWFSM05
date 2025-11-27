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
            {/* Título + total de países */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-0">Explorador de países por continente</h1>
                <span className="badge bg-secondary">
                    Total de países: {countries.length}
                </span>
            </div>

            {/* Grid de regiones */}
            <div className="row g-3">
                {regions.map((region) => {
                    // Lista de países solo de este continente
                    const countriesInRegion = countries.filter(
                        (country) => country.region === region
                    );

                    return (
                        <div key={region} className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                {/* Botón que abre/cierra la región */}
                                <button
                                    type="button"
                                    className="btn btn-dark w-100 text-start"
                                    onClick={() => toggleRegion(region)}
                                >
                                    {region}{' '}
                                    <span className="badge bg-light text-dark ms-2">
                                        {countriesInRegion.length}
                                    </span>
                                </button>

                                {/* Lista de países de este continente (solo si está expandida) */}
                                {expandedRegion === region && (
                                    <ul className="list-group list-group-flush">
                                        {countriesInRegion.map((country) => (
                                            <li
                                                key={country.cca3}
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                <Link
                                                    to={`/countries/${country.cca3}`}
                                                    className="text-decoration-none"
                                                >
                                                    {country.name?.common}{' ('}{country.flag}{')'}
                                                </Link>
                                                <span className="badge bg-outline-secondary">
                                                    {country.cca3}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default CountriesPage;
