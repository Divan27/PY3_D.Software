import { useEffect, useState } from "react";
import InicioView from "./View/InicioView";
import ThemeController from "./Controller/ThemeController";

function App() {

    const controller = ThemeController.getInstance();

    const [theme, setTheme] = useState(
        controller.getTheme()
    );

    useEffect(() => {

        document.body.className = theme;

    }, [theme]);

    const toggleTheme = () => {

        controller.toggleTheme();

        setTheme(
            controller.getTheme()
        );

    };

    return (

        <div className={`app ${theme}`}>

            <InicioView
                theme={theme}
                toggleTheme={toggleTheme}
            />

        </div>

    );

}

export default App;