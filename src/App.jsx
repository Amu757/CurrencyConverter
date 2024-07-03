import { useState } from "react";
import "./App.css";
import Inputbox from "./components/currencyConverter/Inputbox";
import useCurrencyInfo from "./components/currencyConverter/cutomehooks/useCurrencyInfo";
function App() {
  const [selectedValue, setSelectedValue] = useState(0);
  const [responseValue, setResponseValue] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [valueDisabled, setValueDisabled] = useState(false);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setSelectedValue(responseValue);
    setResponseValue(selectedValue);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convert = () => {
    setResponseValue(selectedValue * currencyInfo[toCurrency]);
  };
  return (
    <div className="mostouterbox">
      <Inputbox
        label="From"
        selectedValue={selectedValue}
        valueDisabled={valueDisabled}
        currencyOptions={currencyOptions}
        CurrencyType={fromCurrency}
        onValueChange={(e) => setSelectedValue(e.target.value)}
        onCurrencyChange={(e) => setFromCurrency(e.target.value)}
      />
      <button className="button" onClick={swap}>
        Spap
      </button>
      <Inputbox
        label="To"
        selectedValue={responseValue}
        valueDisabled={true}
        currencyOptions={currencyOptions}
        CurrencyType={toCurrency}
        onValueChange={(e) => responseValue(e.target.value)}
        onCurrencyChange={(e) => setToCurrency(e.target.value)}
      />
      <button className='button' onClick={convert}>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}</button>
    </div>
  );
}

export default App;
