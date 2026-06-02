export default function Header({
  cambiarVista,
  buscar,
  setBuscar,
  toggleTheme,
  tema
}) {
  return (
    <header className="header">

      <div className="logo">
        PORTUFUTBOL
      </div>

      <nav>
        <button onClick={() => cambiarVista("inicio")}>
          Inicio
        </button>

        <button onClick={() => cambiarVista("productos")}>
          Productos
        </button>

        <button onClick={() => cambiarVista("categorias")}>
          Categorías
        </button>
      </nav>

      <input
        type="text"
        placeholder="Buscar productos..."
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />

      <button
        className="themeButton"
        onClick={toggleTheme}
      >
        {tema === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
      </button>

    </header>
  );
}