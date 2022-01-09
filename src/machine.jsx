import React from 'react'

export const Machine = (props) => {
    const x = props.x;
    const y =props.y;
    const z= props.z;
    if (x === y && y === z) {
        return (
            <> <div style={{textAlign:"center",backgroundColor:"Green" , margin:"30px"}}><h1>All three emoji matched you won</h1>
            <span>{x}</span>
                <span>{y}</span>
                <span>{z}</span>
            </div>
            
            </>
        )
    }
    else {
        return (
            <> <div style={{textAlign:"center" ,backgroundColor:"red" , margin:"30px"}}>
            <h1>Emoji doesn't match </h1>
                <span>{x}</span>
                <span>{y}</span>
                <span>{z}</span></div> </>
        )
    }
}

