import MenuControl from "../MenuControling/MenuControling"
import { useTodoContext } from "../../context/context"
import styles from './SectionControl.module.css'


const SectionControl = () => {

    const { deleteComplitedTodos } = useTodoContext()

    return (
        <div className={styles.container}>
            <MenuControl options={["All", "Active", "Complited"]} />
            <div className={styles.menuItem} onClick={deleteComplitedTodos}>Clear complited</div>
        </div>
    )
}

export default SectionControl