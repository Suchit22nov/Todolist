import React, { useState } from 'react'
import "./inde.css"
import { Task } from './task';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


export const Todo = () => {
    const [input, setInput] = useState("");
    const [carray, setCarray] = useState([]);

    const arrayhandler =()=>
    {
        setCarray((oldvalue)=>{
            return[...oldvalue,input]


        })
        setInput("")
       
       

    }
    const removehandler =(id)=>{
        setCarray((oldvalue)=>{
            return oldvalue.filter((arrE,index)=>{
                return index !==id;
            })
        })
       
    }
    
    
    return (
        <div className='center'>
        <div className='left'><input type="text"  placeholder='Type Here What To Do' value={input} onChange={(event)=>{setInput(event.target.value)}}/></div>
        <div className="right"><button onClick={arrayhandler}>click me</button>
        <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer></div>
        <div className="task">
            {carray.map((e,index)=>{
                return (<>
               <Task  e={e} key={index} id={index} submit={removehandler}/>
                </>)
            })} 
        </div>
            
           
            
        </div>
    )
}
