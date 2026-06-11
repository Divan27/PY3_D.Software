import { useEffect, useState } from "react";
import InicioView from "./View/InicioView";
import ThemeController from "./Controller/ThemeController";
import LanguageController from "./Controller/LanguageController";

function App() {
<<<<<<< HEAD
    const themeController = ThemeController.getInstance();
    const languageController = LanguageController.getInstance();

    const [theme, setTheme] = useState(themeController.getTheme());
    const [colorBlindMode, setColorBlindMode] = useState("normal");
    const [language, setLanguage] = useState(languageController.getLanguage());
=======
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
>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b

    useEffect(() => {
        document.body.className = `${theme} ${colorBlindMode}`;
    }, [theme, colorBlindMode]);

    const toggleTheme = () => {
<<<<<<< HEAD
        themeController.toggleTheme();
        setTheme(themeController.getTheme());
    };

    const toggleLanguage = () => {
        languageController.toggleLanguage();
        setLanguage(languageController.getLanguage());
    };

    const translate = (key) => languageController.translate(key);

=======
        controller.toggleTheme();
        setTheme(controller.getTheme());
    };

>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
    return (
        <div className={`app ${theme} ${colorBlindMode}`}>
            <InicioView
                theme={theme}
<<<<<<< HEAD
                language={language}
                translate={translate}
=======
>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
                toggleTheme={toggleTheme}
                toggleLanguage={toggleLanguage}
                colorBlindMode={colorBlindMode}
                setColorBlindMode={setColorBlindMode}
<<<<<<< HEAD
=======
               
>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
            />
        </div>
    );
}

export default App;
