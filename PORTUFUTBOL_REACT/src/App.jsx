import { useEffect, useState } from "react";
import InicioView from "./View/InicioView";
import ThemeController from "./Controller/ThemeController";
import LanguageController from "./Controller/LanguageController";

function App() {
    const themeController = ThemeController.getInstance();
    const languageController = LanguageController.getInstance();

    const [theme, setTheme] = useState(themeController.getTheme());
    const [colorBlindMode, setColorBlindMode] = useState("normal");
    const [language, setLanguage] = useState(languageController.getLanguage());

    useEffect(() => {
        document.body.className = `${theme} ${colorBlindMode}`;
    }, [theme, colorBlindMode]);

    const toggleTheme = () => {
        themeController.toggleTheme();
        setTheme(themeController.getTheme());
    };

    const toggleLanguage = () => {
        languageController.toggleLanguage();
        setLanguage(languageController.getLanguage());
    };

    const translate = (key) => languageController.translate(key);

    return (
        <div className={`app ${theme} ${colorBlindMode}`}>
            <InicioView
                theme={theme}
                language={language}
                translate={translate}
                toggleTheme={toggleTheme}
                toggleLanguage={toggleLanguage}
                colorBlindMode={colorBlindMode}
                setColorBlindMode={setColorBlindMode}
            />
        </div>
    );
}

export default App;
