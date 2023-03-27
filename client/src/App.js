import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from "react-router-dom";

import './App.scss';
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/blog' element={<Blog/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
