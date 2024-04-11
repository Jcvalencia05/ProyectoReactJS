import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../../utils/api";
import Card from "../../component/card/Card";
import Schimmer from "../../component/schimmer/Schimmer";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    getData("/products")
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {products.length === 0 ? (
        <Schimmer />
      ) : (
        <main className="home w-full pt-[120px] pb-10 px-5 relative">
          <section className="max-w-[1200px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-5">
            {products.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </section>
        </main>
      )}
    </>
  );
}
