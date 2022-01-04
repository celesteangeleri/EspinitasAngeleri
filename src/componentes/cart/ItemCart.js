import { useCartContext } from "../../context/CartContext";
import React from "react";
import '../../scss/main/main.scss';



const ItemCart = ({ prod }) => {
    const { removeFromCarrito } = useCartContext();
    console.log(prod);

   const calcularSubTotal = (prod) => {
        let subTotal = prod.precio * prod.inCart;
        return subTotal;
    };

    return (
        <>
            <tr >
                <td className='tabla'>{prod.inCart}</td>
                <td className='tabla'>{prod.nombre}</td>
                <td className='tabla'>{prod.precio}</td>
                <td className='tabla' > {calcularSubTotal(prod)}</td>
                <td> <button className="botonX" onClick={() => { removeFromCarrito(prod.id); }}> X  </button></td>
            </tr>

            
        </>
    );
};

export default ItemCart;
