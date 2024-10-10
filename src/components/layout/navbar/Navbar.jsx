import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="barraDeNavegacion">
        <img
          className="logo"
          src="https://res.cloudinary.com/dyfpbgaci/image/upload/v1728431829/logo_pnoymw.jpg"
          alt="logo"
        ></img>
        <ul>
          <li>Inicio</li>
          <li>Urbana</li>
          <li>Coquete</li>
          <li>Everyday</li>
          <li>HippieChick</li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
