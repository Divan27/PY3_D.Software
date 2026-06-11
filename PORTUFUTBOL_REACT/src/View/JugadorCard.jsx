export default function JugadorCard({
    numero,
    nombre,
    imagen,
    precio,
    onAddToCart,
    translate
}) {
    return (
        <div className="player-card">
            <div className="player-header">
                <div className="player-number">
                    {numero}
                </div>

                <div className="player-price">
                    {precio}
                </div>
            </div>

            <img
                src={imagen}
                alt={nombre}
            />

            <h3>{nombre}</h3>

            <button
                className="add-cart-btn"
                onClick={() => onAddToCart({ name: nombre, price: precio, image: imagen })}
            >
                {translate("addToCart")}
            </button>
        </div>
    );
}
