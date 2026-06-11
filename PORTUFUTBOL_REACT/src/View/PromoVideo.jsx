export default function PromoVideo({ translate }) {
    return (
        <section className="promo-video-card">
            <div className="promo-video-header">
                <span>▶️</span>
                <div>
                    <h3>{translate ? translate("videoTitle") : "Video destacado"}</h3>
                    <p>{translate ? translate("videoSubtitle") : "Lo mejor del fútbol para inspirar tu próxima compra."}</p>
                </div>
            </div>

            <div className="promo-video-frame">
                <iframe
                    src="https://www.youtube.com/embed/py3vK3sFUJ4"
                    title="Video promocional de fútbol"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </section>
    );
}
