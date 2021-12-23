import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../cart/ItemCart'
import '../../scss/main/main.scss'

const Cart = () => {
    const { itemCarrito, removeFromCarrito, removeAll } = useCartContext()



    if (itemCarrito.length === 0)
        return (
            <div className='carritoVacio'>
                <h2 className='textoCV'>El carrito esta vacio</h2>
                <Link className='linkCV' to='/'> volver al Inicio</Link>
            </div>
        )
    else
        return (
            <>
                <table className='containerTabla'>
                    <tr className='bordeTabla'>
                        <th> Cantidad</th>
                        <th> Nombre </th>
                        <th> Precio </th>
                        <th> total </th>
                    </tr>
                    {itemCarrito.map(prod => <ItemCart removeFromCarrito={removeFromCarrito} key={prod.id} prod={prod} />)}
                </table>
                <div>
                    <button className='botonVc' onClick={removeAll}>Vaciar Carrito</button>
                </div>
                <div>
                   <Link className='botonSc' to='/'>Seguir Comprando</Link>
                </div>
            </>

        )

}


export default Cart
