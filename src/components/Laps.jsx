import React from "react";

function Laps({laps})
{
    return(
        <div>
        {laps.length>0 && <div>
            <ol>
            {laps.map((lap,index)=>
                <li key={index}>{lap}</li>
            )}
            </ol>
            </div>}
        </div>    
    );
}

export default Laps;