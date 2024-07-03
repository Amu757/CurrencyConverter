/* eslint-disable react/prop-types */
import "./inputbox.css";
function Inputbox({
  label,
  selectedValue,
  valueDisabled,
  currencyOptions,
  CurrencyType,
  onValueChange,
  onCurrencyChange
}) {
  return (
    <div className="outerbox">
      <div className="box1">
        <div className="leftbox">
          <label htmlFor="">{label}</label>
          <input
            className="line2 line1"
            type="number"
            defaultValue="0"
            disabled={valueDisabled}
            value={selectedValue}
            onChange={onValueChange}
          />
        </div>
        <div className="rightbox">
          <label htmlFor="">Currency Options</label>
          <select
            className="line2"
            defaultValue={CurrencyType}
            onChange={onCurrencyChange}
            value={CurrencyType}
          >
            {currencyOptions.map((Currency) => (
              <option key={Currency}>{Currency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
