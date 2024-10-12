import { ProductContext } from "./ProductContext"
import Swal from "sweetalert2";
import { useState, useEffect } from "react";


export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
       Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Problemas al cargar los datos, verifica o reinicia'
       })
       console.error(error)
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
