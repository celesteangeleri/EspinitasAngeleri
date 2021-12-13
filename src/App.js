import "./App.css";
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './scss/main.scss'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route>
          <ItemDetailContainer />
        </Route>
  <ItemCount />*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
