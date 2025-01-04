import { useState } from "react"
import style from './MenuControling.module.css'


const ControlingSection =() =>{

const [activeIndex, setActiveIndex]=useState(0)


    return(
       <ul>
<li className={style.menuItem}>All</li>
<li className={style.menuItem}>Active</li>
<li className={style.menuItem}>Complited</li>
       </ul>
    )
}