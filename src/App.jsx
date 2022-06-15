import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Home} from "./components/home/Home"
import {Goods} from "./components/goods/Goods"
import {Car} from "./components/car/Car"
import {Phone} from "./components/phone/Phone"
import {Detail} from './components/goods/detail/Detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pay } from "./components/goods/pay/Pay";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
          <Route path="/Car" element={<Car/>}></Route>
          <Route path="/Phone" element={<Phone/>}></Route>
          <Route path="/goods" element={<Goods/>}></Route>
          <Route path={`${/detail/}:id`} element={<Detail/>}></Route>
          <Route path={`${/pay/}:id`} element={<Pay/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
