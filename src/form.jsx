import React, { useState } from 'react'

export const Form = () => {
    const [tinput, setTinput] = useState({
        fname : "" ,
        lname : "" ,
        email : "" ,
        phone : "" 
    })
    // const [submit, setSubmit] = useState("")
    const changehandler = (e)=>{
        const {value,name} = (e.target);
       setTinput((preValue)=>{
           return {
               ...preValue,
               [name]:value

           }
            
            // if(name==="fname"){
            //     return{
            //         fname:value,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:preValue.phone

            //     };
            // }
            // else if(name==="lname"){
            //     return{
            //         fname:preValue.fname,
            //         lname:value,
            //         email:preValue.email,
            //         phone:preValue.phone

            //     }
            // }
            // else if(name==="email"){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:value,
            //         phone:preValue.phone

            //     }
            // }else if(name==="phone"){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:value

            //     }
            // } 
        }
        ) }
    
    return (
        <div>
           <h2>Hello {tinput.fname}{tinput.lname}</h2>
           <h4>{tinput.email}</h4>
           <h4>{tinput.phone}</h4>

           <label htmlFor="fname">First Name</label><br />
           <input type="text" placeholder='Type Here..' id='name' onChange={changehandler} name="fname" />

           <label htmlFor="lname">Last Name</label><br />
           <input type="text" placeholder='Type Here..' id='lname' onChange={changehandler} name="lname" />

            <label htmlFor="email">Email</label>
           <input type="text" placeholder='Type Here..' id='email' onChange={changehandler}  name='email' />

            <label htmlFor="phone">Phone</label>
           <input type="text" placeholder='Type Here..' id='phone' onChange={changehandler}  name='phone' />

           <button >Click me</button>   
        </div>
    )
}
