import React from "react";
import "./App.css";
import Header from './components/Header';
import Home from "./components/Home";
import Explore from './components/Explore';
import Create from './components/Create';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Explore />
      <Create />
    </>
  );
}

export default App;
