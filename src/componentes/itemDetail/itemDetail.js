import React from "react";
import "../../scss/main/main.scss";
import { useState, useContext } from 'react'

import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";



const ItemDetail = ({ prod }) => {

  const [addCarrito, setCarrito] = useState ([])
  
  const onAdd = (contador )=>{
   
    setCarrito(contador)
    
  
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
        <h3 className="precioProducto">Precio: $ {prod?.precio}</h3>
        {addCarrito > 0 ? <Link className="" to='/cart'> finalizar Compra</Link> : <ItemCount onAdd={onAdd} stock={prod?.stock}  />}

      </div>
    </div>
    
  );
};

export default ItemDetail;
