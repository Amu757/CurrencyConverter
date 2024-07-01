import "./inputbox.css"
function Inputbox({
label="from",

}) {

  return (
    <div className="outerbox">
        <div className="box1">
            <div className="leftbox">
                <label htmlFor="">{label}</label>
                <input type="number" />
                
            </div>
            <div className="rightbox">
                <label htmlFor="">Currency Options</label>
                <select>
                    <option value=""></option>
                </select>
            </div>
        </div>
       
    </div>
  )
}

export default Inputbox