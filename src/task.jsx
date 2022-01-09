import React from 'react';

export const Task = (props) => {
    
    return (
        <div>
             <h1>{props.e} </h1>
                <button onClick={()=>{props.submit(props.id)}}>remove</button>
        </div>
    )
}
