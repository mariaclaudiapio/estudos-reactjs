import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

// 5 - link entre páginas
import Navbar from "./components/Navbar";
// 9 - Pesquisa
import SearchForm from "./components/SearchForm";

function App() {


  return (
    <div className="App">
      <Navbar />
      <SearchForm />
      {/* O Outlet é o conteúdo que se altera */}
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
