import React from 'react'
import { useState,useEffect } from 'react'

export default function Timer() {
        const [time, setTime] = useState(0);
        const [isRunning,setIsRunning]=useState(false)
        useEffect(() => {
            let interval;
            if (isRunning) {
              interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
              }, 10);
            } else {
              clearInterval(interval);
            }
            return () => clearInterval(interval); // Cleanup the interval on component unmount
          }, [isRunning]);
      
        
      const startTimer=()=>{
        setIsRunning(true)
      }
        const stopTimer = () => {
            setIsRunning(false)
        };
      
        const resetTimer = () => {
            setIsRunning(false)
          setTime(0);
        };
        const realTime=(time)=>{
            const hours = Math.floor(time / 3600000);
            const minutes = Math.floor((time % 3600000) / 60000);
            const seconds = Math.floor((time % 60000) / 1000);
            const milliseconds = Math.floor((time % 1000) / 10);            return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds < 10 ? `0${milliseconds}` : milliseconds}`;
        }
      
        return (
        
          <div className='h-screen flex flex-col justify-center items-center bg-red-50' >
      

            <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">Stopwatch</h1>
            </div>
            <div className="flex items-center justify-center mb-8">
                <h1 className="text-3xl font-mono">{realTime(time)}</h1>
            </div>
            <div className="flex space-x-4">
                {isRunning ?(

                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={stopTimer}>Stop</button>
                ):(

                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={startTimer}>Start</button>
                )
                
                }
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={resetTimer}>Reset</button>
            </div>
        </div>
          </div>
        );
}
