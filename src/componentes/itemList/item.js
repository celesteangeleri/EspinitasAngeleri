import React from 'react'
import { Link } from 'react-router-dom'
import "../../scss/main.scss"

const Item = ({product}) => {
  const handleClick = (evt) => {
    evt.stopPropagation()
    console.log(`hice click en Item ${product.id}`)
}
    return (
        <div className="item"  onClick={handleClick}>
        <div>
          <h1 className="nombreItem">{product.nombre}</h1>
        </div>
        <div>
          <img className="imagenItem" src={product.img} alt="" />
        </div>
        <div>
          <h3 className="precioItem">{product.precio}</h3>
        </div>
        <div>
        <Link className='botonItem' to={`/detail/${product.id}`}>Ver detalle</Link></div>
      </div>
    )
}

export default Item
