export default function HeroSection({ translate }) {
    return (
        <section className="hero">

            <h1>{translate("heroTitle")}</h1>

            <p>{translate("heroDescription")}</p>

            <button>
                {translate("seeProducts")}
            </button>

        </section>
    );
}
