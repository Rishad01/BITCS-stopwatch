import React from "react";

function Time({time})
{


    return (
        <div>
            <h3>{Math.floor(time/360000)}:{Math.floor((time % 360000) / 6000)}:{Math.floor((time % 6000) / 100)}:{time%100}</h3>
        </div>
    );
}

export default Time;