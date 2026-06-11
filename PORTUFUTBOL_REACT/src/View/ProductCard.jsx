export default function ProductCard({
<<<<<<< HEAD
    nombre,
    descripcion,
    precio,
    imagen,
    translate,
    onAddToCart
}) {
    return (
        <div className="product-card">
=======

    nombre,
    descripcion,
    precio,
    imagen

}) {

    const comprar = () => {

        const mensaje =
            `Hola, estoy interesado en ${nombre}`;

        window.open(

            `https://wa.me/50600000000?text=${encodeURIComponent(mensaje)}`,

            "_blank"

        );

    };

    return (

        <div className="product-card">

>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
            <img
                src={imagen}
                alt={nombre}
            />

            <h3>{nombre}</h3>

            <p>{descripcion}</p>

            <h2>{precio}</h2>

<<<<<<< HEAD
            <button onClick={() => onAddToCart({ name: nombre, price: precio, image: imagen })}>
                {translate("addToCart")}
            </button>
        </div>
    );
}
=======
            <button
                onClick={comprar}
            >
                Comprar por WhatsApp
            </button>

        </div>

    );

}
>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
