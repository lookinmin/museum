import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Home} from "./components/home/Home"
import {Goods} from "./components/goods/Goods"
import {Car} from "./components/car/Car"
import {Phone} from "./components/phone/Phone"
import {VideoStart} from './components/home/VideoStart'
import {Detail} from './components/goods/detail/Detail'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/' element={<VideoStart/>}></Route>
          
          <Route path="/Car" element={<Car/>}></Route>
          <Route path="/Phone" element={<Phone/>}></Route>
          <Route path="/goods" element={<Goods/>}></Route>
          <Route path={`${/detail/}:id`} element={<Detail/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
