import { useState } from "react";

import Header from "./Components/Header";

import InicioView from "./View/InicioView";
import ProductosView from "./View/ProductosView";
import CategoriaView from "./View/CategoriaView";
import ContactoView from "./View/ContactoView";

import ThemeController from "./Controller/ThemeController";

import "./styles/globals.css";

export default function App() {

  const themeController =
    ThemeController.getInstance();

  const [tema, setTema] =
    useState(themeController.getTheme());

  const [vista, setVista] =
    useState("inicio");

  const [buscar, setBuscar] =
    useState("");

  const toggleTheme = () => {

    themeController.toggleTheme();

    setTema(
      themeController.getTheme()
    );
  };

  return (
    <div className={`app ${tema}`}>

      <Header
        cambiarVista={setVista}
        buscar={buscar}
        setBuscar={setBuscar}
        toggleTheme={toggleTheme}
        tema={tema}
      />

      {vista === "inicio" &&
        <InicioView />
      }

      {vista === "productos" &&
        <ProductosView />
      }

      {vista === "categorias" &&
        <CategoriaView />
      }

      {vista === "contacto" &&
        <ContactoView />
      }

    </div>
  );
}
