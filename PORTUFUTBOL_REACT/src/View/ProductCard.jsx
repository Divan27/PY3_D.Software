export default function ProductCard({
    nombre,
    descripcion,
    precio,
    imagen,
    translate,
    onAddToCart
}) {
    return (
        <div className="product-card">
            <img
                src={imagen}
                alt={nombre}
            />

            <h3>{nombre}</h3>

            <p>{descripcion}</p>

            <h2>{precio}</h2>

            <button onClick={() => onAddToCart({ name: nombre, price: precio, image: imagen })}>
                {translate("addToCart")}
            </button>
        </div>
    );
}
