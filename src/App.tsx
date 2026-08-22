import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Editor from "./Editor";

function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path = "/login" element = {<Login/>} /> 
        <Route  path="/editor" element={<Editor />} />
    </Routes>
    </BrowserRouter>
    )

}
export default App;