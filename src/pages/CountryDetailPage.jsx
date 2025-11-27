import { useParams, Link } from 'react-router-dom';
import useFetchCountry from '../hooks/useFetchCountry'; // Importamos el hook

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
            <div className="mb-3">
                <Link
                    to="/countries"
                    className="btn btn-outline-secondary btn-sm"
                >
                    ← Volver al listado
                </Link>
            </div>

            <div className="card shadow-sm">
                <div className="row g-0">
                    <div className="col-12 col-md-4 d-flex align-items-stretch">
                        <img
                            src={country.flags?.png}
                            alt={country.name?.common}
                            className="img-fluid w-100 h-100 object-fit-cover rounded-start"
                        />
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <h1 className="h3 card-title">
                                {country.flag} {country.name?.common}
                            </h1>
                            <h2 className="h6 text-muted">
                                Código: {country.cca3}
                            </h2>

                            <hr />

                            <div className="row mb-2">
                                <div className="col-6">
                                    <p className="mb-1">
                                        <strong>Región:</strong>{' '}
                                        {country.region}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Subregión:</strong>{' '}
                                        {country.subregion ?? '—'}
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="mb-1">
                                        <strong>Capital:</strong> {capital}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Población:</strong>{' '}
                                        {country.population?.toLocaleString(
                                            'es-CL'
                                        )}
                                    </p>
                                </div>
                            </div>

                            <p className="text-muted mb-0">
                                Información obtenida desde la API de REST
                                Countries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountryDetailPage;
