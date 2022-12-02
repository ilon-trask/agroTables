import React from "react";
import classes from "./table.module.css";

export default function ProfitTable(props) {
  console.log(props);

  return (
    <table>
      <tr>
        <th> дата продажу</th>
        <th> купець</th>
        <th> товар</th>
        <th> кількість</th>
        <th> ціна</th>
        <th> сума</th>
      </tr>

      {props.profit.map((el) => (
        <tr>
          <td>{el.sellDate}</td>
          <td>{el.payer}</td>
          <td>{el.goods}</td>
          <td>{el.amount}</td>
          <td>{el.cost}</td>
          <td>{el.price}</td>
        </tr>
      ))}
    </table>
  );
}
