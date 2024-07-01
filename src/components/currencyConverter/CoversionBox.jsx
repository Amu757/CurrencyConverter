import { useEffect,useId, useState } from "react";
import useCurrencyInfo from "./cutomehooks/useCurrencyInfo"

export default function CoversionBox() {
  amount=0,
 onAmoutChange,
 onCurrencyChange,
 amountDisable = false,
 currencyDisable = false,
 selectedCurrency='inr',
 currencyOptions=[],
  
  
const amoutInputId = useId()
  
  return (
    <>
      <div className="flex flex-col w-full h-3/4 bg-green-500 my-3 relative ">
        <label className="inline-block h-10 ml-5">From</label>
        <label htmlFor={amoutInputId} className="ml-5">{label}</label>
        <input
         id={amoutInputId}
          type="number"
          className="bg-red-200 w-20 ml-5 mt-5"
          value={amount}
          onChange={(e) => onAmoutChange && onAmoutChange(Number(e.target.value))}
          disabled={amountDisable}
        >
        </input>

        <select
          className="absolute right-0 top-1/2 px-3 py-5"
          value={selectedCurrency}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          defaultValue="INR"
        >
{currencyOptions.map((currency)=> <option key={currency}>{currency}</option>)}
        </select>
      </div>
      {/* <div className="flex flex-col w-full h-3/4 bg-green-500 my-3 relative ">
        <label className="inline-block h-10 ml-5">To</label>
        <label className="ml-5">USD</label>
        <input
          type="number"
          value={toValue}
          className="bg-red-200 w-20 ml-5 mt-5"
          onChange={(e) => setToValue(e.target.value)}
        >
        </input>

        <select
          className="absolute right-0 top-1/2 px-3 py-5"
          defaultValue="USD"
        >
          <option>usd</option>
          <option>ind</option>
        </select>
      </div> */}
    </>
  );
}
