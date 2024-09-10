import React from "react";
import '../style.css';
function LapButton({setLapArr})
{
    return(
        <div>
            <button className="button" onClick={setLapArr}>Set lap</button>
        </div>
    );
}

export default LapButton;