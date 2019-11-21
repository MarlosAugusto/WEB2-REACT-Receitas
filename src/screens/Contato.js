import React from 'react'

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Container } from "../components/Container"
import { ContactCard, Title } from "../components/ContactCard"
import { routes } from "../defs/routes"
import logo from "../assets/logo.png"
import marlos from "../assets/images/marlos.jpg"
import ian from "../assets/images/ian.jpg"

import styled from "styled-components";

const Contact = styled.div`

`;

export function Contato() {
  return (
    <>
      <Header logo={logo} submenus={routes} />
      <Container>
        <Title>Desenvolvedores</Title>
        <ContactCard image={ian} name="Ian Carlos" ra="193xxxx" address="85660-00 - Dois Vizinhos - Paraná" course="Engenharia de Software - 6º período" />
        <ContactCard image={marlos} name="Marlos Augusto" ra="1930818" address="85660-00 - Dois Vizinhos - Paraná" course="Engenharia de Software - 6º período" />
      </Container>
      <Footer />
    </>
  );
}
