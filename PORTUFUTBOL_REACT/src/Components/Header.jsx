import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import AudioReaderController from "../Controller/AudioReaderController";

export default function Header({
    toggleTheme,
    colorBlindMode,
    setColorBlindMode
}) {
    const [openColorMenu, setOpenColorMenu] = useState(false);

    const cambiarModo = (modo) => {
        setColorBlindMode(modo);
        setOpenColorMenu(false);
    };

    const [isReading, setIsReading] = useState(false);

    const toggleReader = () => {
        if (isReading) {
            AudioReaderController.stopReading();
            setIsReading(false);
        } else {
            AudioReaderController.readPage();
            setIsReading(true);
        }
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src="/src/assets/logos/logo.jpg"
                    alt="Portufutbol"
                    className="logo-image"
                />

                <h1 className="logo-title">
                    PORTUFUTBOL
                </h1>
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
                    🛒 Entrega Inmediata
                </button>

                <div className="colorblind-container">
                    <button
                        className="access-btn colorblind-btn"
                        title="Modo Daltonismo"
                        onClick={() => setOpenColorMenu(!openColorMenu)}
                    >
                        👁️
                    </button>

                    {openColorMenu && (
                        <div className="colorblind-menu">
                            <button
                                className={colorBlindMode === "normal" ? "active" : ""}
                                onClick={() => cambiarModo("normal")}
                            >
                                Visualización normal
                            </button>

                            <button
                                className={colorBlindMode === "deuteranopia" ? "active" : ""}
                                onClick={() => cambiarModo("deuteranopia")}
                            >
                                Deuteranopia
                            </button>

                            <button
                                className={colorBlindMode === "tritanopia" ? "active" : ""}
                                onClick={() => cambiarModo("tritanopia")}
                            >
                                Tritanopia
                            </button>

                            <button
                                className={colorBlindMode === "protanopia" ? "active" : ""}
                                onClick={() => cambiarModo("protanopia")}
                            >
                                Protanopia
                            </button>
                        </div>
                    )}
                </div>

                <button
                    className={`access-btn audio-btn ${isReading ? "active" : ""}`}
                    title="Lector de texto"
                    onClick={toggleReader}
                >
                    {isReading ? "⏹️" : "🔊"}
                </button>

                <ThemeToggle toggleTheme={toggleTheme} />
            </div>
        </header>
    );
}
