import { useReducer } from "react";
import { CardContext } from "./CardContext";

export const CartProvider = ({ children }) => {
  const initialState = [];

  const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState);

  const addProduct = (product) => {
    const action = {
      type: "[Cart] Agregar Producto",
      payload: product,
    };
    dispatch(action);
  };

  const removeProduct = (id) => {
    const action = {
      type: "[Cart] Quitar Producto",
      payload: id,
    };
    dispatch(action);
  };

  const incrementarProducto = (id) => {
    const action = {
      type: "[Cart] Incrementar Producto",
      payload: id,
    };
    dispatch(action);
  };

  const decrementarProducto = (id) => {
    const action = {
      type: "[Cart] Decrementar Producto",
      payload: id,
    };
    dispatch(action);
  };

  const shoppingReducer = (state = initialState, action ={}) => {
    switch (action.type) {
      case "[Cart] Agregar Producto" :
        
        break;
      case "[Cart] Quitar Producto":
        break;
      
      case "[Cart] Incrementar Producto":
        break;
      
      case "[Cart] Decrementar Producto":
        break


      
      default:
        return state
        
    }
  }




  return (
    <CardContext.Provider value={{ products }}>{children}</CardContext.Provider>
  );
};
