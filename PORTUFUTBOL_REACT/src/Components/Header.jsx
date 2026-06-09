import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import AccessibilityMenu from "./AccessibilityMenu";

import logo from "../assets/logos/logo.jpg";

export default function Header() {

    return (

        <header className="header">

            <div className="logo-container">

                <button className="menu-btn">
                    ☰
                </button>

                <div
                    className="logo"
                    onClick={() => window.location.reload()}
                >
                    <img src={logo} alt="logo" />

                    <h1>PORTUFUTBOL</h1>
                </div>

            </div>

            <SearchBar />

            <div className="header-actions">

                <button className="delivery-btn">
                    🚚 Entrega inmediata
                </button>

                <ThemeToggle />

                <AccessibilityMenu />

            </div>

        </header>

    );
}