import React from "react";
import "../../scss/main/main.scss";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'
import ItemCount from "../itemCount/ItemCount";

const ItemDetailContainer = () => {
  
  const [products, setProducts] = useState();
  const { paramId } = useParams()

  useEffect(() => {
    getProductById(paramId).then(item => {
        setProducts(item)
    }).catch(err  => {
        console.log(err)
    })

    return (() => {
        setProducts()
    })

}, [paramId])

  return (
    <div>
      <div>
        <ItemDetail prod={products} />
        <ItemCount/>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
