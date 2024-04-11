import React, { useContext } from "react";
import cart from "../../context/CartContext";

export default function Card({ product }) {
  const [cartProducts, setCartProducts] = useContext(cart);

  return (
    <div
      style={{ border: "1px solid #ccc" }}
      className="w-[100%] flex overflow-hidden justify-center items-center flex-col bg-white relative rounded-xl shadow-md"
    >
      <p className="bg-teal-500 text-white text-[10px] font-bold h-5 w-5 flex justify-center items-center rounded-full text-xs absolute top-2 right-2">
        {product?.rating?.rate}
      </p>
      <div className="w-full h-52 flex justify-center items-center">
        <img
          className="w-32 mix-blend-multiply object-contain"
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <div className="w-[100%] h-auto bg-teal-700 text-white flex flex-col justify-end text-start p-2 py-4">
        <h1 className="font-bold text-base">{product?.title?.slice(0, 20)}</h1>
        <p className="text-sm py-2">${product?.price}</p>
        <button
          onClick={() => {
            setCartProducts((cartProducts) => {
              return [...cartProducts, product];
            });
          }}
          className="bg-white text-teal-700 text-xs py-2 px-4 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}