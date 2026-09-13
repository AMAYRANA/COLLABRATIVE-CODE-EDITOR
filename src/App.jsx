import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./Home.jsx";
import Signup from "./signup.jsx";
import Login from "./login.jsx"
import Editor from "./Editor.jsx";

function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path = "/signup" element = {<Signup/>} /> 
        <Route path="/login" element= {<Login/>}/>
        <Route  path="/editor/:roomid" element={<Editor />} />
    </Routes>
    </BrowserRouter>
    )

}
export default App;