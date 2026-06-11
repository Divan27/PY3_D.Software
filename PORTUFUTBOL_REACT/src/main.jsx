import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./Styles/globals.css";
import "./Styles/header.css";
import "./Styles/sidebar.css";
import "./Styles/cards.css";
import "./Styles/banner.css";
import "./Styles/footer.css";
import "./Styles/whatsapp.css";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <App />

    </React.StrictMode>

);
