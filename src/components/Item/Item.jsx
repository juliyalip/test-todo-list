import styles from './Item.module.css'

const Item = ({ item, onComplited }) => {
   const { text, id, complited } = item
   return (
      <li className={styles.container}>
         <input type="checkbox" id={`checkbox-${id}`} checked={complited} onChange={() => onComplited(id)} className={styles.checkbox} />
         <label className={styles.label} htmlFor={`checkbox-${id}`}> {text}
         </label>
      </li>
   )
};

export default Item