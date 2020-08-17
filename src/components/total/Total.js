import React from "react";

const Total = ({ resultExpenses, resultIncome, totalBalance }) => (
  <section className="total">
    <header className="total__header">
      <h3>Баланс</h3>
      <p className="total__balance">{totalBalance} UAH</p>
    </header>
    <div className="total__main">
      <div className="total__main-item total__income">
        <h4>Дохід</h4>
        <p className="total__money total__money-income">+{resultIncome} UAH</p>
      </div>
      <div className="total__main-item total__expenses">
        <h4>Витрати</h4>
        <p className="total__money total__money-expenses">
          -{resultExpenses} UAH
        </p>
      </div>
    </div>
  </section>
);

export default Total;
