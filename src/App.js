import React from 'react';
import { Header } from './Components/Header';
import {Balance} from './Components/Balance';
import {IncomeExpenses} from './Components/IncomeExpenses';
import {TransactionList} from './Components/TransactionList';
import {AddExpense} from './Components/AddExpense';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddExpense />
      </div>
    </GlobalProvider>
  );
}

export default App;
