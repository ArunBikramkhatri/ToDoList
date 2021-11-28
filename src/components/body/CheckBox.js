import React from "react";

function CheckBox(){
    return(
        <div className="checkBox">
            <span><input type="checkbox" className="Box" />Code for 12 hrs<br/></span>
            <span><input type="checkbox" className="Box" />Exercise 1 hr<br/></span>
            <span><input type="checkbox" className="Box" />Cook<br/></span>
            <span><input type="checkbox" className="Box"/>Sleep<br/></span>

        </div>
    )
}
export default CheckBox;