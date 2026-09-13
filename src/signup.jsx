import {useNavigate} from "react-router-dom";
import {useState} from "react";

function signup(){
   const[room,changeRoom] = useState("");
   const[password,changePassword] = useState("");

const navigate = useNavigate();
async function HandleChange(e){
   e.preventDefault();
   
   const formdata = new FormData(e.target);
   const room = formdata.get("room");
   const password = formdata.get("password");


  const response =  await fetch("http://localhost:3000/signup", {
               method:"POST",
               headers:{
                  "Content-Type":"application/json"
               },
               body: JSON.stringify({roomname:room,password:password})
   }

   ) 
   const data = await response.json();
   const roomid = data._id;
   console.log(roomid);
   navigate(`/editor/${roomid}`)
}
   return(
      <>
      <button  onClick={()=>navigate("/")}> BACK</button>
      <div>
         <form onSubmit={HandleChange}>
        <input name="room" type="text" placeholder="enter room name" minLength ={5} maxLength={20}  value={room} onChange={(e)=>{ changeRoom(e.target.value)}}/>
        <input name="password" type="password" placeholder="enter password" minLength={5} maxLength={10} value={password} onChange={(e)=>{changePassword(e.target.value)}}/>
        <button  type ="submit"> Create room</button>
        </form>
      </div>
      
      
      </>

   )
}
  
export default signup;