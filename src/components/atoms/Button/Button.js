import styles from "./Button.module.css";

export default function ({ text, onClick }) {

    return (


        <div onClick={onClick} className={styles.button}>
            {text}
        </div>

    );


}