import React from "react";
import "../../scss/main/main.scss";
import { useState, useContext } from 'react'
import NotificationContext from '../../context/NotificatiosContext'

const ButtonCount = ({ onConfirm, maxQuantity}) =>{
  const [contador, setContador ] = useState (0)

const sumar = () => {
  if (contador < maxQuantity) {
    setContador(contador + 1)    
  }
}
const restar = () =>{
  if (contador > 0) {
    setContador(contador - 1)
    
  }
}
  return (
    <div className="contenedorCarrito">
      <p className="contador"> {contador}</p>
      <div>
        <button className="botonCarrito" onClick={sumar}>+</button>             
        <button className="botonCarrito" onClick={restar}>-</button>
      </div>
      <div className="botonAdd">
        <button  onClick={() => onConfirm (contador)}>  agregar al carrito </button>      
      </div>
    </div>
  )
}



const ItemDetail = ({ prod }) => {

  const Contador =  ButtonCount

  const { setNotification } = useContext(NotificationContext)

  const addCarrito = (contador) => {
    setNotification('success',`Agregado al carrito ${contador}`)
}

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
        <h3 className="precioProducto">Precio: {prod?.precio}</h3>

        <Contador onConfirm={addCarrito} maxQuantity={prod?.stock}/>
      </div>
    </div>
    
  );
};

export default ItemDetail;
