import React, { useState , useContext} from "react";
import "../../scss/main/main.scss";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext'



const ItemDetail = ({ prod }) => {
  const { addItemCart} = useContext(CartContext);
 const [addCart, setCart] = useState ([])

  const addToCart = (quantity) => {
   setCart(quantity)
   prod.inCart = quantity
   addItemCart(prod)
  }
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
          {addCart > 0 ? <Link className="botonLink1" to='/cart'> finalizar Compra</Link> :
            <ItemCount  onAdd={addToCart} stock={prod?.stock}  />}
          <Link to='/' className="botonLink2"> Volver a la lista</Link>
        </div>

      </div>
    );
  } else
    return (
      <img className="cargando" src="https://i.gifer.com/ZdPH.gif" alt=""></img>
    );
};

export default ItemDetail;
