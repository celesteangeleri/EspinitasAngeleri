import React from "react";
import "../../scss/main/main.scss";
import { useState, useContext } from 'react'
import NotificationContext from '../../context/NotificatiosContext'
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({ prod }) => {
  const {addItemCarrito } = useContext(CartContext)
  const {setNotification} = useContext(NotificationContext)
  const [addCarrito, setCarrito] = useState ([])
  
  const addToCarrito = (cantidad) =>{
    setCarrito(cantidad) 
    prod.inCart = cantidad
    addItemCarrito(prod)
    console.log('addItemCarrito',prod);
    setNotification ('success',`agregaste al carrito ${cantidad} `)
  }
 
if (prod){
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
        {addCarrito > 0 ? <Link className="botonLink1" to='/cart'> finalizar Compra</Link> : <ItemCount  onAdd={addToCarrito} stock={prod?.stock}  />}
        <Link to='/' className="botonLink2"> Volver a la lista</Link>
      </div>
    </div>
    
  );
} else return <img className="cargando" src="https://i.gifer.com/ZdPH.gif" alt=""></img>
};

export default ItemDetail;
