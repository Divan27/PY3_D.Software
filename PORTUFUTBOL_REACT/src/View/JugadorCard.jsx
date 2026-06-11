export default function JugadorCard({
    numero,
    nombre,
    imagen,
    precio
}) {

    return (

        <div className="player-card">

            <div className="player-number">
                {numero}
            </div>

            <div className="player-price">
                    {precio}
                </div>

            <img
                src={imagen}
                alt={nombre}
            />

            <h3>{nombre}</h3>

        </div>

    );

}