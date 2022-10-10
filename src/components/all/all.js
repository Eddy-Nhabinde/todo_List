import Btn from "../input/button/button";
import BasicTextFields from "../input/textField/textField";
import styles from './all.module.css'

export function All() {
    return (
        <div className={styles.details}>
            <BasicTextFields />
            <Btn />
        </div>
    )
}