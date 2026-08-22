import { useState } from "react"

function Chat(){
   const[message,Setmessage] = useState("");

    return(
        <>
        <input 
        placeholder="Type Anything"
        type="text"
        value={message}
        onChange = {(e)=>{
          Setmessage(e.target.value)
        }}
        />
        </>

    )
}

export default Chat;