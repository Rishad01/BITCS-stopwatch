import React from "react";
import '../style.css';
function ResetButton({reset})
{
    return(
        <div>
            <button className="button" style={{backgroundColor:"red"}} onClick={reset}>Reset</button>
        </div>
    );
}

export default ResetButton;