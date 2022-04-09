import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Home} from "./components/home/Home"
import {Goods} from "./components/goods/Goods"
import {Car} from "./components/car/Car"
import {Phone} from "./components/phone/Phone"
import {Clothes} from "./components/goods/clothes/Clothes"
import {Accessories} from "./components/goods/accessories/Accessories"
import {PhoneCase} from "./components/goods/phonecase/PhoneCase"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/goods" element={<Goods/>}></Route>
          <Route path="/Car" element={<Car/>}></Route>
          <Route path="/Phone" element={<Phone/>}></Route>
          <Route path="/goods/clothes" element={<Clothes/>}></Route>
          <Route path="/goods/accessories" element={<Accessories/>}></Route>
          <Route path="/goods/phonecase" element={<PhoneCase/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
