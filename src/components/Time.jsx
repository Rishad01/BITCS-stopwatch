import React from "react";
import displayTime from "../utility/displayTime";
function Time({time})
{


    return (
        <div>
            <h1>{displayTime(time)}</h1>
        </div>
    );
}

export default Time;