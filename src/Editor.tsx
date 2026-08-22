import Editor from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import { useState,useRef,useEffect } from "react";
import Chat from "./Chat";

function CodeEditor(){
    const socket = useRef<WebSocket | null>(null)
     const[code,Setcode] = useState("");
   
     useEffect(()=>{

        console.log("running useeffect")
    
        socket.current = new WebSocket('ws://192.168.31.80:3000') 
        
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

     const handlechange=(value:string |undefined)=>{
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