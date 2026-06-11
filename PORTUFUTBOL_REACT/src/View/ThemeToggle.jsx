import ThemeController from "../Controller/ThemeController";

export default function ThemeToggle({ toggleTheme }) {

    const currentTheme =
        ThemeController
            .getInstance()
            .getTheme();

    return (

        <button
            className="access-btn theme-btn"
            onClick={toggleTheme}
        >

            {currentTheme === "dark"
                ? "☀️ MODO CLARO"
                : "🌙 MODO OSCURO"
            }

        </button>

    );
}