import React from "react";
import '../style.css';
function PauseButton({pause})
{
    return(
        <div>
            <button className="button" onClick={pause}>Pause/Stop</button>
        </div>
    )
}

export default PauseButton;