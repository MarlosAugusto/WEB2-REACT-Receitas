import React from 'react'

import { ContactCard, Title } from "../components/ContactCard"
import marlos from "../assets/images/marlos.jpg"
// import ian from "../assets/images/ian.jpg"

import styled from "styled-components";


export function Contato() {
  return (
    <>
      <Title>Desenvolvedores</Title>
      {/* <ContactCard image={ian} name="Ian Carlos" ra="193xxxx" address="85660-00 - Dois Vizinhos - Paraná" course="Engenharia de Software - 6º período" /> */}
      <ContactCard image={marlos} name="Marlos Augusto" ra="1930818" address="85660-00 - Dois Vizinhos - Paraná" course="Engenharia de Software - 6º período" />
    </>
  );
}
