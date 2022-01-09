import React, { useState } from 'react';
import "./inde.css";

export const Incanddec = () => {
    const [Inc, setInc] = useState(0)
    
    const inchandler=()=>{
        setInc((e)=>{
            return e+1;
        })

    }
    const dechandler=()=>{
        setInc((e)=>{
            return e-1;
        })

    }


    
    return (
        <div className='center'>
            <div className='divcen'>
            <button onClick={dechandler}>DEC</button>
            <h1><span>{Inc}</span></h1>
            <button onClick={inchandler}>Inc</button>
            </div>
            
        </div>
    )
}
