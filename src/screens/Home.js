import React from 'react'

import { Header } from '../components/Header'
import { routes } from '../defs/routes'
import logo from '../assets/logo.png'
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header logo={logo} submenus={routes} />
      <Footer />
    </>
  );
}
