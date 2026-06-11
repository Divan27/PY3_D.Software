export default function FooterInfo({ translate }) {

    return (

        <footer className="footer-info">

            <div>{translate("countryShipping")}</div>
            <div>{translate("safePayments")}</div>
            <div>{translate("easyReturns")}</div>
            <div>{translate("factoryWarranty")}</div>

        </footer>

    );
}
