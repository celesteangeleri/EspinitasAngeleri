import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../cart/ItemCart";
import "../../scss/main/main.scss";
import { addDoc, collection, Timestamp, doc, writeBatch, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import { useState } from "react";

const Cart = () => {
  const { itemCart, removeFromCart, removeAll } = useCartContext();  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const handlerChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
//objeto de la orden de compra
  const sendOrder = (e) => {
    e.preventDefault();
    const objOrder = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      items: itemCart,
      dia: Timestamp.fromDate(new Date())
    };
// agrego una nueva coleccion y update de stock

    const batch = writeBatch(db)
    const outofStock = []
    
    objOrder.items.forEach(prod => {
      getDoc(doc(db, 'items', prod.id)).then(documentSnapshot => {       
        if (documentSnapshot.data().stock >= prod.quantity) {
          console.log('esto es el stock');
          batch.update(doc(db, 'items', documentSnapshot.id), {
            stock:documentSnapshot.data().stock - prod.quantity
          })
        }else{
          outofStock.push({ id: documentSnapshot.id, ...documentSnapshot.data()})
        }
      })
    })

    if(outofStock.length === 0){
      addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
        batch.commit().then(()=>{
          console.log('su id de compra es', id)          
        })         
      }).catch((error) => {
        console.log(error, 'error al ejecutar la orden');
      })
    }
  
  }

  //si el carrito esta vacio retorna boton al menú
  if (itemCart.length === 0){
    return (
      <div className="carritoVacio">
        <h2 className="textoCV">El carrito esta vacio</h2>
        <Link className="linkCV" to="/">
          volver al Inicio
        </Link>
      </div>
    )
    } 
  // sino muestra la tabla con productos y el formulario
    return (
      <>
        <table className="containerTabla">
          <tr className="bordeTabla">
            <th> Cantidad</th>
            <th> Nombre </th>
            <th> Precio </th>
            <th> total </th>
          </tr>
          {itemCart.map((prod) => (
            <ItemCart
              removeFromCarrito={removeFromCart}
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
          <form onSubmit={sendOrder} onChange={handlerChange}>
            <input
              type="text"
              name="nombre"
              placeholder="nombre"
              defaultValue={formData.name}
            />
            <input
              type="text"
              name="telefono"
              placeholder="telefono"
              defaultValue={formData.telefono}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={formData.email}
            />

            <button>Terminar compra</button>
          </form>
        </div>
      </>
    );
};

export default Cart;
