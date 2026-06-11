import { useState } from "react";

import premier from "../assets/logos/premier.png";
import seriea from "../assets/logos/seriea.jpg";
import laliga from "../assets/logos/laliga.png";
import bundesliga from "../assets/logos/bundesliga.png";
import ligue1 from "../assets/logos/ligue1.png";
import ligaprofesional from "../assets/logos/ligaprofesional.png";
import mls from "../assets/logos/mls.jpg";
import ligapromerica from "../assets/logos/ligapromerica.jpg";

import alemania from "../assets/logos/alemania.png";
import austria from "../assets/logos/austria.png";
import belgica from "../assets/logos/belgica.png";
import croacia from "../assets/logos/croacia.png";
import dinamarca from "../assets/logos/dinamarca.png";
import escocia from "../assets/logos/escocia.png";
import eslovaquia from "../assets/logos/eslovaquia.png";
import espana from "../assets/logos/espana.png";
import francia from "../assets/logos/francia.png";
import inglaterra from "../assets/logos/inglaterra.png";
import irlanda from "../assets/logos/irlanda.png";
import italia from "../assets/logos/italia.png";
import noruega from "../assets/logos/noruega.png";
import paisesbajos from "../assets/logos/paisesbajos.png";
import portugal from "../assets/logos/portugal.png";
import turquia from "../assets/logos/turquia.png";
import costarica from "../assets/logos/cr.png";

import arsenal from "../assets/clubes/arsenal.png";
import astonvilla from "../assets/clubes/astonvilla.png";
import blackburn from "../assets/clubes/blackburn.png";
import chelsea from "../assets/clubes/chelsea.png";
import everton from "../assets/clubes/everton.png";
import fulham from "../assets/clubes/fulham.png";
import leicester from "../assets/clubes/leicester.png";
import liverpool from "../assets/clubes/liverpool.png";
import manchestercity from "../assets/clubes/manchestercity.png";
import manchesterunited from "../assets/clubes/manchesterunited.png";
import newcastle from "../assets/clubes/newcastle.png";
import tottenham from "../assets/clubes/tottenham.png";
import atleticomadrid from "../assets/clubes/atleticomadrid.png";
import barcelona from "../assets/clubes/barcelona.png";
import cadiz from "../assets/clubes/cadiz.png";
import espanyol from "../assets/clubes/espanyol.png";
import getafe from "../assets/clubes/getafe.png";
import girona from "../assets/clubes/girona.png";
import realmadrid from "../assets/clubes/realmadrid.png";
import sevilla from "../assets/clubes/sevilla.png";
import valencia from "../assets/clubes/valencia.png";
import psg from "../assets/clubes/psg.png";
import olympique from "../assets/clubes/olympique.png";
import lille from "../assets/clubes/lille.png";
import monaco from "../assets/clubes/monaco.png";
import inter from "../assets/clubes/inter.png";

export default function Sidebar({ translate, onAddToCart }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSection, setOpenSection] = useState("clubs");
    const [openLeague, setOpenLeague] = useState("Premier League");

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? "" : section);
    };

    const addMenuProduct = (name, price, image) => {
        onAddToCart({
            name,
            price,
            image
        });
    };

    const clubPrice = "$59.99";
    const nationalTeamPrice = "$54.99";
    const specialPrice = "$69.99";
    const shoePrice = "$129.99";
    const kidsPrice = "$39.99";

    const ligas = [
        { nombre: "Premier League", logo: premier },
        { nombre: "Serie A", logo: seriea },
        { nombre: "LaLiga", logo: laliga },
        { nombre: "Bundesliga", logo: bundesliga },
        { nombre: "Ligue 1", logo: ligue1 },
        { nombre: "Liga Profesional", logo: ligaprofesional },
        { nombre: "Major League Soccer", logo: mls },
        { nombre: "Liga Promérica", logo: ligapromerica }
    ];

    const equiposPorLiga = {
        "Premier League": [
            { nombre: "Arsenal", logo: arsenal },
            { nombre: "Aston Villa", logo: astonvilla },
            { nombre: "Blackburn", logo: blackburn },
            { nombre: "Chelsea", logo: chelsea },
            { nombre: "Everton", logo: everton },
            { nombre: "Fulham", logo: fulham },
            { nombre: "Leicester", logo: leicester },
            { nombre: "Liverpool", logo: liverpool },
            { nombre: "Manchester City", logo: manchestercity },
            { nombre: "Manchester United", logo: manchesterunited },
            { nombre: "Newcastle", logo: newcastle },
            { nombre: "Tottenham", logo: tottenham }
        ],
        "LaLiga": [
            { nombre: "Atlético Madrid", logo: atleticomadrid },
            { nombre: "Barcelona", logo: barcelona },
            { nombre: "Cádiz", logo: cadiz },
            { nombre: "Espanyol", logo: espanyol },
            { nombre: "Getafe", logo: getafe },
            { nombre: "Girona", logo: girona },
            { nombre: "Real Madrid", logo: realmadrid },
            { nombre: "Sevilla", logo: sevilla },
            { nombre: "Valencia", logo: valencia }
        ],
        "Ligue 1": [
            { nombre: "Paris Saint-Germain", logo: psg },
            { nombre: "Olympique de Marseille", logo: olympique },
            { nombre: "Lille", logo: lille },
            { nombre: "Monaco", logo: monaco }
        ],
        "Major League Soccer": [
            { nombre: "Inter Miami", logo: inter }
        ]
    };

    const selecciones = [
        { nombre: "ALEMANIA", logo: alemania },
        { nombre: "AUSTRIA", logo: austria },
        { nombre: "BÉLGICA", logo: belgica },
        { nombre: "CROACIA", logo: croacia },
        { nombre: "DINAMARCA", logo: dinamarca },
        { nombre: "ESCOCIA", logo: escocia },
        { nombre: "ESLOVAQUIA", logo: eslovaquia },
        { nombre: "ESPAÑA", logo: espana },
        { nombre: "FRANCIA", logo: francia },
        { nombre: "INGLATERRA", logo: inglaterra },
        { nombre: "IRLANDA", logo: irlanda },
        { nombre: "ITALIA", logo: italia },
        { nombre: "NORUEGA", logo: noruega },
        { nombre: "PAÍSES BAJOS", logo: paisesbajos },
        { nombre: "PORTUGAL", logo: portugal },
        { nombre: "TURQUÍA", logo: turquia },
        { nombre: "COSTA RICA", logo: costarica }
    ];

    const especiales = ["Mundial NA 2026", "Copa Oro 2025", "Mundial de Clubes", "Eurocopa 2024", "Champions League"];
    const zapatosFutbol = [translate("nikeCleats"), translate("adidasCleats"), translate("pumaCleats"), translate("newBalanceCleats"), translate("mizunoCleats"), translate("sgCleats"), translate("agCleats"), translate("budgetCleats")];
    const futbolSala = [translate("futsalNike"), translate("futsalAdidas"), translate("futsalJoma"), translate("futsalMizuno"), translate("futsalPuma"), translate("futsalDiadora"), translate("futsalNewBalance")];
    const paraNinos = [translate("naturalGrassCleats"), translate("futsalTennis"), translate("soccerUniforms")];

    return (
        <>
            <button
                className="side-menu-toggle"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menú lateral"
            >
                <span>☰</span>
                <strong>Menú</strong>
            </button>

            {menuOpen && (
                <div
                    className="side-menu-overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <aside className={`sidebar side-drawer ${menuOpen ? "open" : ""}`}>
                <div className="side-drawer-header">
                    <div>
                        <span className="side-drawer-label">PORTUFUTBOL</span>
                        <h2>Categorías</h2>
                    </div>

                    <button
                        className="side-drawer-close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Cerrar menú lateral"
                    >
                        ✕
                    </button>
                </div>

                <nav className="side-drawer-nav">
                    <button className="drawer-link active">
                        <span>🏠</span>
                        {translate("home")}
                    </button>

                    <button className="drawer-link" onClick={() => toggleSection("clubs")}>
                        <span>🛡️</span>
                        {translate("clubs")}
                        <b>{openSection === "clubs" ? "⌃" : "⌄"}</b>
                    </button>

                    {openSection === "clubs" && (
                        <div className="drawer-submenu">
                            {ligas.map((liga) => (
                                <div key={liga.nombre}>
                                    <button
                                        className={`drawer-card ${openLeague === liga.nombre ? "selected" : ""}`}
                                        onClick={() => setOpenLeague(openLeague === liga.nombre ? "" : liga.nombre)}
                                    >
                                        <img src={liga.logo} alt={liga.nombre} />
                                        <span>{liga.nombre}</span>
                                        {equiposPorLiga[liga.nombre] && <b>{openLeague === liga.nombre ? "−" : "+"}</b>}
                                    </button>

                                    {openLeague === liga.nombre && equiposPorLiga[liga.nombre] && (
                                        <div className="drawer-grid nested">
                                            {equiposPorLiga[liga.nombre].map((club) => (
                                                <button
                                                    type="button"
                                                    className="drawer-small-card product-option"
                                                    key={club.nombre}
                                                    onClick={() => addMenuProduct(`Camisa ${club.nombre}`, clubPrice, club.logo)}
                                                >
                                                    <img src={club.logo} alt={club.nombre} />
                                                    <span>{club.nombre}</span>
                                                    <small>{clubPrice}</small>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <button className="drawer-link" onClick={() => toggleSection("teams")}>
                        <span>👕</span>
                        {translate("nationalTeams")}
                        <b>{openSection === "teams" ? "⌃" : "⌄"}</b>
                    </button>

                    {openSection === "teams" && (
                        <div className="drawer-grid">
                            {selecciones.map((pais) => (
                                <button
                                    type="button"
                                    className="drawer-small-card product-option"
                                    key={pais.nombre}
                                    onClick={() => addMenuProduct(`Camisa ${pais.nombre}`, nationalTeamPrice, pais.logo)}
                                >
                                    <img src={pais.logo} alt={pais.nombre} />
                                    <span>{pais.nombre}</span>
                                    <small>{nationalTeamPrice}</small>
                                </button>
                            ))}
                        </div>
                    )}

                    <button className="drawer-link" onClick={() => toggleSection("specials")}>
                        <span>⭐</span>
                        {translate("specials")}
                        <b>{openSection === "specials" ? "⌃" : "⌄"}</b>
                    </button>

                    {openSection === "specials" && (
                        <div className="drawer-submenu simple-list">
                            {especiales.map((item) => (
                                <button
                                    type="button"
                                    className="drawer-pill product-pill"
                                    key={item}
                                    onClick={() => addMenuProduct(item, specialPrice, null)}
                                >
                                    🏆 {item} <small>{specialPrice}</small>
                                </button>
                            ))}
                        </div>
                    )}

                    <button className="drawer-link" onClick={() => toggleSection("shoes")}>
                        <span>👟</span>
                        {translate("shoes")}
                        <b>{openSection === "shoes" ? "⌃" : "⌄"}</b>
                    </button>

                    {openSection === "shoes" && (
                        <div className="drawer-two-columns">
                            <div>
                                <h4>{translate("soccerShoes")}</h4>
                                {zapatosFutbol.map((item) => (
                                    <button
                                        type="button"
                                        className="drawer-pill product-pill"
                                        key={item}
                                        onClick={() => addMenuProduct(item, shoePrice, null)}
                                    >
                                        {item} <small>{shoePrice}</small>
                                    </button>
                                ))}
                            </div>
                            <div>
                                <h4>{translate("futsalShoes")}</h4>
                                {futbolSala.map((item) => (
                                    <button
                                        type="button"
                                        className="drawer-pill product-pill"
                                        key={item}
                                        onClick={() => addMenuProduct(item, shoePrice, null)}
                                    >
                                        {item} <small>{shoePrice}</small>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <button className="drawer-link" onClick={() => toggleSection("kids")}>
                        <span>👦🏽</span>
                        {translate("kids")}
                        <b>{openSection === "kids" ? "⌃" : "⌄"}</b>
                    </button>

                    {openSection === "kids" && (
                        <div className="drawer-submenu simple-list">
                            {paraNinos.map((item) => (
                                <button
                                    type="button"
                                    className="drawer-pill product-pill"
                                    key={item}
                                    onClick={() => addMenuProduct(item, kidsPrice, null)}
                                >
                                    👟 {item} <small>{kidsPrice}</small>
                                </button>
                            ))}
                        </div>
                    )}
                </nav>
            </aside>
        </>
    );
}
