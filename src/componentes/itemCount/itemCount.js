import React from 'react'
import "../../scss/main.scss"
import  { useState } from 'react';


const ItemCount = () => {

    const stock = 10
    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador >= stock) {
            return (
                console.log('sin stock')
            )
        } setContador(contador + 1);
    }
    const restar = () => {
        if (contador <= 0) {
            return (console.log('imposible'))

        }
        setContador(contador - 1);
    }
    return (
        <div className="card" >
            <div className="card-header">
                <h3>contador</h3>
            </div>

            <div className="card-body">
                <button className="boton" onClick={sumar}>+</button>
                <span> {contador}</span>
                <button className="boton" onClick={restar}>-</button>
            </div>


        </div>
    )
}

export default ItemCount
