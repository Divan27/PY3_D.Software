export default function JugadorCard({
    numero,
    nombre,
    imagen
}) {

    return (

        <div className="player-card">

            <div className="player-number">
                {numero}
            </div>

            <img
                src={imagen}
                alt={nombre}
            />

            <h3>{nombre}</h3>

        </div>

    );

}