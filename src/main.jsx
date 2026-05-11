import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

function routerBasename() {
  const urlBase = import.meta.env.BASE_URL;
  if (urlBase === "/") return undefined;
  return urlBase.endsWith("/") ? urlBase.slice(0, -1) : urlBase;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
