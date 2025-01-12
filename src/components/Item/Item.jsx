import styles from './Item.module.css'
import {ReactComponent as PencilIcon} from '../../icons/pencil.svg'

const Item = ({ item, onComplited, onEdit }) => {
   const { text, id, complited } = item
   return (
      <li className={styles.container}>
         <input type="checkbox" id={`checkbox-${id}`} checked={complited} onChange={() => onComplited(id)} className={styles.checkbox} />
         <label className={styles.label} htmlFor={`checkbox-${id}`}> {text}
         </label>
         <PencilIcon className={styles.edit} onClick={()=> onEdit(id)}/>
      </li>
   )
};

export default Item