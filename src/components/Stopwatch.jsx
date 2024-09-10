import React from "react";
import Time from "./Time";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import LapButton from "./LapButton";
import Laps from "./Laps";
import '../style.css';
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
        const timer=`${Math.floor(time/360000).toString().padStart(2, '0')}:${Math.floor((time % 360000) / 6000).toString().padStart(2, '0')}:${Math.floor((time % 6000) / 100).toString().padStart(2, '0')}:${(time%100).toString().padStart(2, '0')}`;
        console.log(typeof(timer));
        if(!laps.includes(timer))
        setLap([...laps,timer]);
    }

    return(
        <div>
            <h1>Stopwatch</h1>
            <div>
                <h4><Time time={time}/></h4>
            </div>
            <div className="centered">
                <StartButton startStopwatch={startStopwatch} />
                <PauseButton pause={pause} />
                <LapButton setLapArr={setLapArr}/>
                {paused && <ResetButton reset={reset} />}
            </div>
            <Laps laps={laps} />
        </div>
    )
}

export default Stopwatch;