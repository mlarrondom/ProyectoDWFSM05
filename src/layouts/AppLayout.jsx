import { Link, Outlet } from "react-router-dom"; // Importar desde librería de React Router

function AppLayout() {
  return (
    <div>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Inicio</Link>
          <Link to="/countries">Países</Link>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        {/* Aquí React insertará las páginas según la ruta */}
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
