import styles from "./navbar.module.css";
function Navbar(){
    return(
        <>
        <div className= {styles.navbar}>
        <h4>code editor</h4>
        <div className={styles.buttons}>
        <button id={styles.btn1}>Sign in</button>
        <button id ={styles.btn2}> Stat coding</button>
        </div>
        </div>
        </>
     )
    
}
export default Navbar;