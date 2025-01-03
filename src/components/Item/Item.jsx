import styles from './Item.module.css'

const Item = ({item, onComplited})=> {
 const {text, id, complited} = item
return(
   <li className={styles.container}>
      <label className={styles.label}>
        <input type="checkbox" checked={complited} onChange={() => onComplited(id)} className={styles.checkbox} />
    {text}
    </label>
   </li>
)
};

export default Item