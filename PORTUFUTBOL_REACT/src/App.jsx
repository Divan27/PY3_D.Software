import { useEffect, useState } from "react";
import InicioView from "./View/InicioView";
import ThemeController from "./Controller/ThemeController";
import LanguageController from "./Controller/LanguageController";

function App() {
    const controller = ThemeController.getInstance();

    const [theme, setTheme] = useState(controller.getTheme());
    const [colorBlindMode, setColorBlindMode] = useState("normal");
    const languageController = LanguageController.getInstance();

    const [language,setLanguage] = useState(languageController.getLanguage());

    const toggleLanguage = () => {

    languageController.toggleLanguage();

    setLanguage(
        languageController.getLanguage()
    );
};

    useEffect(() => {
        document.body.className = `${theme} ${colorBlindMode}`;
    }, [theme, colorBlindMode]);

    const toggleTheme = () => {
        controller.toggleTheme();
        setTheme(controller.getTheme());
    };

    return (
        <div className={`app ${theme} ${colorBlindMode}`}>
            <InicioView
                theme={theme}
                toggleTheme={toggleTheme}
                toggleLanguage={toggleLanguage}
                colorBlindMode={colorBlindMode}
                setColorBlindMode={setColorBlindMode}
               
            />
        </div>
    );
}

export default App;
