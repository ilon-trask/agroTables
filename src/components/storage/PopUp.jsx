import React, { useState } from "react";
import styles from "../../App.css";
import classes from "./popUp.module.css";

export default function Popup(props) {
  let [product, setProduct] = useState({
    date: "",
    name: "",
    amount: "",
    cost: "",
    price: "",
  });
  let [falseText, setFalseText] = useState(false);
  // console.log(product);
  function giveDate() {
    console.log(product);
    props.takeDate(product);
  }
  return (
    <div
      className={
        props.active
          ? classes.popupBg
          : classes.popupBg + " " + classes.unActive
      }
      onClick={() => {
        props.setActive(false);
      }}
    >
      <div className={classes.popup} onClick={(e) => e.stopPropagation()}>
        <div className={classes.inputContainer}>
          <div>
            <p>Вкажіть дату</p>
            <input
              value={product.date}
              placeholder="Вкажіть дату"
              onInput={(e) => {
                setProduct({ ...product, date: e.target.value });
              }}
              type="text"
            />
          </div>
          <div>
            <p>Вкажіть назву</p>
            <input
              value={product.name}
              placeholder="Вкажіть назву"
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
              }}
              type="text"
            />
          </div>
          <div>
            <p>Одиниці вимміру</p>
            <input placeholder="Вкажіть вимміру" type="text" />
          </div>
          <div>
            <p>Вкажіть кількість</p>
            <input
              value={product.amount}
              placeholder="Вкажіть кількість"
              onChange={(e) => {
                setProduct({
                  ...product,
                  amount: +e.target.value,
                });
              }}
              type="number"
            />
          </div>
          <div>
            <p>Вкажіть ціну</p>
            <input
              value={product.cost}
              placeholder="Вкажіть ціну"
              onChange={(e) => {
                setProduct({
                  ...product,
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
              product.date != "" &&
              product.name != "" &&
              product.amount != ""
            ) {
              setProduct({
                ...product,
                price: +product.cost * +product.amount,
              });
              giveDate();
              props.setActive(false);
              setProduct({
                date: "",
                name: "",
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
