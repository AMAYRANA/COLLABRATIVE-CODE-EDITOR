import styles from "./middle.module.css"
import {useNavigate} from "react-router-dom"

function middle(){
    const navigate = useNavigate();
    return(
    <>
    <div className={styles.mid}>
    <h1 id={styles.hed1}>CODE TOGETHER IN REAL TIME</h1>
    <p id={styles.para1}>A shared editor </p>
    <button id={styles.btn1} onClick={()=> navigate("/login")}> CREATE ROOM </button>
    </div>
    </>
    )
}

export default middle;