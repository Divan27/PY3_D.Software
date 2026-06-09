import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

import JugadorCard from "../Components/JugadorCard";
import ProductCard from "../Components/ProductCard";

import MundialBanner from "../Components/MundialBanner";
import FooterInfo from "../Components/FooterInfo";
import WhatsAppButton from "../Components/WhatsAppButton";

import messi from "../assets/jugadores/messi.jpg";
import cristiano from "../assets/jugadores/cristiano.png";
import haaland from "../assets/jugadores/haaland.png";
import mbappe from "../assets/jugadores/mbappe.png";

import bellingham from "../assets/jugadores/bellingham.png";
import vinicius from "../assets/jugadores/vinicius.jpg";
import rodri from "../assets/jugadores/rodri.png";
import salah from "../assets/jugadores/salah.jpg";
import kane from "../assets/jugadores/kane.jpg";
import lautaro from "../assets/jugadores/lautaro.png";

import mercurial from "../assets/zapatos/mercurial.jpg";
import predator from "../assets/zapatos/predator.jpg";
import regate from "../assets/zapatos/regate.jpg";

export default function InicioView({ toggleTheme }) {

    const jugadores = [

        { numero: 1, nombre: "MESSI", imagen: messi },
        { numero: 2, nombre: "CRISTIANO", imagen: cristiano },
        { numero: 3, nombre: "HAALAND", imagen: haaland },
        { numero: 4, nombre: "MBAPPÉ", imagen: mbappe },
        { numero: 5, nombre: "BELLINGHAM", imagen: bellingham },

        { numero: 6, nombre: "VINICIUS JR.", imagen: vinicius },
        { numero: 7, nombre: "RODRI", imagen: rodri },
        { numero: 8, nombre: "SALAH", imagen: salah },
        { numero: 9, nombre: "KANE", imagen: kane },
        { numero: 10, nombre: "LAUTARO", imagen: lautaro }

    ];

    const productos = [

        {
            nombre: "NIKE MERCURIAL",
            descripcion: "Velocidad Profesional",
            precio: "₡219.999",
            imagen: mercurial
        },

        {
            nombre: "ADIDAS PREDATOR",
            descripcion: "Control Total",
            precio: "₡189.999",
            imagen: predator
        },

        {
            nombre: "JOMA REGATE",
            descripcion: "Futsala Profesional",
            precio: "₡129.999",
            imagen: regate
        }

    ];

    return (

        <>
            <Header toggleTheme={toggleTheme} />

            <div className="main-content">

                <Sidebar />

                <div className="content">

                    <section className="section-container">

                        <h2 className="section-title">
                            ⭐ TOP 10 JUGADORES
                        </h2>

                        <div className="players-grid">

                            {
                                jugadores.map(jugador => (

                                    <JugadorCard
                                        key={jugador.numero}
                                        {...jugador}
                                    />

                                ))
                            }

                        </div>

                    </section>

                    <section className="section-container">

                        <h2 className="section-title">
                            🔥 MÁS VENDIDOS
                        </h2>

                        <div className="products-grid">

                            {
                                productos.map((producto, index) => (

                                    <ProductCard
                                        key={index}
                                        {...producto}
                                    />

                                ))
                            }

                        </div>

                    </section>

                    <section className="section-container">

                        <MundialBanner />

                    </section>

                    <FooterInfo />

                </div>

                <aside className="company-panel">

                    <h3>⚽ PORTUFUTBOL</h3>

                    <p>
                        La tienda especializada en fútbol más
                        completa para jugadores, aficionados
                        y clubes deportivos.
                    </p>

                    <div className="company-info">

                        <span>
                            🚚 Entrega inmediata
                        </span>

                        <span>
                            🛡️ Compra segura
                        </span>

                        <span>
                            📞 Atención personalizada
                        </span>

                        <span>
                            ⚽ Productos originales
                        </span>

                        <span>
                            🏆 Mundial 2026
                        </span>

                    </div>

                    <div className="company-social">

                        <h4>Redes Sociales</h4>

                        <p>📘 Facebook</p>

                        <p>📸 Instagram</p>

                        <p>🎵 TikTok</p>

                        <p>▶ YouTube</p>

                    </div>

                </aside>

            </div>

            <WhatsAppButton />

        </>
    );
}