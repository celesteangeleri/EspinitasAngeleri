import React from "react";
import ItemRecibo from "./ItemRecibo";
import { Link } from "react-router-dom";

const ReciboCompra = ({ recibo, removeAll }) => {
  const prods = recibo.prods;
  return (
    <div>
      <h1> Recibo de Compra</h1>
      <div>
        <p>su compra ha sido procesada correctamente</p>
        <p>
          
          El codigo de su compra es {recibo.id} a nombre de
          {recibo.buyer.nombre}
        </p>
      </div>
      <div>
        <tr>
          <th>Categoria</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
        {prods.map((prod) => (
          <ItemRecibo producto={prod} key={prod.id} />
        ))}
        <p>con un total de : ${recibo.total}</p>
      </div>
      <Link to= '/'> <button onClick={removeAll}> Finalizar </button> </Link>
    </div>
  );
};

export default ReciboCompra;
