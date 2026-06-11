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
