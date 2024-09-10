import React from "react";

function StartButton({startStopwatch})
{
    return(
        <div>
            <button onClick={startStopwatch}>Start</button>
        </div>
    );
}

export default StartButton;