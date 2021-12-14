import React from "react";
import "../../scss/main/main.scss";

const ItemDetail = ({ prod }) => {
  return (
    <div>
      <div className="producto">
        <h1 className="nombreProducto">{prod?.nombre}</h1>
        <img className="imgProducto" src={prod?.img} alt="" />
        <div className="descripcion">
          <h2 className="detalleProducto"> DESCRIPCION: {prod?.descripcion}</h2>
          <h3 className="cuidadoProducto">CUIDADOS: {prod?.cuidados}</h3>
          <h3 className="precioProducto">Precio: {prod?.precio}</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
