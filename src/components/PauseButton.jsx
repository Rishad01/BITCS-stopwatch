import React from "react";

function PauseButton({pause})
{
    return(
        <div>
            <button onClick={pause}>Pause/Stop</button>
        </div>
    )
}

export default PauseButton;