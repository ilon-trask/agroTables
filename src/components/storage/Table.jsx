import React from "react";
import classes from "./table.module.css";

export default function Table(props) {
  console.log(props.products);

  return (
    <table>
      <tr>
        <th> дата</th>
        <th> ім'я</th>
        <th> кількість</th>
        <th> ціна</th>
        <th> сума</th>
      </tr>
      {props.products.map((el) => (
        <tr>
          <td> {el.date}</td>
          <td> {el.name}</td>
          <td> {el.amount}</td>
          <td> {el.cost}</td>
          <td> {el.price}</td>
        </tr>
      ))}
    </table>
  );
}
