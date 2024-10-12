import { useContext } from "react";

import { CartComponent } from "../components/CartComponent";
import { ProductContext } from "../context/ProductContext";


export const ProductsPage = () => {

  const {products} = useContext(ProductContext)
 
  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map(producto => (
        <CartComponent key={producto.id}
          title={producto.title}
          image={producto.image}
          description={producto.description}
          price={producto.price}
        />
      ))}
    </>
  );
};
