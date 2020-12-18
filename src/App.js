import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";
import ConsultarProva from "./pages/ConsultarProva";
import UploadProva from "./pages/UploadProva";
import Disciplina from "./pages/Disciplina";
import Professor from "./pages/Professor";
import Periodo from "./pages/Periodo";



export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/periodo/:id" exact component={Periodo} />
          <Route path="/professor/:id" exact component={Professor} />
          <Route path="/disciplina/:id" exact component={Disciplina} />
          <Route path="/postar" exact component={UploadProva} />
          <Route path="/buscar" exact component={ConsultarProva} />
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
