import { Badge } from "@mui/material";

import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          Carrito de Compras
        </NavLink>
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Productos
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink  to="/carrito">
          <Badge badgeContent={4} color="primary">
            <ShoppingCart />
          </Badge>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
