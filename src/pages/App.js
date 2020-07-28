import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';

import { StyledApp, StyledComponent } from './styleApp';
import Navbar from '../components/navbar';
import Home from './home';
import Starships from './starships';
import Weapons from './weapons';
import Characters from './characters';
import Login from "./login";

function App() {
  return (
    <StyledApp>
      <Header/>
        <Router>
          <Navbar/>
          <StyledComponent>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/Weapons">
                <Weapons />
              </Route>
              <Route path="/characters">
                <Characters />
              </Route>
              <Route path="/starships">
                <Starships />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </StyledComponent>
        </Router>
      <Footer/>
    </StyledApp>
  );
}

export default App;
