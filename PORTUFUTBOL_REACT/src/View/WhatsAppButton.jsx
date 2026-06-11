import whatsapp from "../assets/logos/whatsapp.png";

export default function WhatsAppButton() {

    return (

        <a
            href="https://wa.me/50688888888"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
        >

            <img
                src={whatsapp}
                alt="WhatsApp"
            />

        </a>

    );

}