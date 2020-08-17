import React from "react";

const Operation = ({
  addTransaction,
  addDescription,
  addAmount,
  description,
  amount,
}) => (
  <section className="operation">
    <h3>Нова операція</h3>
    <form id="form">
      <label>
        <input
          type="text"
          className="operation__fields operation__name"
          placeholder="Назва операції"
          onChange={addDescription}
          value={description}
        />
      </label>
      <label>
        <input
          type="number"
          className="operation__fields operation__amount"
          placeholder="Введіть суму"
          onChange={addAmount}
          value={amount}
        />
      </label>
      <div className="operation__btns">
        <button
          onClick={() => addTransaction(false)}
          type="button"
          className="operation__btn operation__btn-subtract"
        >
          VITRATA
        </button>
        <button
          onClick={() => addTransaction(true)}
          type="button"
          className="operation__btn operation__btn-add"
        >
          ДОХІД
        </button>
      </div>
    </form>
  </section>
);

export default Operation;
