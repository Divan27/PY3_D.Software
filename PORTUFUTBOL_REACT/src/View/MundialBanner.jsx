import banner
from "../assets/banners/banner.jpg";

export default function MundialBanner() {

    return (

        <section className="worldcup-banner">

            <img
                src={banner}
                alt="Mundial 2026"
            />

        </section>

    );

}