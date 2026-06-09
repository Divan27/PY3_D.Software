import ThemeController
from "../Controller/ThemeController";

export default function ThemeToggle() {

    const cambiarTema = () => {

        const controller =
            ThemeController.getInstance();

        controller.toggleTheme();

        window.location.reload();
    };

    return (

        <button
            className="theme-btn"
            onClick={cambiarTema}
        >
            🌙
        </button>

    );
}