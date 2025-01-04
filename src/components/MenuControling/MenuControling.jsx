import { useState, useMemo, useEffect } from 'react'
import classNames from 'classnames';
import { useTodoContext } from '../../context/context';
import styles from './MenuControling.module.css'


const MenuControl = ({ options }) => {
    const { incompleteCount, complitedCount } = useTodoContext();

    const totalCount = useMemo(()=>{
return incompleteCount + complitedCount
    }, [incompleteCount, complitedCount])


    const [activeIndex, setActiveIndex] = useState(0)
   

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