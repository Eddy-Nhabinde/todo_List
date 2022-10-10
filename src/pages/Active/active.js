import Checkbox from "../../components/checkBox/checkBox"
import { All } from "../../components/all/all"

export function ActiveTodos() {
    return (
        <>
            <All />
            <div style={{ paddingLeft: '25%', marginTop: '15px' }}>
                <table>
                    <tr>
                        <td>
                            <Checkbox />
                        </td>
                        <td>
                            Do coding chaallenges
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox />
                        </td>
                        <td>
                            Do coding chaallenges
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}