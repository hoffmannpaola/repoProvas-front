import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --darkBg:  #0E0B16;
    --generalFont: 'Chau Philomene One', sans-serif;
  

  body {
    font-family: var(--generalFont);
    color: white;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    background: var(--darkBg);
  }

`;
