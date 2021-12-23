//////////////estilos////////////////
import "./App.css";
import "./scss/main/main.scss";
/////////////////////react////////////
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/////////////////////componentes//////////////////
import Navbar from "./componentes/navbar/Navbar";
import ItemListContainer from "./componentes/itemList/itemListContainer";
import ItemDetailContainer from "./componentes/itemDetail/itemDetailContainer";
import ItemCount from "./componentes/itemCount/itemCount";
import Cart from "./componentes/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import { useCarritoContext } from "./context/CartContext";
///////////////////////notificaciones////////////
import { NotificationContextProvider } from "./context/NotificatiosContext";
import Notification from "./componentes/notification/Notification";

function App() {
  return (
    <CartContextProvider>
      <NotificationContextProvider>
        <BrowserRouter>
          <Navbar />
          <Notification />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />}></Route>
            <Route
              path="category/:categoryId"
              element={<ItemListContainer />}
            ></Route>
            <Route
              path="detail/:paramId"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="count" element={<ItemCount />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </NotificationContextProvider>
    </CartContextProvider>
  );
}

export default App;
