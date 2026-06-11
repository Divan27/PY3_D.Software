import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import AudioReaderController from "../Controller/AudioReaderController";

export default function Header({
    toggleTheme,
    toggleLanguage,
    language,
    translate,
    colorBlindMode,
    setColorBlindMode,
    searchTerm,
    setSearchTerm
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
            AudioReaderController.readPage(language);
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

                <div className="logo-text">
                    <span className="logo-main">PORTU</span>
                    <span className="logo-secondary">FUTBOL</span>
                </div>

            </div>

            <div className="football-search">
                <div className="football-icon">⚽</div>

                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder={translate("searchPlaceholder")}
                />
            </div>

            <div className="header-actions">

                <button className="delivery-btn">
                    {translate("immediateDelivery")}
                </button>

                <div className="colorblind-container">

                    <button
                        className="access-btn colorblind-btn"
                        onClick={() => setOpenColorMenu(!openColorMenu)}
                    >
                        {translate("colorBlindMode")}
                    </button>

                    {openColorMenu && (
                        <div className="colorblind-menu">

                            <button
                                className={colorBlindMode === "normal" ? "active" : ""}
                                onClick={() => cambiarModo("normal")}
                            >
                                {translate("normalView")}
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
                    onClick={toggleReader}
                >
                    {isReading
                        ? translate("stopAudio")
                        : translate("audioMode")
                    }
                </button>

                <button
                    className="access-btn language-btn"
                    onClick={toggleLanguage}
                >
                    {translate("languageButton")}
                </button>

                <ThemeToggle
                    toggleTheme={toggleTheme}
                    translate={translate}
                />

            </div>

        </header>
    );
}
