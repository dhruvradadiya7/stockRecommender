import Header from "./components/Header";
import StockSearchForm from "./components/StockForm";
import { dataGenerator } from "./utils/dataGenerator";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState();
  const [stock, setStock] = useState();

  const onSubmit = (symbol, days, selectedServices) => {
    setStock(symbol);
    setData(dataGenerator(symbol, days, selectedServices));
  };

  return (
    <div className="App">
      <Header />
      <StockSearchForm onSubmitHandler={onSubmit} />
      <Dashboard stockData={data} stockName={stock} />
    </div>
  );
}

export default App;
