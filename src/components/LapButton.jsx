import React from "react";

function LapButton({setLapArr})
{
    return(
        <div>
            <button onClick={setLapArr}>Set lap</button>
        </div>
    );
}

export default LapButton;