import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CardData from "./components/Tour";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <CardData />
    <Footer />
  </React.StrictMode>
);