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
import espana from "../assets/logos/españa.png";
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



export default function Sidebar() {

    const ligas = [

        { nombre:"Premier League", logo:premier },

        { nombre:"Serie A", logo:seriea },

        { nombre:"LaLiga", logo:laliga },

        { nombre:"Bundesliga", logo:bundesliga },

        { nombre:"Ligue 1", logo:ligue1 },

        { nombre:"Liga Profesional", logo:ligaprofesional },

        { nombre:"Major League Soccer", logo:mls },

        { nombre:"Liga Promérica", logo:ligapromerica }

    ];

    const selecciones = [

        { nombre:"ALEMANIA", logo:alemania },

        { nombre:"AUSTRIA", logo:austria },

        { nombre:"BÉLGICA", logo:belgica },

        { nombre:"CROACIA", logo:croacia },

        { nombre:"DINAMARCA", logo:dinamarca },

        { nombre:"ESCOCIA", logo:escocia },

        { nombre:"ESLOVAQUIA", logo:eslovaquia },

        { nombre:"ESPAÑA", logo:espana },

        { nombre:"FRANCIA", logo:francia },

        { nombre:"INGLATERRA", logo:inglaterra },

        { nombre:"IRLANDA", logo:irlanda },

        { nombre:"ITALIA", logo:italia },

        { nombre:"NORUEGA", logo:noruega },

        { nombre:"PAÍSES BAJOS", logo:paisesbajos },

        { nombre:"PORTUGAL", logo:portugal },

        { nombre:"TURQUÍA", logo:turquia },

        { nombre:"COSTA RICA", logo:costarica }

    ];

    const especiales = [

        {
            emoji:"🏆",
            nombre:"Mundial NA 2026"
        },

        {
            emoji:"🏆",
            nombre:"Copa Oro 2025"
        },

        {
            emoji:"🏆",
            nombre:"Mundial de Clubes"
        },

        {
            emoji:"🏆",
            nombre:"Eurocopa 2024"
        },

        {
            emoji:"🏆",
            nombre:"Champions League"
        }

    ];

    const zapatosFutbol = [

        "👟 Tacos Nike",
        "👟 Tacos Adidas",
        "👟 Tacos Puma",
        "👟 Tacos New Balance",
        "👟 Tacos Mizuno",
        "👟 Tacos Atornillados (SG)",
        "👟 Tacos Césped Artificial (AG)",
        "👟 Tacos Económicos"

    ];

    const futbolSala = [

        "👟 Futbol Sala - Nike",
        "👟 Futbol Sala - Adidas",
        "👟 Futbol Sala - Joma",
        "👟 Futbol Sala - Mizuno",
        "👟 Futbol Sala - Puma",
        "👟 Futbol Sala - Diadora",
        "👟 Futbol Sala - New Balance"

    ];

    const paraNinos = [
        {emoji:"👟",nombre:"Tacos Césped Natural"},
        {emoji:"👟",nombre:"Tennis Futsala"},
        {emoji:"👕",nombre:"Uniformes de Fútbol"}
    ];

    const premierLeagueTeams = [

        { nombre:"Arsenal", logo:arsenal },
        { nombre:"Aston Villa", logo:astonvilla },
        { nombre:"Blackburn", logo:blackburn },
        { nombre:"Chelsea", logo:chelsea },
        { nombre:"Everton", logo:everton },
        { nombre:"Fulham", logo:fulham },
        { nombre:"Leicester", logo:leicester },
        { nombre:"Liverpool", logo:liverpool },
        { nombre:"Manchester City", logo:manchestercity },
        { nombre:"Manchester United", logo:manchesterunited },
        { nombre:"Newcastle", logo:newcastle },
        { nombre:"Tottenham", logo:tottenham }

    ];

    const laLigaTeams = [

        {nombre:"Atlético Madrid",logo:atleticomadrid},
        {nombre:"Barcelona",logo:barcelona},
        {nombre:"Cádiz",logo:cadiz},
        {nombre:"Espanyol",logo:espanyol},
        {nombre:"Getafe",logo:getafe},
        {nombre:"Girona",logo:girona},
        {nombre:"Real Madrid",logo:realmadrid},
        { nombre:"Sevilla",logo:sevilla},
        {nombre:"Valencia", logo:valencia}

    ];

    const ligue1Teams = [

        {nombre:"Paris Saint-Germain",logo:psg},
        {nombre:"Olympique de Marseille",logo:olympique},
        {nombre:"Lille",logo:lille},
        {nombre:"Monaco",logo:monaco}

    ];

    const mlsTeams = [

        {
            nombre:"Inter Miami",
            logo:inter
        }

    ];

    return (

        <aside className="sidebar">

            <ul>

                <li className="menu-item">
                    🏠 Inicio
                </li>

                <li className="menu-item clubs-menu">

                    🛡 Clubes

                    <div className="clubs-dropdown">

                        {
                            ligas.map((liga,index)=>(

                                <div
                                    key={index}
                                    className={`league-card ${
                                        liga.nombre === "Premier League"
                                        ? "premier-card"
                                        : ""
                                    }${
                                        liga.nombre === "LaLiga"
                                            ? "laliga-card"
                                            : ""
                                    }${
                                        liga.nombre === "Ligue 1"
                                            ? "ligue1-card"
                                            : ""
                                    }${
                                        liga.nombre === "Major League Soccer"
                                            ? "mls-card"
                                            : ""
                                    }
                                    `}
                                    
                                >

                                    <img
                                        src={liga.logo}
                                        alt={liga.nombre}
                                    />

                                    <span>
                                        {liga.nombre}
                                    </span>

                                    {
                                        liga.nombre === "Premier League" && (

                                            <div className="premier-dropdown">

                                                {
                                                    premierLeagueTeams.map((club,index)=>(

                                                        <div
                                                            key={index}
                                                            className="club-card"
                                                        >

                                                            <img
                                                                src={club.logo}
                                                                alt={club.nombre}
                                                            />

                                                            <span>
                                                                {club.nombre}
                                                            </span>

                                                        </div>

                                                    ))
                                                }

                                            </div>

                                        )
                                    }

                                    {
                                        liga.nombre === "LaLiga" && (

                                            <div className="laliga-dropdown">

                                                {
                                                    laLigaTeams.map((club,index)=>(

                                                        <div
                                                            key={index}
                                                            className="club-card"
                                                        >

                                                            <img
                                                                src={club.logo}
                                                                alt={club.nombre}
                                                            />

                                                            <span>

                                                                {club.nombre}

                                                            </span>

                                                        </div>

                                                    ))
                                                }

                                            </div>

                                        )
                                    }

                                    {
                                        liga.nombre === "Ligue 1" && (

                                            <div className="ligue1-dropdown">

                                                {
                                                    ligue1Teams.map((club,index)=>(

                                                        <div
                                                            key={index}
                                                            className="club-card"
                                                        >

                                                            <img
                                                                src={club.logo}
                                                                alt={club.nombre}
                                                            />

                                                            <span>

                                                                {club.nombre}

                                                            </span>

                                                        </div>

                                                    ))
                                                }

                                            </div>

                                        )
                                    }

                                    {
                                        liga.nombre === "Major League Soccer" && (

                                            <div className="mls-dropdown">

                                                {
                                                    mlsTeams.map((club,index)=>(

                                                        <div
                                                            key={index}
                                                            className="club-card"
                                                        >

                                                            <img
                                                                src={club.logo}
                                                                alt={club.nombre}
                                                            />

                                                            <span>

                                                                {club.nombre}

                                                            </span>

                                                        </div>

                                                    ))
                                                }

                                            </div>

                                        )
                                    }

                                </div>

                            ))
                        }

                    </div>

                </li>

                <li className="menu-item teams-menu">

                    👕 Selecciones

                    <div className="teams-dropdown">

                        {
                            selecciones.map((pais,index)=>(

                                <div
                                    key={index}
                                    className="team-card"
                                >

                                    <img
                                        src={pais.logo}
                                        alt={pais.nombre}
                                    />

                                    <span>
                                        {pais.nombre}
                                    </span>

                                </div>

                            ))
                        }

                    </div>

                </li>

                <li className="menu-item specials-menu">

                    ⭐ Especiales

                    <div className="specials-dropdown">

                        {
                            especiales.map((evento,index)=>(

                                <div
                                    key={index}
                                    className="special-card"
                                >

                                    <span className="special-icon">

                                        {evento.emoji}

                                    </span>

                                    <span>

                                        {evento.nombre}

                                    </span>

                                </div>

                            ))
                        }

                    </div>

                </li>

                <li className="menu-item shoes-menu">

                    👟 Zapatos

                    <div className="shoes-dropdown">

                        <div className="shoe-column">

                            <h4>
                                ⚽ Zapatos Fútbol
                            </h4>

                            {
                                zapatosFutbol.map((item,index)=>(

                                    <div
                                        key={index}
                                        className="shoe-item"
                                    >
                                        {item}
                                    </div>

                                ))
                            }

                        </div>

                        <div className="shoe-column">

                            <h4>
                                🏟 Tenis Fútbol Sala
                            </h4>

                            {
                                futbolSala.map((item,index)=>(

                                    <div
                                        key={index}
                                        className="shoe-item"
                                    >
                                        {item}
                                    </div>

                                ))
                            }

                        </div>

                    </div>

                </li>

                <li className="menu-item kids-menu">

                    👦🏻 Para niños

                    <div className="kids-dropdown">

                        {
                            paraNinos.map((item,index)=>(

                                <div
                                    key={index}
                                    className="kids-card"
                                >

                                    <span className="kids-icon">
                                        {item.emoji}
                                    </span>

                                    <span>
                                        {item.nombre}
                                    </span>

                                </div>

                            ))
                        }

                    </div>

                </li>

            </ul>

        </aside>

    );
}