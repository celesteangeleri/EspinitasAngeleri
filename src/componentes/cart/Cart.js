import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../cart/ItemCart";
import "../../scss/main/main.scss";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { useState } from "react";
import ReciboCompra from "./ReciboCompra";


const Cart = () => {
  const { itemCarrito, removeFromCarrito, removeAll } = useCartContext();
  const [orderState, setOrderState] = useState(false)
  const [recibo, setRecibo] = useState ({})
 
const sendOrder =()=>{
    const order = {
        buyer : {name:'agustin', phone: '1111', email: 'a@a.com'},
        items: [{ name: 'bici', price:100}],
        total:100
    }
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders')

addDoc (collection(db, order), order).then(({id}) => { console.log(id);})
}
 
//si el carrito esta vacio retorna boton al menú
  if (itemCarrito.length === 0)
    return (
      <div className="carritoVacio">
        <h2 className="textoCV">El carrito esta vacio</h2>
        <Link className="linkCV" to="/">
          volver al Inicio
        </Link>
      </div>
    );
// sino muestra la tabla con productos y el formulario 
 else {
    if (orderState === true)
    return <ReciboCompra recibo = {recibo} removeAll = {removeAll}/>
    else

    return (
      <>
        <table className="containerTabla">
          <tr className="bordeTabla">
            <th> Cantidad</th>
            <th> Nombre </th>
            <th> Precio </th>
            <th> total </th>
          </tr>
          {itemCarrito.map((prod) => (
            <ItemCart
              removeFromCarrito={removeFromCarrito}
              key={prod.id}
              prod={prod}
            />
          ))}
        </table>

        <div>
          <button className="botonVc" onClick={removeAll}>
            Vaciar Carrito
          </button>
        </div>
        <div>
          <Link className="botonSc" to="/">
            Seguir Comprando
          </Link>
        </div>
        <div className="containerForm">
          <p> Complete el formulario para terminar su compra </p>
           <form onSubmit={sendOrder} >
            {/* <input type="text" name= 'nombre' placeholder='nombre' value={formData.nombre} />
            <input type="text" name= 'telefono' placeholder='telefono' value={formData.telefono} />
            <input type="email" name= 'email' placeholder='email' value={formData.email} />
            <input type="email" name='repetirEmail' placeholder='repita su email' value={formData.repetirEmail} />
             */}<button>Enviar</button>
        </form>
         
        </div>
      </>
    );
          }
};

export default Cart;
