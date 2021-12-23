import React, { useState, useContext } from "react";
import "../../scss/main/main.scss";
import NotificationContext from "../../context/NotificatiosContext";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ prod }) => {
  const { addItemCarrito, addCantidadCarrito } = useCartContext();
  const [cantidad, setCantidad] = useState(1);

  const agregarCarrito = () => {
    addItemCarrito(prod.precio * cantidad);
    addCantidadCarrito(cantidad);
  };
  console.log(useCartContext());
  if (prod) {
    return (
      <div className="containerFlex">
        <div className=" columna-50">
          <h1 className="nombreProducto">{prod?.nombre}</h1>
          <img className="imgProducto" src={prod?.img} alt="" />
        </div>

        <div className="columna-50">
          <p className="centrar"> DESCRIPCION:</p>
          <h2 className="detalleProducto"> {prod?.descripcion}</h2>
          <p className="centrar"> CUIDADOS:</p>
          <h3 className="cuidadoProducto"> {prod?.cuidados}</h3>
          <h3 className="precioProducto">Precio: $ {prod?.precio}</h3>
          {false ? (
            <Link className="" to="/cart">
              finalizar Compra
            </Link>
          ) : (
            <>
              <button
                className="restar"
                onClick={() => setCantidad(cantidad - 1)}
              >
                restar
              </button>
              <button
                className="botonCarrito"
                onClick={() => setCantidad(cantidad + 1)}
              >
                sumar
              </button>
              <button className="botonCarrito" onClick={agregarCarrito()}>
                agregar al carrito
              </button>
            </>
          )}
        </div>
      </div>
    );
  } else
    return (
      <img className="cargando" src="https://i.gifer.com/ZdPH.gif" alt=""></img>
    );
};

export default ItemDetail;
