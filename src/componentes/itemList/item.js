import React from "react";
import { Link } from "react-router-dom";

import "../../scss/itemListContainer/item.scss";

const Item = ({ product }) => {
  const handleClick = (evt) => {
    evt.stopPropagation();
    
  };
  return (
    <div className="item" onClick={handleClick}>
      <h1>{product.nombre}</h1>
      <img src={product.img} alt="" />
      <h3>{product.precio}</h3>
      <Link className="botonLink" to={`/detail/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
