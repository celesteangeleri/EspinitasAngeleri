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
    <div className="botonLink3">
      <div>
        <button className="boton" onClick={sumar}> + </button>
        <span className="boton" > {cantidad}</span>
        <button className="boton"  onClick={restar}> - </button>
        <button className="boton"  onClick={() => onAdd(cantidad)}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
