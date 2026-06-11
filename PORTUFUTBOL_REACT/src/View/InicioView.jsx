import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.jpg";

import JugadorCard from "./JugadorCard";
import ProductCard from "./ProductCard";

import MundialBanner from "./MundialBanner";
import FooterInfo from "./FooterInfo";
import WhatsAppButton from "./WhatsAppButton";
import CartPanel from "./CartPanel";
import PromoVideo from "./PromoVideo";

import messi from "../assets/jugadores/messi.jpg";
import cristiano from "../assets/jugadores/cristiano.jpg";
import haaland from "../assets/jugadores/haaland.jpg";
import mbappe from "../assets/jugadores/mbappe.jpg";

import bellingham from "../assets/jugadores/bellingham.jpg";
import vinicius from "../assets/jugadores/vinicius.jpg";
import rodri from "../assets/jugadores/rodri.jpg";
import salah from "../assets/jugadores/salah.jpg";
import kane from "../assets/jugadores/kane.jpg";
import lamine from "../assets/jugadores/lamine.jpg";

import mercurial from "../assets/zapatos/mercurial.jpg";
import predator from "../assets/zapatos/predator.jpg";
import regate from "../assets/zapatos/regate.jpg";

export default function InicioView({
    toggleTheme,
    toggleLanguage,
    language,
    translate,
    colorBlindMode,
    setColorBlindMode
}) {
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const priceToNumber = (price) => {
        return Number(String(price).replace("$", "")) || 0;
    };

    const addToCart = (item) => {
        setCartItems((currentItems) => [
            ...currentItems,
            {
                cartId: `${Date.now()}-${Math.random()}`,
                name: item.name,
                price: item.price,
                priceNumber: priceToNumber(item.price),
                image: item.image || null
            }
        ]);
    };

    const removeFromCart = (cartId) => {
        setCartItems((currentItems) => currentItems.filter((item) => item.cartId !== cartId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const sendOrderToWhatsapp = () => {
        const subtotal = cartItems.reduce((total, item) => total + item.priceNumber, 0);
        const tax = subtotal * 0.10;
        const total = subtotal + tax;

        const productsText = cartItems
            .map((item, index) => `${index + 1}. ${item.name} - $${item.priceNumber.toFixed(2)}`)
            .join("\n");

        const message = `${translate("whatsappOrderIntro")}\n\n${productsText}\n\n${translate("subtotal")}: $${subtotal.toFixed(2)}\n${translate("tax")}: $${tax.toFixed(2)}\n${translate("total")}: $${total.toFixed(2)}`;

        window.open(`https://wa.me/50685757034?text=${encodeURIComponent(message)}`, "_blank");
    };

    const jugadores = [
        { numero: 1, nombre: "MESSI", precio: "$2000", imagen: messi },
        { numero: 2, nombre: "CRISTIANO", precio: "$999.9", imagen: cristiano },
        { numero: 3, nombre: "HAALAND", precio: "$999.9", imagen: haaland },
        { numero: 4, nombre: "MBAPPÉ", precio: "$999.9", imagen: mbappe },
        { numero: 5, nombre: "BELLINGHAM", precio: "$999.9", imagen: bellingham },
        { numero: 6, nombre: "VINICIUS JR.", precio: "$999.9", imagen: vinicius },
        { numero: 7, nombre: "RODRI", precio: "$999.9", imagen: rodri },
        { numero: 8, nombre: "SALAH", precio: "$999.9", imagen: salah },
        { numero: 9, nombre: "KANE", precio: "$999.9", imagen: kane },
        { numero: 10, nombre: "LAMINE YAMAL", precio: "$999.9", imagen: lamine }
    ];

    const productos = [
        {
            nombre: "NIKE MERCURIAL",
            descripcion: translate("professionalSpeed"),
            precio: "$459.99",
            imagen: mercurial
        },
        {
            nombre: "ADIDAS PREDATOR",
            descripcion: translate("totalControl"),
            precio: "$395.99",
            imagen: predator
        },
        {
            nombre: "JOMA REGATE",
            descripcion: translate("professionalFutsal"),
            precio: "$260.99",
            imagen: regate
        }
    ];

    const normalizeText = (text) => {
        return String(text)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[̀-ͯ]/g, "");
    };

    const searchValue = normalizeText(searchTerm.trim());

    const filteredJugadores = jugadores.filter((jugador) => {
        return normalizeText(jugador.nombre).includes(searchValue);
    });

    const filteredProductos = productos.filter((producto) => {
        const productText = `${producto.nombre} ${producto.descripcion}`;
        return normalizeText(productText).includes(searchValue);
    });

    return (

        <>
            <Header
                toggleTheme={toggleTheme}
                toggleLanguage={toggleLanguage}
                language={language}
                translate={translate}
                colorBlindMode={colorBlindMode}
                setColorBlindMode={setColorBlindMode}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <div className="main-content">

                <Sidebar
                    translate={translate}
                    onAddToCart={addToCart}
                />

                <main className="content">

                    <section className="section-container">

                        <h2 className="section-title">
                            {translate("topPlayers")}
                        </h2>

                        <div className="players-grid">
                            {filteredJugadores.length === 0 && (
                                <p className="search-empty">No se encontraron jugadores.</p>
                            )}

                            {filteredJugadores.map(jugador => (
                                <JugadorCard
                                    key={jugador.numero}
                                    {...jugador}
                                    translate={translate}
                                    onAddToCart={addToCart}
                                />
                            ))}
                        </div>

                    </section>

                    <section className="section-container">

                        <h2 className="section-title">
                            {translate("popular")}
                        </h2>

                        <div className="products-grid">
                            {filteredProductos.length === 0 && (
                                <p className="search-empty">No se encontraron productos.</p>
                            )}

                            {filteredProductos.map((producto, index) => (
                                <ProductCard
                                    key={index}
                                    translate={translate}
                                    onAddToCart={addToCart}
                                    {...producto}
                                />
                            ))}
                        </div>

                    </section>

                    <section className="section-container">
                        <MundialBanner translate={translate} />
                    </section>

                    <FooterInfo translate={translate} />

                </main>

                <aside className="right-side-widgets">
                    <div className="right-side-top">
                        <CartPanel
                            cartItems={cartItems}
                            removeFromCart={removeFromCart}
                            clearCart={clearCart}
                            sendOrderToWhatsapp={sendOrderToWhatsapp}
                            translate={translate}
                        />

                        <aside className="company-panel">

                            <h3>⚽ PORTUFUTBOL</h3>

                            <p>{translate("storeDescription")}</p>

                            <div className="company-info">
                                <span>{translate("immediateDelivery")}</span>
                                <span>{translate("safePurchase")}</span>
                                <span>{translate("personalizedService")}</span>
                                <span>{translate("originalProducts")}</span>
                                <span>{translate("worldCup2026")}</span>
                            </div>

                            <div className="company-social">

                                <h4>{translate("socialNetworks")}</h4>

                                <div className="social-item">
                                    <img src={facebook} alt="Facebook" />
                                    <span>Facebook</span>
                                </div>

                                <div className="social-item">
                                    <img src={instagram} alt="Instagram" />
                                    <span>Instagram</span>
                                </div>

                            </div>

                        </aside>
                    </div>

                    <PromoVideo translate={translate} />
                </aside>

            </div>

            <WhatsAppButton />

        </>
    );
}
