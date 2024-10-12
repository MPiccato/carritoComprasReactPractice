import { useState } from "react";
import './../styles/CardComponents.css'

export const CartComponent = ({ image, title, description, price }) => {
  
  const [added, setAdded] = useState(false);

  const addProduct =()=> {
    setAdded(true)
  }
  const removeProduct =()=> {
    setAdded(false)
  }



  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>

        {added ? (
          <button type="button" className="remove-button" onClick={removeProduct}>
            Quitar del carrito
          </button>
        ) : (
          <button type="button" className="add-button" onClick={addProduct}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
