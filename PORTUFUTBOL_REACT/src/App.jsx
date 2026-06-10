import { useEffect, useState } from "react";
import InicioView from "./View/InicioView";
import ThemeController from "./Controller/ThemeController";

function App() {
    const controller = ThemeController.getInstance();

    const [theme, setTheme] = useState(controller.getTheme());
    const [colorBlindMode, setColorBlindMode] = useState("normal");

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
                colorBlindMode={colorBlindMode}
                setColorBlindMode={setColorBlindMode}
            />
        </div>
    );
}

export default App;
