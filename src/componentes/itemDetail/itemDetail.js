import React from "react";
import "../../scss/main.scss";

const ItemDetail = ({ prod }) => {
  return (
    <div>
      <div className="producto">
        <h1 className="nombreProducto">{prod?.nombre}</h1>
        <img className="imgProducto" src={prod?.img} alt="" />
        <h2 className="detalleProducto"> {prod?.descripcion}</h2>
        <h3 className="detalleProducto">{prod?.cuidados}</h3>
        <h3 className="precioProducto">{prod?.precio}</h3>
      </div>
    </div>
  );
};

export default ItemDetail;
