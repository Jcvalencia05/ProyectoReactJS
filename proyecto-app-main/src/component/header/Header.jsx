import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cart from "../../context/CartContext";

export default function Header() {
  const carts = useContext(cart);
  const cartItems = carts[0].length;

  return (
    <header className="w-full h-20 flex justify-between px-5 fixed z-50 bg-white shadow-md">
      <div className="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center">
        <div className="text-xl lg:text-3xl font-bold">
          <Link to="/" className="text-teal-700 hover:text-teal-500 transition-colors duration-300">
            EXITO: COMPRAS ONLINE
          </Link>
        </div>
        <nav>
          <ul className="flex gap-4 sm:gap-10">
            <li>
              <Link
                to="/"
                className="text-teal-600 hover:text-teal-700 transition-colors duration-300"
              >
                INICIO
              </Link>
            </li>
            <li className="relative mr-4 lg:mr-0">
              <Link
                to="/cart"
                className="text-teal-600 hover:text-teal-700 transition-colors duration-300"
              >
                KART{" "}
                {cartItems === 0 ? (
                  " "
                ) : (
                  <p className="absolute bottom-2 font-bold left-9 text-[10px] flex justify-center items-center bg-teal-500 text-white rounded-full h-5 w-5">
                    {cartItems}
                  </p>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}