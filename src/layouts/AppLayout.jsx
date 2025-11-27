import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Explorador de Países
          </Link>

          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/countries">
                  Países
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Acá se mostrarán las páginas según la ruta sleeccionada */}
      <main className="container my-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
