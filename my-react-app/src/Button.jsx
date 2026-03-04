

function Button () {

    const styles = {
        btn: {
            backgroundColor: 'blue',
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
        }
    }

    return(
<button className={styles.btn}>Click me</button>

    );

}

export default Button;