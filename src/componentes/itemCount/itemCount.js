import React from "react";
import "../../scss/main/main.scss";
import { useState } from "react";


const ItemCount = ({ onAdd, initial = 0, stock = 0}) => {
  
  const [cantidad, setCantidad] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
      if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="contenedorCarrito">
      <div>
        <button className="botonCarrito" onClick={sumar}>
          +
        </button>
        <span className="contador"> {cantidad}</span>
        <button className="botonCarrito" onClick={restar}>
          -
        </button>
        <button className="botonCarrito" onClick={() => onAdd(cantidad)}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
