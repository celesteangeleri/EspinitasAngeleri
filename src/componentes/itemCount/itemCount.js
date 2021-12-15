import React from "react";
import "../../scss/main/main.scss";
import { useState } from "react";

const ItemCount = ({ initial = 0, stock = 0, onAdd }) => {
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
    <div className="card">
      <div className="card-body">
        <button className="boton" onClick={sumar}>
          +
        </button>
        <span> {cantidad}</span>
        <button className="boton" onClick={restar}>
          -
        </button>
        <button onClick={() => console.log("se agregó al carrito")}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
