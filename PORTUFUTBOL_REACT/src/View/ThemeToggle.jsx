<<<<<<< HEAD
import ThemeController from "../Controller/ThemeController";

export default function ThemeToggle({ toggleTheme, translate }) {

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
                ? translate("lightMode")
                : translate("darkMode")
            }

        </button>

    );
}
=======
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
>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
