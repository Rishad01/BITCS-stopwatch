import {useState,useEffect,useRef} from "react";
import Time from "./Time";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import LapButton from "./LapButton";
import Laps from "./Laps";
import displayTime from "../utility/displayTime.js";
import '../style.css';
function Stopwatch()
{
    const[time,setTime]=useState(0);
    const[laps,setLap]=useState([]);
    const[paused,setPause]=useState(false);
    const[start,setStart]=useState(false);
    let interval=useRef();
    useEffect(()=>{
        if(start===true && paused===false){
        interval.current=setInterval(()=>{setTime((time)=>(time+1))},10);
        }
        else if(paused===true){
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
        const timer=displayTime(time);
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
                {!start && <StartButton startStopwatch={startStopwatch} />}
                {start && <PauseButton pause={pause} />}
                {start && <LapButton setLapArr={setLapArr}/>}
                {paused && <ResetButton reset={reset} />}
            </div>
            <Laps laps={laps} />
        </div>
    )
}

export default Stopwatch;