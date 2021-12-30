import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!categoryId) {
     setLoading(true)
    getDocs(collection(db,'items')).then((querySnapshot)=>{
      console.log(querySnapshot);
      const products =querySnapshot.docs.map(doc=>{
        console.log(doc);
        return {id :doc.id, ...doc.data()}
      })
      setProducts(products)
    }).catch((error)=>{
      console.log('error searching items', error);
    }).finally(()=>{
      setLoading(false)
    }) 
    }else{
      setLoading(true)
      getDocs(query(collection (db, 'items'), where('category', '==',categoryId ))).then((querySnapshot)=>{
        console.log(querySnapshot);
        const products =querySnapshot.docs.map(doc=>{
          console.log(doc);
          return {id :doc.id, ...doc.data()}
        })
        setProducts(products)
      }).catch((error)=>{
        console.log('error searching items', error);
      }).finally(()=>{
        setLoading(false)
      }) 
    }
    

    return () => {
      setProducts([]);
    };
  }, [categoryId]);
if (loading){
  return  <img className="cargando" src="https://i.gifer.com/ZdPH.gif" alt=""></img>
}
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
