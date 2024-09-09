import React from "react";

function Stopwatch()
{
    const[time,setTime]=React.useState(0);
    const[laps,setLap]=React.useState([]);
    const[paused,setPause]=React.useState(false);
    const[start,setStart]=React.useState(false);
    let interval=React.useRef();
    React.useEffect(()=>{
        if(start==true && paused==false){
        interval.current=setInterval(()=>{setTime((time)=>(time+1))},10);
        }
        else if(paused==true){
            clearInterval(interval.current);
        }

        return () => {
            clearInterval(interval.current);
        }
    },[start,paused]);


    const startStopwatch=()=>{
        setStart(true);
        setPause(false);
    }

    const pause=()=>{
        setPause(true);
        setStart(false);
    }

    const reset=()=>{
        setTime(0);
        setStart(false);
        setPause(false);
        setLap([]);
    }

    const setLapArr=()=>{
        if(!laps.includes(time))
        setLap([...laps,time]);
    }

    return(
        <div>
            <h1>Stopwatch</h1>
            <div>
                <h4>{time}</h4>
            </div>
            <div>
                <button onClick={startStopwatch}>Start</button>
                <button onClick={pause}>Pause/Stop</button>
                {paused&&<button onClick={reset}>Reset</button>}
                <button onClick={setLapArr}>Set lap</button>
            </div>
            {laps.length>0 && <div>
            <ol>
            {laps.map((lap,index)=>
                <li key={index}>{lap}</li>
            )}
            </ol>
            </div>}
        </div>
    )
}

export default Stopwatch;