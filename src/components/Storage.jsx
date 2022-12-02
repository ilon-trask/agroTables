import React from "react";
import Table from "./storage/Table";
import PopUp from "./storage/PopUp";
import ProfitTable from "./profit/ProfitTable";
import ProfitPopUp from "./profit/ProfitPopUp";
import styles from "./storage.module.css";

export default function Storage({
  active,
  setActive,
  profitActive,
  setProfitActive,
  takeDataInputs,
  profit,
  setProfit,
  takeProfitInputs,
  products,
  setProducts,
  onScr,
}) {
  console.log(onScr);
  const TableField = {
    Storage: <Table products={products} />,
    Profit: <ProfitTable profit={profit} />,
  };
  const PopUpField = {
    Storage: (
      <PopUp active={active} setActive={setActive} takeDate={takeDataInputs} />
    ),
    Profit: (
      <ProfitPopUp
        profitActive={profitActive}
        setProfitActive={setProfitActive}
        takeProfit={takeProfitInputs}
      />
    ),
  };
  const btnField = {
    Storage: (
      <button
        className={styles.btn}
        onClick={() => {
          setActive(true);
        }}
      >
        Додати
      </button>
    ),
    Profit: (
      <button
        className={styles.btn}
        onClick={() => {
          setProfitActive(true);
        }}
      >
        Додати
      </button>
    ),
  };
  const TitleField = {
    Storage: "Журнал готової продукції",
    Profit: "Журанл Доходів",
  };
  return (
    <div className={styles.table}>
      <div className={styles.container}>
        <p>{TitleField[onScr]}</p>
        {TableField[onScr]}
        {/* <Table products={products} /> */}
        {btnField[onScr]}
      </div>
      {PopUpField[onScr]}
      {/* <PopUp active={active} setActive={setActive} takeDate={takeDataInputs} /> */}
    </div>
  );
}
