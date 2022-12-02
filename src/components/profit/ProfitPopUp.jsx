import React, { useState } from "react";
import styles from "../../App.css";
import classes from "./popUp.module.css";

export default function ProfitPopup(props) {
  console.log(props);
  let [profit, setProfit] = useState({
    sellDate: "",
    payer: "",
    amount: "",
    cost: "",
    price: "",
  });
  let [falseText, setFalseText] = useState(false);
  // console.log(profit);
  function giveProfit() {
    console.log(profit);
    props.takeProfit(profit);
  }
  return (
    <div
      className={
        props.profitActive
          ? classes.popupBg
          : classes.popupBg + " " + classes.unActive
      }
      onClick={() => {
        props.setProfitActive(false);
      }}
    >
      <div className={classes.popup} onClick={(e) => e.stopPropagation()}>
        <div className={classes.inputContainer}>
          <div>
            <p>Вкажіть дату продажу</p>
            <input
              value={profit.sellDate}
              placeholder="Вкажіть продажу"
              onInput={(e) => {
                setProfit({ ...profit, sellDate: e.target.value });
              }}
              type="text"
            />
          </div>
          <div>
            <p>Вкажіть назву</p>
            <input
              value={profit.payer}
              placeholder="Вкажіть назву"
              onChange={(e) => {
                setProfit({ ...profit, payer: e.target.value });
              }}
              type="text"
            />
          </div>
          <div>
            <p>Вкажіть товар</p>
            <select
              type="text"
              onChange={(e) => {
                console.log(e.target.value);
                setProfit({ ...profit, goods: e.target.value });
              }}
            >
              <option value="" selected disabled hidden>
                виберіть
              </option>
              <option value="продукт">продукт</option>
              <option value="послуга">послуга</option>
            </select>
          </div>
          <div>
            <p>Одиниці вимміру</p>
            <input placeholder="Вкажіть вимміру" type="text" />
          </div>
          <div>
            <p>Вкажіть кількість</p>
            <input
              value={profit.amount}
              placeholder="Вкажіть кількість"
              onChange={(e) => {
                setProfit({
                  ...profit,
                  amount: +e.target.value,
                  price: +profit.cost * +profit.amount,
                });
              }}
              type="number"
            />
          </div>
          <div>
            <p>Вкажіть ціну</p>
            <input
              value={profit.cost}
              placeholder="Вкажіть ціну"
              onChange={(e) => {
                setProfit({
                  ...profit,
                  cost: +e.target.value,
                });
              }}
              type="number"
            />
          </div>
        </div>
        <p style={{ textAlign: "center", color: "red" }}>
          {falseText ? "Ви не ввели всі потрібні данні!" : ""}
        </p>
        <button
          className={classes.saveBtn}
          onClick={() => {
            if (
              profit.sellDate != "" &&
              profit.payer != "" &&
              profit.amount != ""
            ) {
              setProfit({
                ...profit,
                price: +profit.cost * +profit.amount,
              });
              giveProfit();
              props.setProfitActive(false);
              setProfit({
                sellDate: "",
                payer: "",
                goods: "",
                amount: "",
                cost: "",
                price: "",
              });
              setFalseText(false);
            } else {
              setFalseText(true);
            }
          }}
        >
          Зберегти
        </button>
      </div>
    </div>
  );
}
