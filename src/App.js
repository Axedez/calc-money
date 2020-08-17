import React, { Component } from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {
  state = {
    transactions: JSON.parse(localStorage.getItem("calcMoney")) || [],
    description: "",
    amount: "",
    resultIncome: 0,
    resultExpenses: 0,
    totalBalance: 0,
  };
  componentWillMount() {
    this.getTotalBalance();
  }
  componentDidUpdate() {
    this.addStorage();
  }
  addTransaction = (add) => {
    const transactions = [...this.state.transactions];
    transactions.push({
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: parseFloat(this.state.amount),
      add,
    });

    this.setState(
      {
        transactions,
        description: "",
        amount: "",
      },
      () => {
        this.getTotalBalance();
      }
    );
  };

  //this.state.amount = e.target.value;
  addAmount = (e) => {
    this.setState({ amount: parseFloat(e.target.value) });
  };

  addDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  getIncome() {
    return this.state.transactions
      .filter((item) => item.add)
      .reduce((acc, item) => item.amount + acc, 0);
  }
  //similar function, but with using cursor
  getExpenses = () =>
    this.state.transactions.reduce(
      (acc, item) => (!item.add ? item.amount + acc : acc),
      0
    );

  getTotalBalance() {
    const resultIncome = this.getIncome();
    const resultExpenses = this.getExpenses();

    const totalBalance = resultIncome - resultExpenses;

    this.setState({
      resultIncome,
      resultExpenses,
      totalBalance,
    });
  }
  addStorage() {
    localStorage.setItem("calcMoney", JSON.stringify(this.state.transactions));
  }
  delTransaction = (key) => {
    const transactions = this.state.transactions.filter(
      (item) => item.id !== key
    );
    this.setState({ transactions }, this.getTotalBalance);
  };
  render() {
    return (
      <>
        <header>
          <h1>Онлайн гаманець</h1>
          <h2>Калькулятор витрат</h2>
        </header>

        <main>
          <div className="container">
            <Total
              resultExpenses={this.state.resultExpenses}
              resultIncome={this.state.resultIncome}
              totalBalance={this.state.totalBalance}
            />

            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount}
            />

            <History
              transactions={this.state.transactions}
              delTransaction={this.delTransaction}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
