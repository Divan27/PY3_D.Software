<<<<<<< HEAD
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
=======
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
>>>>>>> 43d8e518e86370a06a08bc4ea088d538171a243b
