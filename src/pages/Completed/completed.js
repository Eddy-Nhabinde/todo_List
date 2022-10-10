import Checkbox from "../../components/checkBox/checkBox"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import styles from './completed.module.css'
import { Button } from "@material-ui/core";

export function Complet() {
    return (
        <div style={{ paddingLeft: '25%', marginTop: '25px', width: '50%' }}>
            <table style={{ width: '100%' }}>
                <tr>
                    <td>
                        <Checkbox />
                    </td>
                    <td>
                        Do coding chaallenges
                    </td>
                    <td className={styles.icon}>
                        <DeleteOutlineIcon />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Checkbox />
                    </td>
                    <td>
                        Do coding chaallenges
                    </td>
                    <td className={styles.icon}>
                        <DeleteOutlineIcon />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Checkbox />
                    </td>
                    <td>
                        Do coding chaallenges
                    </td>
                    <td className={styles.icon}>
                        <DeleteOutlineIcon />
                    </td>
                </tr>
            </table>
            <div className={styles.h1} >
                <Button variant="contained" color="secondary">
                    Delete All
                </Button>
            </div>
        </div>
    )
}