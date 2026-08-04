import styles from "./middle.module.css"
function middle(){
    return(
    <>
    <div className={styles.mid}>
    <h1 id={styles.hed1}>CODE TOGETHER IN REAL TIME</h1>
    <p id={styles.para1}>A shared editor </p>
    <button id={styles.btn1}> CREATE ROOM </button>
    </div>
    </>
    )
}

export default middle;