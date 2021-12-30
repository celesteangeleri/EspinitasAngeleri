import React from "react";
import "../../scss/main/main.scss";
import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { getProductById } from "../../products";
import { useParams } from "react-router-dom";
import {getDoc, doc} from 'firebase/firestore'
import { db } from "../../services/firebase/firebase";

const ItemDetailContainer = () => {

  const [products, setProducts] = useState();
  const { paramId } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getDoc(doc(db, 'items',paramId)).then((querysnapshot) => {
      const product ={id: querysnapshot.id, ... querysnapshot.data()}
    setProducts(product)
    }).catch((error) =>{
      console.log('error searching item', error);
    }).finally(()=>{
      setLoading(false)
    })
    

    return( () => {
      setProducts();
    });
  }, [paramId]);
if (loading) {
  return  <img className="cargando" src="https://i.gifer.com/ZdPH.gif" alt=""></img>
}
  return (
    <div>
      <div>
        <ItemDetail prod={products} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
