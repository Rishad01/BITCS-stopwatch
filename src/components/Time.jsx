import React from "react";

function Time({time})
{


    return (
        <div>
            <h1>{Math.floor(time/360000).toString().padStart(2, '0')}:{Math.floor((time % 360000) / 6000).toString().padStart(2, '0')}:{Math.floor((time % 6000) / 100).toString().padStart(2, '0')}:{(time%100).toString().padStart(2, '0')}</h1>
        </div>
    );
}

export default Time;