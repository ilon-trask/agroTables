import React, { useState } from "react";
import Storage from "./components/Storage";

function App() {
  let [onScr, setOnScr] = useState("Storage");
  let [products, setProducts] = useState([
    // {
    //   date: "",
    //   name: "",
    //   amount: 0,
    //   cost: 0,
    //   price: 0,
    // },
  ]);
  let [profit, setProfit] = useState([
    // {
    //   sellDate: "",
    //   payer: "",
    //   goods: "",
    //   amount: 0,
    //   cost: 0,
    //   price: 0,
    // },
  ]);
  let [active, setActive] = useState(false);
  let [profitActive, setProfitActive] = useState(false);
  function takeDataInputs(newObject) {
    newObject.price = newObject.cost * +newObject.amount;
    setProducts([...products, newObject]);
    console.log(products);
  }
  function takeProfitInputs(newObject) {
    newObject.price = newObject.cost * +newObject.amount;
    setProfit([...profit, newObject]);
    console.log(profit);
  }
  function changeScr(name) {
    setOnScr(name);
    console.log(name);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="btn-top">
          <button className="lfColum">Господарство</button>
          <button
            title="Готове"
            onClick={() => {
              changeScr("Profit");
            }}
          >
            Дохід
          </button>
          <button>Витрати</button>
          <button
            title="Готове"
            onClick={() => {
              changeScr("Storage");
            }}
          >
            Склад ГП
          </button>
          <button className="RdColum">Послуги</button>
          <button className="RdColum">Склад М</button>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button className="lfColum">Будівлі та споруди</button>
            <button className="lfColum">Техніка і обладнання</button>
            <button className="lfColum">Земельні ділянки</button>
            <button className="lfColum">Кадри</button>
            <button className="lfColum">Культури</button>
            <button className="lfColum">Тварини</button>
            <button className="lfColum">Біоактиви</button>
          </div>
          <div>
            <Storage
              active={active}
              setActive={setActive}
              profitActive={profitActive}
              setProfitActive={setProfitActive}
              takeDataInputs={takeDataInputs}
              profit={profit}
              setProfit={setProfit}
              takeProfitInputs={takeProfitInputs}
              products={products}
              setProducts={setProducts}
              onScr={onScr}
            />
          </div>
          <div>
            <button className="RdColum">Аналітика</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
