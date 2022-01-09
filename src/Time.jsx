import React, { useState } from 'react'

export const Time = () => {
    let time= new Date().toLocaleTimeString();
    const [current, setCurrent] = useState(time);
    const timehandler =()=>{
        setCurrent(time)
    }
    setInterval(timehandler,10000);
   
    return (
        <div style={{textAlign:"center"}}>
            <h1>{current}</h1>
        



            
        </div>
    )
}
