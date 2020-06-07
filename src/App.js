import React from "react";
import "./App.css";
import Header from './components/Header';
import Home from "./components/Home";
import Explore from './components/Explore';
import Create from './components/Create';
import Share from "./components/Share";
import Footer from './components/Footer';
import ContactModal from "./components/ContactModal";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Explore />
      <Create />
      <Share />
      <Footer />
      <ContactModal />
    </>
  );
}

export default App;
