import React from "react";
import '../style.css';
function Laps({laps})
{
    return(
        <div>
        {laps.length>0 && <h2>Laps</h2>}
        {laps.length>0 && <div className="centered">
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