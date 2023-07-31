import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Find from "./components/Find";
import Create from "./components/Create";
import Details from "./components/Details";
import Manage from "./components/Manage";
import Login from "./components/Login";
import Signup from "./components/Signup";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";

function App(){
  return(
  <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find" element={<Find />} />
      <Route path="/details" element={<Details />} />
      <Route path="/create" element={<Create />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />



    </Routes>
    </BrowserRouter>
    <footer className="fixed-bottom bg-dark text-light text-center py-1">
      <div className="container">
        <p>© 2023 HungryHive</p>
      </div>
    </footer>
  </>
  );
}
export default App;


