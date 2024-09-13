import React, { useState } from 'react'

const Signup = () => {
    const[name, setName]=useState("");
    const HandleChange=()=>{
      console.log("change");
      setName(name.toUpperCase());
    }
    const onChangeHandle=(event)=>{
      setName(event.target.value);
      console.log("add name");
    }
  return (
    <div>
        <label>Name :</label>
        <input type='text' value={name} onChange={onChangeHandle} name='Name' placeholder='Enter Your Name'/><br/>
        <label>Email:</label>
        <input type='text'value={name} onChange={onChangeHandle}name='Email' placeholder='Enter Your Email'/><br/>
        <label>PhoneNumber :</label>
        <input type='number' value={name}onChange={onChangeHandle} name='PhoneNumber'  placeholder='Enter Your Number'/><br/>
         <button onClick={HandleChange}>Signup</button>

<h2>all Data Display</h2>
{name}
    </div>
  )
}

export default Signup