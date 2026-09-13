import {useNavigate} from "react-router-dom";
import {useState} from "react";

let roomid = null;

function Login(){
    const [room,Setroom] = useState("");
    const [password,Setpassword] = useState("")

    const navigate = useNavigate();
    async function HandleChange(e){
       e.preventDefault();
       const formdata = new FormData(e.target);
       const roomname = formdata.get("roomname")
    const password = formdata.get("password")

   const response =  await fetch('http://localhost:3000/login',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({roomname:roomname,password:password})
    })
    const data = await response.json();

    if(response.ok){
      console.log(data.roomid);
    console.log(data.message);

    roomid = data.roomid;
        navigate(`/editor/${roomid}`)
    }
    else{
        console.log("something went wrong")
        console.log(data.message)
    }
    }


    return(
        <>
        <button onClick={()=>navigate("/")} >BACK</button>
        <form onSubmit={HandleChange}>
         <input name="roomname" type="text" placeholder="enter room name" minLength ={5} maxLength={20}  value={room} onChange={(e)=>{ Setroom(e.target.value)}}/>
         <input name="password" type="password" placeholder="enter password" minLength={5} maxLength={10} value={password} onChange={(e)=>{Setpassword(e.target.value)}}/>
        <button type ="submit"> Join room</button>
        </form>
        </>
    )

}

export default Login;