export default function ProductCard({

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

            <img
                src={imagen}
                alt={nombre}
            />

            <h3>{nombre}</h3>

            <p>{descripcion}</p>

            <h2>₡{precio}</h2>

            <button
                onClick={comprar}
            >
                Comprar por WhatsApp
            </button>

        </div>

    );

}