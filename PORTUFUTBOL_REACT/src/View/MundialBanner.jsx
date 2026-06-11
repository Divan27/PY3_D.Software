import banner from "../assets/banners/banner.jpg";

export default function MundialBanner({ translate }) {

    return (

        <section className="worldcup-banner">

            <img
                src={banner}
                alt={translate("worldCup2026")}
            />

        </section>

    );
}
