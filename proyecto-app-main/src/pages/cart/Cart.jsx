import React, { useEffect } from "react";
import cart from "../../context/CartContext";
import { useContext } from "react";
import CartItems from "../../component/schimmer/CartItems";

export default function Cart() {
  let [cartProducts, setCartProducts] = useContext(cart);
  let cartItems = cartProducts.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = (id) => {
    let filterItem = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(filterItem);
  };

  return (
    <>
      {cartItems === 0 ? (
        <CartItems />
      ) : (
        <main className="w-full pt-[120px] pb-10 px-5">
          <div className="max-w-[1200px] mx-auto">
            {cartProducts.map((product) => {
              return (
                <div
                  key={product?.id}
                  style={{ border: "1px solid #ccc" }}
                  className="w-[100%] sm:flex overflow-hidden relative mb-10 justify-center items-center bg-white rounded-xl shadow-md"
                >
                  <p className="text-xs absolute top-2 left-2 h-7 w-7 p-2 bg-teal-500 text-white flex justify-center items-center rounded-full">
                    {product?.rating?.rate}
                  </p>
                  <div className="w-full md:w-1/2 h-[200px] flex justify-center items-center">
                    <img
                      className="w-32 mix-blend-multiply object-contain"
                      src={product?.image}
                      alt={product?.title}
                    />
                  </div>
                  <div className="w-[100%] min-h-[200px] bg-teal-700 text-white flex flex-col justify-between items-start p-2 py-4">
                    <h1 className="font-bold text-base">
                      {product?.title?.slice(0, 20)}
                    </h1>
                    <p className="text-sm font-[300] py-2">
                      {product.description.length > 350
                        ? product?.description?.slice(0, 300) + "..."
                        : product.description}
                    </p>
                    <p className="text-sm font-[900]">${product?.price}</p>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-white text-teal-700 text-xs py-2 px-4 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}
    </>
  );
}