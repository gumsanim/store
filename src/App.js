import {React, useState} from "react";
import './App.css';
import {Route} from "react-router-dom";
import Home from "./components/Home";
import Tops from "./components/Tops";
import Bottoms from "./components/Bottoms";
import Shoes from "./components/Shoes";
import DetailTops from "./components/DetailTops";
import DetailBottoms from "./components/DetailBottoms";
import DetailShoes from "./components/DetailShoes";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Topup from "./components/Topup";

function App() {

  const [money, setMoney] = useState(0);

  const [tops, setTops] = useState(
    [
      {
        id: 0,
        name: "후드티",
        price: 25000,
        stock: 9,
        img: "images/tops0.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 1,
        name: "니트",
        price: 23000,
        stock: 8,
        img: "images/tops1.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 2,
        name: "셔츠",
        price: 20000,
        stock: 12,
        img: "images/tops2.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 3,
        name: "가디건",
        price: 30000,
        stock: 10,
        img: "images/tops3.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 4,
        name: "티셔츠",
        price: 9000,
        stock: 20,
        img: "images/tops4.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
    ]
  )

  const [bottoms, setBottoms] = useState(
    [
      {
        id: 0,
        name: "청바지",
        price: 32000,
        stock: 3,
        img: "images/bottoms0.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 1,
        name: "슬랙스",
        price: 35000,
        stock: 13,
        img: "images/bottoms1.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 2,
        name: "반바지",
        price: 19000,
        stock: 10,
        img: "images/bottoms2.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 3,
        name: "카고바지",
        price: 31000,
        stock: 18,
        img: "images/bottoms3.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
    ]
  )

  const [shoes, setShoes] = useState(
    [
      {
        id: 0,
        name: "컨버스",
        price: 59000,
        stock: 16,
        img: "images/shoes0.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 1,
        name: "슈퍼스타",
        price: 88000,
        stock: 6,
        img: "images/shoes1.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 2,
        name: "에어포스",
        price: 120000,
        stock: 11,
        img: "images/shoes2.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
      {
        id: 3,
        name: "올드스쿨",
        price: 76000,
        stock: 2,
        img: "images/shoes3.jpg",
        order: 0,
        cart: 0,
        purchase:0
      },
    ]
  )

  return (
    <div className="App">
      <Route path="/">
        <Home money={money} setMoney={setMoney}/>
      </Route>
      <Route exact path="/tops">
        <Tops tops={tops} setTops={setTops} />
      </Route>
      <Route exact path="/bottoms">
        <Bottoms bottoms={bottoms} setBottoms={setBottoms}/>
      </Route>
      <Route exact path="/shoes">
        <Shoes shoes={shoes} setShoes={setShoes}/>
      </Route>
      <Route path="/tops/detail/:id">
        <DetailTops 
          tops={tops} 
          setTops={setTops} 
          money={money} 
          setMoney={setMoney}
        />
      </Route>
      <Route path="/bottoms/detail/:id">
        <DetailBottoms 
          bottoms={bottoms} 
          setBottoms={setBottoms} 
          money={money} 
          setMoney={setMoney}
        />
      </Route>
      <Route path="/shoes/detail/:id">
        <DetailShoes 
          shoes={shoes} 
          setShoes={setShoes} 
          money={money} 
          setMoney={setMoney}
        />
      </Route>
      <Route path="/cart">
        <Cart 
          money={money}
          setMoney={setMoney}
          tops={tops}
          setTops={setTops}
          bottoms={bottoms}
          setBottoms={setBottoms}
          shoes={shoes}
          setShoes={setShoes}
        />
      </Route>
      <Route path="/order">
        <Order 
          money={money} 
          setMoney={setMoney}
          tops={tops}
          setTops={tops}
          bottoms={bottoms}
          setBottoms={setBottoms}
          shoes={shoes}
          setShoes={setShoes}
        />
      </Route>
      <Route path="/topup">
        <Topup money={money} setMoney={setMoney}/>
      </Route>
    </div>
  );
}

export default App;