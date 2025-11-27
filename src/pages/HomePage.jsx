import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const [selectedCode, setSelectedCode] = useState('');

    // Listado acotado de países para visualizar, solo a modo de ejemplo en página de inicio
    const countriesOptions = [
        { code: 'CHL', name: 'Chile' },
        { code: 'ARG', name: 'Argentina' },
        { code: 'BRA', name: 'Brasil' },
        { code: 'USA', name: 'Estados Unidos' },
        { code: 'CAN', name: 'Canadá' },
        { code: 'ESP', name: 'España' },
        { code: 'FRA', name: 'Francia' },
        { code: 'DEU', name: 'Alemania' },
        { code: 'JPN', name: 'Japón' },
    ];

    // Permite ver el detalle del país seleccionado
    function handleGoToCountry() {
        if (!selectedCode) return;
        navigate(`/countries/${selectedCode}`);
    }

    return (
        <section className="row align-items-center">
            <div className="col-12 col-md-7 mb-4 mb-md-0">
                <img
                    src="https://img.freepik.com/vector-premium/mapamundi-nombres-paises_172784-395.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Mapa del mundo"
                    className="img-fluid rounded shadow-sm"
                />
            </div>

            <div className="col-12 col-md-5">
                <h1 className="h3 mb-3">Explorador de Países</h1>
                <p className="mb-4">
                    Usa el mapa como referencia y selecciona un país en el
                    listado para ver su información detallada.
                </p>

                <div className="mb-3">
                    <label className="form-label">Selecciona un país</label>
                    <select
                        className="form-select"
                        value={selectedCode}
                        onChange={(e) => setSelectedCode(e.target.value)}
                    >
                        <option value="">Elige un país…</option>
                        {countriesOptions.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleGoToCountry}
                    disabled={!selectedCode}
                >
                    Ver detalle del país
                </button>
            </div>
        </section>
    );
}

export default HomePage;
