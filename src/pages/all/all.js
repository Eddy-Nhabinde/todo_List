import Btn from "../../components/input/button/button";
import BasicTextFields from "../../components/input/textField/textField";
import styles from './all.module.css'

export function All() {
    return (
        <div className={styles.details}>
            <BasicTextFields />
            <Btn />
        </div>
    )
}