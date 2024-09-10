import React from "react";
import '../style.css';
function StartButton({startStopwatch})
{
    return(
        <div>
            <button className="button" onClick={startStopwatch}>Start</button>
        </div>
    );
}

export default StartButton;