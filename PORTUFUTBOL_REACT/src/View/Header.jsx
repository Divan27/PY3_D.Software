import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import AudioReaderController from "../Controller/AudioReaderController";
import LanguageController from "../Controller/LanguageController";

export default function Header({
    toggleTheme,
    toggleLanguage,
    colorBlindMode,
    setColorBlindMode
}) {

    const [openColorMenu, setOpenColorMenu] = useState(false);

    const [isReading, setIsReading] = useState(false);

    const cambiarModo = (modo) => {

        setColorBlindMode(modo);

        setOpenColorMenu(false);
    };

    const toggleReader = () => {

        if (isReading) {

            AudioReaderController.stopReading();

            setIsReading(false);

        } else {

            AudioReaderController.readPage();

            setIsReading(true);
        }
    };

    const currentLanguage =
    LanguageController
        .getInstance()
        .getLanguage();

    return (

        <header className="header">

            <div className="logo-container">

                <img
                    src="/src/assets/logos/logo.jpg"
                    alt="Portufutbol"
                    className="logo-image"
                />

                <div className="logo-text">

                    <span className="logo-main">
                        PORTU
                    </span>

                    <span className="logo-secondary">
                        FUTBOL
                    </span>

                </div>

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
                    🛒 ENTREGA INMEDIATA
                </button>

                <div className="colorblind-container">

                    <button
                        className="access-btn colorblind-btn"
                        onClick={() =>
                            setOpenColorMenu(!openColorMenu)
                        }
                    >
                        🎨 MODO DALTÓNICO
                    </button>

                    {
                        openColorMenu && (

                            <div className="colorblind-menu">

                                <button
                                    className={
                                        colorBlindMode === "normal"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        cambiarModo("normal")
                                    }
                                >
                                    Visualización normal
                                </button>

                                <button
                                    className={
                                        colorBlindMode === "deuteranopia"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        cambiarModo("deuteranopia")
                                    }
                                >
                                    Deuteranopia
                                </button>

                                <button
                                    className={
                                        colorBlindMode === "tritanopia"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        cambiarModo("tritanopia")
                                    }
                                >
                                    Tritanopia
                                </button>

                                <button
                                    className={
                                        colorBlindMode === "protanopia"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        cambiarModo("protanopia")
                                    }
                                >
                                    Protanopia
                                </button>

                            </div>

                        )
                    }

                </div>

                <button
                    className={`access-btn audio-btn ${
                        isReading ? "active" : ""
                    }`}
                    onClick={toggleReader}
                >
                    {
                        isReading
                            ? "⏹️ DETENER AUDIO"
                            : "🔊 MODO AUDITIVO"
                    }
                </button>

                <button
                    className="access-btn language-btn"
                    onClick={toggleLanguage}
                >

                    {
                        currentLanguage === "es"

                        ? "🇺🇸 ENGLISH"

                        : "🇪🇸 ESPAÑOL"
                    }

                </button>

                <ThemeToggle
                    toggleTheme={toggleTheme}
                />

            </div>

        </header>
    );
}