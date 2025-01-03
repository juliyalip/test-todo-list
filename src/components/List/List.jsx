import Item from '../Item/Item'
import styles from './List.module.css'

const List = ({ items,  onComplited}) => {
    return (
        items.length > 0 && (
            <ul className={styles.container}>
              {items.map((item) => (
                <Item
                  key={item.id}
                  item={item} 
                  onComplited={onComplited} 
                />
              ))}
            </ul>
          )
    )


}

export default List

