import {useNavigate} from "react-router-dom"
function Login(){
const navigate = useNavigate();
   return(
      <>
      <button  onClick={()=>navigate("/")}> BACK</button>
      <button onClick ={()=>navigate("/editor")}> Editor</button>
      <div>
        <input type="" />
      </div>
      </>

   )
}
  
export default Login;