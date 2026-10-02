import { useState } from "react"
import "./chat.css"

function Chat(){
   const[message,Setmessage] = useState("");
   const [messages,Setmessages] = useState([]);

   async function sendmessage(e)
   {
    e.preventDefault();
    const chatdata = new FormData(e.target);
    const item = chatdata.get("message");

    if(message.trim() ==="" )return;
    Setmessages([...messages,item]);  
    Setmessage("");                   
   }



    return(
        <>
        <div className="chatsystem">

        <div className="chatbox">
         {messages.map((element,index) => (
          <div className="message-bubble" key={index}>
            {element}
        </div>
         ))}

        </div>
        <form onSubmit={sendmessage}>
        <input 
        name="message"
        placeholder="Type Anything"
        type="text"
        value={message}
        onChange = {(e)=>{
          Setmessage(e.target.value)
        }}
        />
        <button type="submit">Send</button>
        </form>
        </div>
        
        </>

    )
}

export default Chat;