import React from 'react';
import "./assets/fonts/Myriad Pro/style.css";
import "./style.css";

import { Header } from "./components/Header"
import { Container } from "./components/Container"
import { Footer } from "./components/Footer"
import { Home } from "./screens/Home";
import { ReceitasDoces } from "./screens/ReceitasDoces";
import { ReceitasSalgadas } from "./screens/ReceitasSalgadas";
import { NovaReceita } from "./screens/NovaReceita";
import { Contato } from "./screens/Contato";

import { routes } from "./defs/routes"
import logo from "./assets/logo.png"

import { Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header logo={logo} submenus={routes} />
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/receitas-doces" component={ReceitasDoces} />
        <Route path="/receitas-salgadas" component={ReceitasSalgadas} />
        <Route path="/nova-receita" component={NovaReceita} />
        <Route path="/contato" component={Contato} />
      </Container>
      <Footer />
    </div>
  );
}
