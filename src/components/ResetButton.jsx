import React from "react";

function ResetButton({reset})
{
    return(
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ResetButton;