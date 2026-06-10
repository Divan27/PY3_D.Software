import ThemeToggle from "./ThemeToggle";

export default function Header({ toggleTheme }) {

    return (

        <header className="header">

            <div className="logo-container">

                <img
                    src="/src/assets/logos/logo.jpg"
                    alt="Portufutbol"
                    className="logo-image"
                />

                <h1 className="logo-title">
                    PORTUFUTBOL
                </h1>

            </div>

            <div className="football-search">

                <div className="football-icon">

                    ⚽

                </div>

                <input
                    type="text"
                    placeholder="Buscar uniformes, camisetas, tacos..."
                />

            </div>

            <div className="header-actions">

                <button className="delivery-btn">
                    🛒 Entrega Inmediata
                </button>

                <button
                    className="access-btn colorblind-btn"
                    title="Modo Daltonismo"
                >
                    👁️
                </button>

                <button
                    className="access-btn audio-btn"
                    title="Modo Auditivo"
                >
                    🔊
                </button>

                <ThemeToggle
                    toggleTheme={toggleTheme}
                />

            </div>

        </header>

    );

}