//////////////estilos////////////////
import "./App.css";
import "./scss/main.scss";
/////////////////////react////////////
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/////////////////////componentes//////////////////
import Navbar from "./componentes/navbar/Navbar";
import ItemListContainer from "./componentes/itemList/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetail/ItemDetailContainer";
import ItemCount from "./componentes/itemCount/ItemCount";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route path="category/:categoryId" element={<ItemListContainer />}></Route>
        <Route path="detail/:paramId" element={<ItemDetailContainer />}></Route>
        <Route path="count" element={<ItemCount />}></Route>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
