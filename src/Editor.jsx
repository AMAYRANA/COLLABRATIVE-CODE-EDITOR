import Editor from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import * as monaco from "monaco-editor";
import { useState,useRef,useEffect } from "react";
import Chat from "./Chat";

function CodeEditor(){
    const socket = useRef(null);
     const[code,Setcode] = useState("");
     const {roomid} = useParams();
   
     useEffect(()=>{
         console.log(roomid)
        console.log("running useeffect")
        console.log(roomid);
        socket.current = new WebSocket(`ws://localhost:3000/${roomid}`) 
        
        socket.current.onopen = ()=>{
            console.log("User Connected")
        }

        socket.current.onmessage = (event)=>{
            let data = event.data;
              let newcode = data.toString();
            Setcode(newcode);
        }
   
    socket.current.onclose = ()=>{
        console.log("User disconnected")
    }
     },[])

     const handlechange=(value)=>{
       const newcode = value || "";

       Setcode(newcode);

      if(socket.current?.readyState === WebSocket.OPEN )
      {
        socket.current.send(newcode);
      }
     }
    return(
        <>
        <Editor 
        height="90vh"
        defaultLanguage = "javascript"
        theme="vs-dark"
        value = {code}
        onChange = {handlechange}
        defaultValue="START CODING ....."
        />
        <button>Send</button>
        <Chat />
    
        </>
    )
}

export default CodeEditor;