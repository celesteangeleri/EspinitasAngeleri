//////////////estilos////////////////
import "./App.css";
import "./scss/main/main.scss";
/////////////////////react////////////
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/////////////////////componentes//////////////////
import Navbar from "./componentes/navbar/Navbar";
import ItemListContainer from "./componentes/itemList/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetail/ItemDetailContainer";
import ItemCount from "./componentes/itemCount/ItemCount";
import Cart from "./componentes/cart/Cart";
///////////////////////notificaciones////////////
import { NotificationContextProvider } from "./context/NotificatiosContext";
import Notification from './componentes/notification/Notification'


function App() {
  return (
    <NotificationContextProvider>
    <BrowserRouter>
      <Navbar />
      <Notification/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route path="category/:categoryId" element={<ItemListContainer />}></Route>
        <Route path="detail/:paramId" element={<ItemDetailContainer />}></Route>
        <Route path="count" element={<ItemCount />}></Route>      
        <Route path= "/cart" element= {<Cart/>} ></Route> 
      </Routes>
    </BrowserRouter>
    </NotificationContextProvider>
  );
}

export default App;
