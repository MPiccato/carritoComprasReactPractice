
import { createRoot } from "react-dom/client";

import "./index.css";
import { CarritoApp } from "./components/CarritoApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
      <CarritoApp />
    
  </BrowserRouter>
);
