import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesPage() {
    // Se definen los 3 estados posibles --> Listado de países, cargando, error
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedRegion, setExpandedRegion] = useState(null);

    useEffect(() => {
        // Función asincrónica para cargar países
        async function fetchCountries() {
            try {
                // Inicialmente se definen los estados como cargando
                setLoading(true);
                setError(null);

                // Se espera la respuesta de la API, si hay error, se muestra el mensaje
                const response = await fetch(
                    'https://restcountries.com/v3.1/all?fields=cca3,name,region,flag'
                );
                if (!response.ok) {
                    throw new Error('Error al cargar los países');
                }

                // Se crea la constante data que tiene la respuesta de la API
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
                                                
                                                {country.name?.common}{' ('}{country.flag}{')'} 
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
