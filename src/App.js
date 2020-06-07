import React from "react";
import "./App.css";
import Header from './components/Header';
import Home from "./components/Home";
import Explore from './components/Explore';
import Create from './components/Create';
import Share from "./components/Share";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Explore />
      <Create />
      <Share />
    </>
  );
}

export default App;
