import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../cart/ItemCart";
import "../../scss/main/main.scss";
import { addDoc, collection } from "firebase/firestore";
import {db} from '../../services/firebase/firebase'
import { useState } from "react";
import ReciboCompra from "./ReciboCompra";


const Cart = () => {
  const { itemCarrito, removeFromCarrito, removeAll } = useCartContext();
  const [orderState, setOrderState] = useState(false)
  const [recibo, setRecibo] = useState ({})
  const [formData, setFormData]=useState({
    nombre:'',
    email:'',
    telefono:'',
  
})
const handlerChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
 
const sendOrder =(e)=>{
    e.preventDefault()
    const objOrder = {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono
         }
    
const orderCollection = collection(db, "orders")
addDoc(orderCollection, objOrder).then(({id}) => { console.log(id)})
console.log(addDoc, 'esto es addDoc');
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
         <form onSubmit={sendOrder} onChange={handlerChange} >
            <input type="text" name= 'nombre' placeholder='nombre' value={formData.name} />
            <input type="text" name= 'telefono' placeholder='telefono' value={formData.telefono} />
            <input type="email" name= 'email' placeholder='email' value={formData.email} />      
            <button >Enviar</button>      
        </form>
          
        </div>
      </>
    );
          }
};

export default Cart;
