import { useState } from "react";
function form(){
const [email , setEmail] = useState("")
const [password,setPassword] = useState("")
    return(

        <>
        <input
         type = "email"
        placeholder = "ENTER UR EMAIL"
        value={email}
        onChange={(e)=>{
           setEmail(e.target.value)
        }}
      />

      <input
        type="password"
        placeholder = "ENTER UR PASSWORD"
        value={password}
    onChange={(e)=>{
        setPassword(e.target.value)
    }}
        />

        <button onClick={()=>{console.log(email) , console.log(password)}}>print</button>
      </>
       
    )
}

export default form;