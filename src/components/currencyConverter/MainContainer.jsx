import React, { useState } from "react";
import CoversionBox from "./CoversionBox";
import useCurrencyInfo from "./useCurrencyInfo";

export default function MainContainer() {
const [amount,setAmount] = useState(0)
const [from,setFrom] = useState("inr")
const [to,setTo] = useState("usd")
const [convertedAmt,setCovertedAmt] = useState(0)

const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo)

const swap = ()=>{
  setFrom(to)
  setTo(from)
  setCovertedAmt(amount)
  setAmount(convertedAmt)
}

const convet=()=>{setCovertedAmt(amount*convertedAmt)}
  return (
    <div className="flex justify-center content-center w-screen h-screen relative">
      <div className="w-1/2 h-1/2">
        <CoversionBox />
        <button className="bg-blue-500 px-5 py-5 jusjify-self-center absolute top-1/3 left-1/2">
          Swap
        </button>
      </div>
    </div>
  );
}
