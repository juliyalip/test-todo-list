import { useState, useMemo } from 'react'
import classNames from 'classnames';
import { useTodoContext } from '../../context/context';
import styles from './MenuControling.module.css'

const MenuControl = ({ options }) => {

    const { todos } = useTodoContext();
    const [activeIndex, setActiveIndex] = useState(0)

    const totalCount = todos.length

    const incompleteCount = useMemo(() => {
        return todos.filter(todo => !todo.complited).length;
    },
        [todos]);


    const complitedCount = useMemo(() => todos.reduce(
        (total, todo) => (todo.complited ? total + 1 : total),
        0), [todos]);


    const clickOnAction = index => {
        setActiveIndex(index)
    }

    const result = useMemo(() => {
        if (activeIndex === 0) return totalCount;
        if (activeIndex === 1) return incompleteCount;
        if (activeIndex === 2) return complitedCount;
        return totalCount;
    }, [activeIndex, totalCount, incompleteCount, complitedCount]);


    return (
        <div className={styles.container}>
            <div className={styles.menuItem}>{result} items left</div>
            <ul className={styles.containerAction}>
                {options.map((option, index) => (
                    <li key={index} className={classNames(styles.menuItem, {
                        [styles.activeMenu]: activeIndex === index
                    })} onClick={() => { clickOnAction(index) }}>{option}</li>
                ))}
            </ul>


        </div>
    )
};

export default MenuControl